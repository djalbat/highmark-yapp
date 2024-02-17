"use strict";

import MarkdownNode from "../../node/markdown";

export default class LineBreakMarkdownNode extends MarkdownNode {
  static tagName = "br";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(LineBreakMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(LineBreakMarkdownNode, ruleName, childNodes, precedence); }
}
