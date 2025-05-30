"use strict";

import { BlockListingHTMLNode as BlockListingHTMLNodeBase } from "highmark-markdown";

import BlockListing from "../../../blockListing";

export default class BlockListingHTMLNode extends BlockListingHTMLNodeBase {
  constructor(outerNode, parentNode, childNodes, domElement, blockListing) {
    super(outerNode, parentNode, childNodes, domElement);

    this.blockListing = blockListing;
  }

  getBlockListing() {
    return this.blockListing;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    this.blockListing = this.createBlockListing(context);

    siblingDOMElement = this.blockListing.mount(parentDOMElement, siblingDOMElement, context);

    return siblingDOMElement;
  }

  unmount(parentDOMElement, context) {
    this.blockListing.unmount(parentDOMElement, context);

    this.blockListing = null;
  }

  createBlockListing(context) {
    const content = this.content(context),
          className = this.className(context),
          language = className, ///
          configuration ={
            language
          },
          blockListing = BlockListing.fromContentAndConfiguration(content, configuration);

    return blockListing;
  }

  static fromNothing() {
    const blockListing = null,
          blockListingHTMLNode = BlockListingHTMLNodeBase.fromNothing(BlockListingHTMLNode, blockListing);

    return blockListingHTMLNode;
  }

  static fromOuterNode(outerNode) {
    const blockListing = null,
          blockListingHTMLNode = BlockListingHTMLNodeBase.fromOuterNode(BlockListingHTMLNode, outerNode, blockListing);

    return blockListingHTMLNode;
  }
}
