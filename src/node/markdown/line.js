"use strict";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { tokenContentFromToken } from "../../utilities/token";

export default class LineMarkdownNode extends MarkdownNode {
  createDOMElement(tokens) {
    const content = this.getContent(tokens),
          domElement = document.createTextNode(content);  ///

    this.setDOMElement(domElement);

    return domElement;
  }

  getContent(tokens) {
    let content = EMPTY_STRING;

    const lastSignificantToken = this.getLastSignificantToken(),
          firstSignificantToken = this.getFirstSignificantToken(),
          lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          start = firstSignificantTokenIndex, ///
          end = lastSignificantTokenIndex + 1;

    tokens = tokens.slice(start, end);  ///

    tokens.forEach((token) => {
      const tokenContent = tokenContentFromToken(token);

      content += tokenContent;
    });

    return content;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return MarkdownNode.fromRuleNameAndChildNodes(LineMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return MarkdownNode.fromRuleNameChildNodesAndPrecedence(LineMarkdownNode, ruleName, childNodes, precedence); }
}
