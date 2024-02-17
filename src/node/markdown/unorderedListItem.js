"use strict";

import MarkdownNode from "../../node/markdown";

export default class UnorderedListItemMarkdownNode extends MarkdownNode {
  static tagName = "li";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(UnorderedListItemMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(UnorderedListItemMarkdownNode, ruleName, childNodes, precedence); }
}
