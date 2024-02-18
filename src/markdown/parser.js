"use strict";

import { nodeMap, ruleNames, MarkdownParser } from "highmark-grammar";

import BlockListingMarkdownNode from "../node/markdown/blockListing";

const { BLOCK_LISTING_RULE_NAME } = ruleNames;

Object.assign(nodeMap, {
  [BLOCK_LISTING_RULE_NAME]: BlockListingMarkdownNode
});

export default class extends MarkdownParser {
  static nodeMap = nodeMap;
}
