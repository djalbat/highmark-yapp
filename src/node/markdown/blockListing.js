"use strict";

import { MarkdownNode } from "highmark-markdown";
import { arrayUtilities } from "necessary";
import { elementUtilities } from "easy";

import BlockListing from "../../blockListing";

import { EMPTY_STRING } from "../../constants";

const { first } = arrayUtilities,
      { mountElement, unmountElement } = elementUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  getElement() {
    const domElement = this.getDOMElement(),
          element = domElement.__element__; ///

    return element;
  }

  createDOMElement(context) {
    const className = this.className(context),
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

  className(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode,
          className = blockListingStartMarkdownNode.className(context);

    return className;
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

  didMount() {
    const element = this.getElement();

    mountElement(element);
  }

  willUnmount() {
    const element = this.getElement();

    unmountElement(element);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity); }
}
