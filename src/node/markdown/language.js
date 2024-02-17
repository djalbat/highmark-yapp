"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class LanguageMarkdownNode extends MarkdownNode {
  getLanguage() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identifierTerminalNode = secondChildNode, ///
          identifierTerminalNodeContent = identifierTerminalNode.getContent(),
          language = identifierTerminalNodeContent; ///

    return language;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(LanguageMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(LanguageMarkdownNode, ruleName, childNodes, precedence); }
}
