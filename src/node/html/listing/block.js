"use strict";

import { HTMLNode } from "highmark-markdown";

import BlockListing from "../../../blockListing";

import { EMPTY_STRING } from "../../../constants";

export default class BlockListingHTMLNode extends HTMLNode {
  getBlockListing() {
    const domElement = this.getDOMElement(),
          { __element__ } = domElement, ///
          blockListing = __element__; ///

    return blockListing;
  }

  content(context) {
    let content = EMPTY_STRING;

    const multiplicity = this.getMultiplicity(),
          firstIndex = 0,
          lastIndex = multiplicity - 1;

    this.forEachChildNode((childNode, index) => {
      if ((index !== firstIndex) && (index !== lastIndex)) {
        const childNodeContent = childNode.content(context);

        content = `${content}${childNodeContent}`;
      }
    });

    content = content.replace(/\n$/, EMPTY_STRING);

    return content;
  }

  className(context) {
    const className = this.fromFirstChildNode((firstChildNode) => {
      const blockListingStartHTMLNode = firstChildNode, ///
            className = blockListingStartHTMLNode.className(context);

      return className;
    });

    return className;
  }

  createDOMElement(context) {
    const content = this.content(context),
          className = this.className(context),
          language = className, ///
          configuration ={
            language
          },
          blockListing = BlockListing.fromContentAndConfiguration(content, configuration),
          domElement = blockListing.getDOMElement();

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(BlockListingHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockListingHTMLNode, outerNode); }
}
