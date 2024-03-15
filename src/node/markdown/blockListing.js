"use strict";

import { MarkdownNode } from "highmark-markdown";
import { arrayUtilities } from "necessary";
import { elementUtilities } from "easy";

import BlockListing from "../../blockListing";

const { first, second } = arrayUtilities,
      { mountElement, unmountElement } = elementUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const className = this.getClassName(),
          language = className, ///
          content = this.content(context),
          configuration ={
            language
          },
          blockListing = BlockListing.fromContentAndConfiguration(content, configuration),
          domElement = blockListing.getDOMElement();

    this.setDOMElement(domElement);

    return domElement;
  }

  content(context) {
    let content;

    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode; ///

    content = blockTextMarkdownNode.content(context);

    content = content.slice(0, -1);

    return content;
  }

  getClassName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode,
          className = blockListingStartMarkdownNode.getClassName();

    return className;
  }

  getBlockListing() {
    const domElement = this.getDOMElement(),
          element = domElement.__element__, ///
          blockListing = element; ///

    return blockListing;
  }

  didMount() {
    const blockListing = this.getBlockListing(),
          element = blockListing; ///

    mountElement(element);
  }

  willUnmount() {
    const blockListing = this.getBlockListing(),
          element = blockListing; ///

    unmountElement(element);
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(BlockListingMarkdownNode, ruleName, childNodes, ambiguous); }
}
