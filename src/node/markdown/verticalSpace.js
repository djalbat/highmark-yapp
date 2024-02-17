"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";

export default class VerticalSpaceMarkdownNode extends MarkdownNode {
  getContent() {
    let content = EMPTY_STRING;

    const faithful = true,
          childNodes = this.getChildNodes(),
          endOfLineNodes = childNodes;  ///

    endOfLineNodes.forEach((endOfLineNode) => {
      const endOfLineNodeContent = endOfLineNode.getContent(faithful);

      content += endOfLineNodeContent;
    });

    return content;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(VerticalSpaceMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(VerticalSpaceMarkdownNode, ruleName, childNodes, precedence); }
}
