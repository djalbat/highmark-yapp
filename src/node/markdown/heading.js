"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class HeadingMarkdownNode extends MarkdownNode {
  getTagName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          headingTerminalNode = firstChildNode,  ///
          headingTerminalNodeContent = headingTerminalNode.getContent(),
          headingTerminalNodeContentLength = headingTerminalNodeContent.length,
          tagName = `h${headingTerminalNodeContentLength}`;

    return tagName;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(HeadingMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(HeadingMarkdownNode, ruleName, childNodes, precedence); }
}
