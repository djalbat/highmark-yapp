"use strict";

import { ListingMarkdownNode } from "highmark-grammar";

import Listing from "../../listing";

export default class YappListingMarkdownNode extends ListingMarkdownNode {
  createDOMElement(tokens) {
    const { Listing } = this.constructor,
          language = this.getLanguage(),
          content = this.getContent(tokens),
          listing =

            <Listing language={language}>
              {content}
            </Listing>

          ,
          domElement = listing.getDOMElement();

    this.setDOMElement(domElement);

    return domElement;
  }

  getYapp() {
    const domElement = this.getDOMElement(),
          element = domElement.__element__, ///
          listing = element; ///

    return listing;
  }

  didMount() {
    const listing = this.getYapp();

    listing.didMount();
  }

  willUnmount() {
    const yapp = this.getYapp();

    yapp.willUnmount();
  }

  static Listing = Listing;

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return ListingMarkdownNode.fromRuleNameAndChildNodes(YappListingMarkdownNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return ListingMarkdownNode.fromRuleNameChildNodesAndPrecedence(YappListingMarkdownNode, ruleName, childNodes, precedence); }
}
