"use strict";

import { htmlNodeMap as htmlNodeMapBase, markdownRuleNames } from "highmark-markdown";

import BlockListingHTMLNode from "../../node/html/listing/block";

const { BLOCK_LISTING_MARKDOWN_RULE_NAME } = markdownRuleNames;

const htmlNodeMap = Object.assign(htmlNodeMapBase, {
  [BLOCK_LISTING_MARKDOWN_RULE_NAME]: BlockListingHTMLNode
});

export default htmlNodeMap;
