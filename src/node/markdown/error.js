"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class ErrorMarkdownNode extends MarkdownNode {
  createDOMElement(tokens) {
    const domElement = super.createDOMElement(tokens),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent(),
          textContent = content;  ///

    Object.assign(domElement, {
      textContent
    });

    return domElement;
  }

  static tagName = "span";

  static className = "error";

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(ErrorMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(ErrorMarkdownNode, ruleName, childNodes, precedence); }
}