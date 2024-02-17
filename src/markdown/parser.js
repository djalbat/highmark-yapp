"use strict";

import { nodeMap, ruleNames, MarkdownParser } from "highmark-grammar";

import YappListingMarkdownNode from "../node/markdown/yappListing";

const { LISTING_RULE_NAME } = ruleNames;

Object.assign(nodeMap, {
  [LISTING_RULE_NAME]: YappListingMarkdownNode
});

export default class extends MarkdownParser {
  static nodeMap = nodeMap;
}
