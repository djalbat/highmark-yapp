"use strict";

import MarkdownNode from "../../node/markdown";

export default class DocumentMarkdownNode extends MarkdownNode {
  static tagName = "div";

  static className = "document";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(DocumentMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(DocumentMarkdownNode, ruleName, childNodes, precedence); }
}
