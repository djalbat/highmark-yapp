"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";

const { first } = arrayUtilities;

export default class OrderedListMarkdownNode extends MarkdownNode {
  createDOMElement(tokens) {
    const domElement = super.createDOMElement(tokens),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstOrderedListItemMarkdownNode = firstChildNode,  ///
          start = firstOrderedListItemMarkdownNode.getStart(),
          name = START_ATTRIBUTE_NAME,  ///
          value = start; ///

    domElement.setAttribute(name, value);

    return domElement;
  }

  static tagName = "ol";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(OrderedListMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(OrderedListMarkdownNode, ruleName, childNodes, precedence); }
}
