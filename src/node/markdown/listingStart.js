"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class ListingStartMarkdownNode extends MarkdownNode {
  getLanguage() {
    let language = null;

    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeNonTerminalNode = secondChildNode.isNonTerminalNode();

    if (secondChildNodeNonTerminalNode) {
      const languageMarkdownNode = secondChildNode; ///

      language = languageMarkdownNode.getLanguage();
    }

    return language;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(ListingStartMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(ListingStartMarkdownNode, ruleName, childNodes, precedence); }
}
