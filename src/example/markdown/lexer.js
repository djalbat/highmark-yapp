"use strict";

import { arrayUtilities } from "necessary";

import { MarkdownLexer } from "../../index";

import { LISTING_TOKEN_TYPE } from "../../tokenTypes";

const { first } = arrayUtilities,
      { entries } = MarkdownLexer;

entries.forEach((entry) => {
  const keys = Object.keys(entry),
        firstKey = first(keys),
        tokenType = firstKey; ///

  if (tokenType === LISTING_TOKEN_TYPE) {
    entry[tokenType] = "^===";
  }
});

export default class extends MarkdownLexer {
  static entries = entries;
}

