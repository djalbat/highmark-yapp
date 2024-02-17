"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { tokenContentFromToken } from "../../utilities/token";

const { first, last } = arrayUtilities;

export default class ListingMarkdownNode extends MarkdownNode {
  createDOMElement(tokens) {
    const domElement = super.createDOMElement(tokens),
          content = this.getContent(tokens),
          innerHTML = content;  ///

    Object.assign(domElement, {
      innerHTML
    });

    return domElement;
  }

  createChildNodesDOMElements(tokens) {
    ///
  }

  getClassName() {
    const language = this.getLanguage(),
          className = language; ///

    return className;
  }

  getLanguage() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          listingStartMarkdownNode = firstChildNode,
          language = listingStartMarkdownNode.getLanguage();

    return language;
  }

  getContent(tokens) {
    let content = EMPTY_STRING;

    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          firstChildNode = first(childNodes),
          listingEndMarkdownNode = lastChildNode, ///
          listingStartMarkdownNode = firstChildNode,  ///
          listingEndMarkdownNodeFirstSignificantToken = listingEndMarkdownNode.getFirstSignificantToken(),
          listingStartMarkdownNodeLastSignificantToken = listingStartMarkdownNode.getLastSignificantToken(),
          listingEndMarkdownNodeFirstSignificantTokenIndex = tokens.indexOf(listingEndMarkdownNodeFirstSignificantToken),
          listingStartMarkdownNodeLastSignificantTokenIndex = tokens.indexOf(listingStartMarkdownNodeLastSignificantToken),
          start = listingStartMarkdownNodeLastSignificantTokenIndex + 1,
          end = listingEndMarkdownNodeFirstSignificantTokenIndex - 1;

    tokens = tokens.slice(start, end);  ///

    tokens.forEach((token) => {
      const tokenContent = tokenContentFromToken(token);

      content += tokenContent;
    });

    return content;
  }

  static tagName = "pre";

  static fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
    if (childNodes === undefined) {
      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = ListingMarkdownNode;
    }

    const listingMarkdownNode = MarkdownNode.fromRuleNameAndChildNodes(Class, ruleName, childNodes);

    return listingMarkdownNode;
  }

  static fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence) {
    if (precedence === undefined) {
      precedence = childNodes;  ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = ListingMarkdownNode;
    }

    const listingMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence);

    return listingMarkdownNode;
  }
}
