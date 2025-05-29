"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";
import { grammarUtilities } from "highmark-markdown";

const { topmostHTMLNodeFromMarkdownNode } = grammarUtilities;

class MarkdownDiv extends Element {
  clear() {
    const topmostHTMLNode = this.getTopmostHTMLNode();

    if (topmostHTMLNode !== null) {
      const domElement = this.getDOMElement(),
            parentDOMElement = domElement,  ///
            context = null;

      topmostHTMLNode.unmount(parentDOMElement, context);

      this.clearTopmostHTMLNode();
    }
  }

  update(node, tokens) {
    const markdownNode = node;  ///

    if (markdownNode !== null) {
      const domElement = this.getDOMElement(),
            parentDOMElement = domElement,  ///
            siblingDOMElement = null,
            context = {
              tokens
            },
            topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);

      topmostHTMLNode.mount(parentDOMElement, siblingDOMElement, context);

      this.setTopmostHTMLNode(topmostHTMLNode);
    }
  }

  clearTopmostHTMLNode() {
    const topmostHTMLNode = null;

    this.setTopmostHTMLNode(topmostHTMLNode);
  }

  getTopmostHTMLNode() {
    const { topmostHTMLNode } = this.getState();

    return topmostHTMLNode;
  }

  setTopmostHTMLNode(topmostHTMLNode) {
    this.updateState({
      topmostHTMLNode
    });
  }

  setInitialState() {
    const topmostHTMLNode = null;

    this.setState({
      topmostHTMLNode
    });
  }

  parentContext() {
    const clearMarkdownDiv = this.clear.bind(this),
          updateMarkdownDiv = this.update.bind(this);

    return ({
      clearMarkdownDiv,
      updateMarkdownDiv
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "markdown"
  };
}

export default withStyle(MarkdownDiv)`

  width: 100%;
  height: 100%;
  border: 1px solid darkgrey;
  padding: 0.25rem;
  position: absolute;
  
  
`;
