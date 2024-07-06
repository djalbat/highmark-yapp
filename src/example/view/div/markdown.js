"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class MarkdownDiv extends Element {
  clear() {
    const divisionMarkdownNOde = this.getDivisionMarkdownNode();

    if (divisionMarkdownNOde !== null) {
      const domElement = this.getDOMElement(),
            parentDOMElement = domElement;  ///

      divisionMarkdownNOde.unmount(parentDOMElement);

      this.clearDivisionMarkdownNode();
    }
  }

  update(divisionMarkdownNode, context) {
    if (divisionMarkdownNode !== null) {
      const domElement = this.getDOMElement(),
            parentDOMElement = domElement,  ///
            siblingDOMElement = null;

      divisionMarkdownNode.mount(parentDOMElement, siblingDOMElement, context);

      this.setDivisionMarkdownNode(divisionMarkdownNode);
    }
  }

  clearDivisionMarkdownNode() {
    const divisionMarkdownNode = null;

    this.setDivisionMarkdownNode(divisionMarkdownNode);
  }

  getDivisionMarkdownNode() {
    const { divisionMarkdownNode } = this.getState();

    return divisionMarkdownNode;
  }

  setDivisionMarkdownNode(divisionMarkdownNode) {
    this.updateState({
      divisionMarkdownNode
    });
  }

  setInitialState() {
    const divisionMarkdownNode = null;

    this.setState({
      divisionMarkdownNode
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
