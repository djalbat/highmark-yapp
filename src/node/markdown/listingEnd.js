"use strict";

import MarkdownNode from "../../node/markdown";

export default class ListingEndMarkdownNode extends MarkdownNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(ListingEndMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(ListingEndMarkdownNode, ruleName, childNodes, precedence); }
}
