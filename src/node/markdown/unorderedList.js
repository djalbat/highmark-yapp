"use strict";

import MarkdownNode from "../../node/markdown";

export default class UnorderedListMarkdownNode extends MarkdownNode {
  static tagName = "ul";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(UnorderedListMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(UnorderedListMarkdownNode, ruleName, childNodes, precedence); }
}
