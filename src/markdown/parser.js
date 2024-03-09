"use strict";

import { markdownNodeMap, markdownRuleNames, MarkdownParser } from "highmark-grammars";

import BlockListingMarkdownNode from "../node/markdown/blockListing";

const { BLOCK_LISTING_MARKDOWN_RULE_NAME } = markdownRuleNames;

Object.assign(markdownNodeMap, {
  [BLOCK_LISTING_MARKDOWN_RULE_NAME]: BlockListingMarkdownNode
});

const nodeMap = markdownNodeMap;  ///

export default class extends MarkdownParser {
  static nodeMap = nodeMap;
}
