"use strict";

import { arrayUtilities } from "necessary";
import { tokenUtilities, MarkdownNode } from "highmark-grammars";

import BlockListing from "../../blockListing";

import { EMPTY_STRING } from "../../constants";

const { first, last } = arrayUtilities,
      { tokenContentFromToken } = tokenUtilities;

export default class BlockListingMarkdownNode extends MarkdownNode {
  createDOMElement(tokens) {
    const language = this.getLanguage(),
          content = this.getContent(tokens),
          configuration ={
            language
          },
          blockListing = BlockListing.fromContentAndConfiguration(content, configuration),
          domElement = blockListing.getDOMElement();

    this.setDOMElement(domElement);

    return domElement;
  }

  getContent(tokens) {
    let content = EMPTY_STRING;

    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          firstChildNode = first(childNodes),
          lastChildNodeFirstSignificantToken = lastChildNode.getFirstSignificantToken(),
          firstChildNodeLastSignificantToken = firstChildNode.getLastSignificantToken(),
          lastChildNodeFirstSignificantTokenIndex = tokens.indexOf(lastChildNodeFirstSignificantToken),
          firstChildNodeLastSignificantTokenIndex = tokens.indexOf(firstChildNodeLastSignificantToken),
          start = firstChildNodeLastSignificantTokenIndex + 1,
          end = lastChildNodeFirstSignificantTokenIndex - 1;  ///

    tokens = tokens.slice(start, end);  ///

    tokens.forEach((token) => {
      const tokenContent = tokenContentFromToken(token);

      content += tokenContent;
    });

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
    const blockListing = this.getBlockListing();

    blockListing.didMount();
  }

  willUnmount() {
    const yapp = this.getBlockListing();

    yapp.willUnmount();
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(BlockListingMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(BlockListingMarkdownNode, ruleName, childNodes, precedence); }
}
