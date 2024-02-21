"use strict";

import { MarkdownNode } from "highmark-grammars";
import { elementMixins } from "easy";
import { arrayUtilities } from "necessary";

import BlockListing from "../../blockListing";

import { EMPTY_STRING } from "../../constants";

const { first, second } = arrayUtilities,
      { mountElement, unmountElement } = elementMixins;

export default class BlockListingMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const language = this.getLanguage(),
          content = this.getContent(context),
          configuration ={
            language
          },
          blockListing = BlockListing.fromContentAndConfiguration(content, configuration),
          domElement = blockListing.getDOMElement();

    this.setDOMElement(domElement);

    return domElement;
  }

  getContent(context) {
    let content;

    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          blockTextMarkdownNode = secondChildNode; ///

    content = blockTextMarkdownNode.getContent(context);

    content = content.slice(0, -1);

    return content;
  }

  getLanguage() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          blockListingStartMarkdownNode = firstChildNode,
          language = blockListingStartMarkdownNode.getLanguage();

    return language;
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

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(BlockListingMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(BlockListingMarkdownNode, ruleName, childNodes, precedence); }
}
