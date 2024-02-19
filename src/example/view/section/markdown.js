"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class MarkdownSection extends Element {
  update(node, tokens) {
    const previousNode = this.getPreviousNode();

    if (previousNode !== null) {
      this.unmount(previousNode);
    }

    if (node !== null) {
      const footnotes = [],
            context = {
              tokens,
              footnotes
            };

      node.createDOMElement(context);

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
    const updateMarkdownSection = this.update.bind(this);

    return ({
      updateMarkdownSection
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "section";

  static defaultProperties = {
    className: "markdown"
  };
}

export default withStyle(MarkdownSection)`

  width: 100%;
  height: 100%;
  border: 1px solid darkgrey;
  padding: 0.25rem;
  position: absolute;
  
  
`;
