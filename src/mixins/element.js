"use strict";

function add(node) {
  const domElement = this.getDOMElement(),
        nodeDOMEElement = node.getDOMElement();

  domElement.insertBefore(nodeDOMEElement, null); ///
}

function remove(node) {
  const domElement = this.getDOMElement();

  if (node) {
    const nodeDOMEElement = node.getDOMElement();

    domElement.removeChild(nodeDOMEElement);
  } else {
    domElement.remove();
  }
}

function getDescendantNodes(descendantNodes = []) {
  const domElement = this.getDOMElement();

  if (domElement !== null) {
    const childNodes = this.getChildNodes(),
          descendantNode = this; ///

    descendantNodes.push(descendantNode);

    childNodes.forEach((childNode) => {
      childNode.getDescendantNodes(descendantNodes);
    })
  }

  return descendantNodes;
}

function getDescendantElements() {
  const descendantNodes = this.getDescendantNodes(),
        descendantElements = descendantNodes; ///

  return descendantElements;
}

const elementMixins = {
  add,
  remove,
  getDescendantNodes,
  getDescendantElements
};

export default elementMixins;
