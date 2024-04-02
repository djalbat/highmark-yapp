"use strict";

import { nodeMap as nodeMapBase, ruleNames, MarkdownParser as MarkdownParserBase } from "highmark-markdown";

import BlockListingMarkdownNode from "../node/markdown/blockListing";

const { BLOCK_LISTING_RULE_NAME } = ruleNames;

const nodeMap = Object.assign({}, nodeMapBase, {
  [BLOCK_LISTING_RULE_NAME]: BlockListingMarkdownNode
});

export default class MarkdownParser extends MarkdownParserBase {
  static nodeMap = nodeMap;

  static fromNothing() { return MarkdownParserBase.fromNothing(MarkdownParser); }

  static fromBNF(bnf) { return MarkdownParserBase.fromBNF(MarkdownParser, bnf); }

  static fromEntries(entries) { return MarkdownParserBase.fromEntries(MarkdownParser, entries); }
}
