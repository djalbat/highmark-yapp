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
    let className;

    this.someChildNode((childNode, index) => {
      if (index === 0) {
        const firstChildNode = childNode, ///
              blockListingStartMarkdownNode = firstChildNode;

        className = blockListingStartMarkdownNode.className(context);

        return true;
      }
    });

    return className;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    parentDOMElement.insertBefore(domElement, siblingDOMElement)

    const blockListing = this.getBlockListing();

    blockListing.didMount();
  }

  unmount(parentDOMElement, context) {
    let domElement;

    const blockListing = this.getBlockListing();

    blockListing.willUnmount();

    domElement = this.getDOMElement();

    parentDOMElement.removeChild(domElement);

    domElement = null;

    this.setDOMElement(domElement);
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
