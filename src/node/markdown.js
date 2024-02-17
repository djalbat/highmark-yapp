"use strict";

import { NonTerminalNode } from "occam-parsers";

import elementMixins from "../mixins/element";

class MarkdownNode extends NonTerminalNode {
  constructor(ruleName, childNodes, precedence, domElement) {
    super(ruleName, childNodes, precedence);

    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  getTagName() {
    const { tagName = null } = this.constructor;

    return tagName;
  }

  getClassName() {
    const { className = null } = this.constructor;

    return className;
  }

  createDOMElement(tokens) {
    const tagName = this.getTagName();

    if (tagName === null) {
      return;
    }

    const className = this.getClassName(),
          domElement = document.createElement(tagName);

    if (className !== null) {
      Object.assign(domElement, {
        className
      });
    }

    this.setDOMElement(domElement);

    this.createChildNodesDOMElements(tokens);

    return domElement;
  }

  createChildNodesDOMElements(tokens) {
    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        childNode.createDOMElement(tokens);

        this.add(childNode);
      }
    });
  }

  static fromRuleNameAndChildNodes(Class, ruleName, childNodes, ...remainingArguments) {
    const domElement = null,
          markdownNode = NonTerminalNode.fromRuleNameAndChildNodes(Class, ruleName, childNodes, domElement, ...remainingArguments);

    return markdownNode;
  }

  static fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence, ...remainingArguments) {
    const domElement = null,
          markdownNode = NonTerminalNode.fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence, domElement, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, elementMixins);

export default MarkdownNode;
