"use strict";

import Yapp from "yapp";

import { domUtilities } from "highmark-markdown";

const { remove, insertAfter, insertBeforehand } = domUtilities;

export default class BlockListing extends Yapp {
  mount(parentDOMElement, siblingDOMElement, context) {
    const domElement = this.getDOMElement();

    (siblingDOMElement !== null) ?
      insertAfter(domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(domElement, parentDOMElement);

    this.didMount();

    siblingDOMElement = domElement;  ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
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
