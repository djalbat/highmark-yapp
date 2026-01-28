"use strict";

import Yapp from "yapp";

import { domUtilities } from "highmark-markdown";
import { elementUtilities } from "easy";

const { mountElement, unmountElement } = elementUtilities,
      { remove, insertAfter, insertBeforehand } = domUtilities;

export default class BlockListing extends Yapp {
  mount(parentDOMElement, siblingDOMElement, context) {
    const domElement = this.getDOMElement();

    (siblingDOMElement !== null) ?
      insertAfter(domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(domElement, parentDOMElement);

    const element = this; ///

    mountElement(element);

    siblingDOMElement = domElement;  ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
    const element = this; ///

    unmountElement(element);

    const domElement = this.getDOMElement();

    remove(domElement, parentDOMElement);
  }

  static defaultProperties = {
    editable: false,
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };

  static fromContentAndConfiguration(content, configuration) { return Yapp.fromContentAndConfiguration(BlockListing, content, configuration); }
}
