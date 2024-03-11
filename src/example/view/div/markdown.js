"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class MarkdownDiv extends Element {
  update(node) {
    const previousNode = this.getPreviousNode();

    if (previousNode !== null) {
      this.unmount(previousNode);
    }

    if (node !== null) {
      this.mount(node);

      const previousNode = node;  ///

      this.setPreviousNode(previousNode);
    }
  }

  getPreviousNode() {
    const { previousNode } = this.getState();

    return previousNode;
  }

  setPreviousNode(previousNode) {
    this.updateState({
      previousNode
    });
  }

  setInitialState() {
    const previousNode = null;

    this.setState({
      previousNode
    });
  }

  parentContext() {
    const updateMarkdownDiv = this.update.bind(this);

    return ({
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
