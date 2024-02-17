"use strict";

import MarkdownNode from "../../node/markdown";

export default class ParagraphMarkdownNode extends MarkdownNode {
  static tagName = "p";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(ParagraphMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(ParagraphMarkdownNode, ruleName, childNodes, precedence); }
}
