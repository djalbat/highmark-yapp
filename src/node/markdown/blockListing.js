"use strict";

import { MarkdownNode } from "highmark-markdown";
import { arrayUtilities } from "necessary";

import BlockListing from "../../blockListing";

import { EMPTY_STRING } from "../../constants";

const { first } = arrayUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  getBlockListing() {
    const domElement = this.getDOMElement(),
          { __element__ } = domElement, ///
          blockListing = __element__; ///

    return blockListing;
  }

  content(context) {
    let content = EMPTY_STRING;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length,
          firstIndex = 0,
          lastIndex = childNodesLength - 1;

    childNodes.forEach((childNode, index) => {
      if ((index !== firstIndex) && (index !== lastIndex)) {
        const childNodeContent = childNode.content(context);

        content = `${content}${childNodeContent}`;
      }
    });

    content = content.replace(/\n$/, EMPTY_STRING);

    return content;
  }

  className(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode,
          className = blockListingStartMarkdownNode.className(context);

    return className;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement, context);

    const blockListing = this.getBlockListing();

    blockListing.didMount();
  }

  unmount(parentDOMElement, context) {
    const blockListing = this.getBlockListing();

    blockListing.willUnmount();

    super.unmount(parentDOMElement, context);
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
