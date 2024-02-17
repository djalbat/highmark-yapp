"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first, second } = arrayUtilities;

export default class OrderedListItemMarkdownNode extends MarkdownNode {
  getStart() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markerTerminalNode = firstChildNode,  ///
          markerTerminalNodeContent = markerTerminalNode.getContent(),
          matches = markerTerminalNodeContent.match(/(\d+)\./),
          secondMatch = second(matches),
          start = Number(secondMatch);

    return start;
  }

  static tagName = "li";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(OrderedListItemMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(OrderedListItemMarkdownNode, ruleName, childNodes, precedence); }
}
