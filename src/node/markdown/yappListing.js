"use strict";

import { ListingMarkdownNode } from "highmark-grammar";

import Listing from "../../listing";

export default class YappListingMarkdownNode extends ListingMarkdownNode {
  createDOMElement(tokens) {
    const language = this.getLanguage(),
          content = this.getContent(tokens),
          yapp =

            <Listing language={language}>
              {content}
            </Listing>

          ,
          domElement = yapp.getDOMElement();

    this.setDOMElement(domElement);

    return domElement;
  }

  getYapp() {
    const domElement = this.getDOMElement(),
          element = domElement.__element__, ///
          yapp = element; ///

    return yapp;
  }

  didMount() {
    const yapp = this.getYapp();

    yapp.didMount();
  }

  willUnmount() {
    const yapp = this.getYapp();

    yapp.willUnmount();
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return ListingMarkdownNode.fromRuleNameAndChildNodes(YappListingMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return ListingMarkdownNode.fromRuleNameChildNodesAndPrecedence(YappListingMarkdownNode, ruleName, childNodes, precedence); }
}
