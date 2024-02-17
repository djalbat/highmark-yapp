"use strict";

import LineMarkdownNode from "./node/markdown/line";
import ErrorMarkdownNode from "./node/markdown/error";
import ListingMarkdownNode from "./node/markdown/listing";
import HeadingMarkdownNode from "./node/markdown/heading";
import LanguageMarkdownNode from "./node/markdown/language";
import DocumentMarkdownNode from "./node/markdown/document";
import ParagraphMarkdownNode from "./node/markdown/paragraph";
import LineBreakMarkdownNode from "./node/markdown/lineBreak";
import ListingEndMarkdownNode from "./node/markdown/listingEnd";
import OrderedListMarkdownNode from "./node/markdown/orderedList";
import ListingStartMarkdownNode from "./node/markdown/listingStart";
import VerticalSpaceMarkdownNode from "./node/markdown/verticalSpace";
import UnorderedListMarkdownNode from "./node/markdown/unorderedList";
import OrderedListItemMarkdownNode from "./node/markdown/orderedListItem";
import UnorderedListItemMarkdownNode from "./node/markdown/unorderedListItem";

import { LINE_RULE_NAME,
         ERROR_RULE_NAME,
         LISTING_RULE_NAME,
         HEADING_RULE_NAME,
         LANGUAGE_RULE_NAME,
         DOCUMENT_RULE_NAME,
         PARAGRAPH_RULE_NAME,
         LINE_BREAK_RULE_NAME,
         LISTING_END_RULE_NAME,
         ORDERED_LIST_RULE_NAME,
         LISTING_START_RULE_NAME,
         VERTICAL_SPACE_RULE_NAME,
         UNORDERED_LIST_RULE_NAME,
         ORDERED_LIST_ITEM_RULE_NAME,
         UNORDERED_LIST_ITEM_RULE_NAME } from "./ruleNames";

const nodeMap = {
  [LINE_RULE_NAME]: LineMarkdownNode,
  [ERROR_RULE_NAME]: ErrorMarkdownNode,
  [LISTING_RULE_NAME]: ListingMarkdownNode,
  [HEADING_RULE_NAME]: HeadingMarkdownNode,
  [LANGUAGE_RULE_NAME]: LanguageMarkdownNode,
  [DOCUMENT_RULE_NAME]: DocumentMarkdownNode,
  [PARAGRAPH_RULE_NAME]: ParagraphMarkdownNode,
  [LINE_BREAK_RULE_NAME]: LineBreakMarkdownNode,
  [LISTING_END_RULE_NAME]: ListingEndMarkdownNode,
  [ORDERED_LIST_RULE_NAME]: OrderedListMarkdownNode,
  [LISTING_START_RULE_NAME]: ListingStartMarkdownNode,
  [VERTICAL_SPACE_RULE_NAME]: VerticalSpaceMarkdownNode,
  [UNORDERED_LIST_RULE_NAME]: UnorderedListMarkdownNode,
  [ORDERED_LIST_ITEM_RULE_NAME]: OrderedListItemMarkdownNode,
  [UNORDERED_LIST_ITEM_RULE_NAME]: UnorderedListItemMarkdownNode
};

export default nodeMap;
