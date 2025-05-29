"use strict";

import { markdownNodeMap as nodeMapBase, MarkdownParser as MarkdownParserBase, markdownRuleNames } from "highmark-markdown";

import BlockListingMarkdownNode from "../node/markdown/blockListing";

const { BLOCK_LISTING_MARKDOWN_RULE_NAME } = markdownRuleNames;

const nodeMap = Object.assign({}, nodeMapBase, {
  [BLOCK_LISTING_MARKDOWN_RULE_NAME]: BlockListingMarkdownNode
});

export default class MarkdownParser extends MarkdownParserBase {
  static nodeMap = nodeMap;

  static fromNothing() { return MarkdownParserBase.fromNothing(MarkdownParser); }

  static fromBNF(bnf) { return MarkdownParserBase.fromBNF(MarkdownParser, bnf); }

  static fromEntries(entries) { return MarkdownParserBase.fromEntries(MarkdownParser, entries); }
}
