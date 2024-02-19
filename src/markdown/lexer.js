"use strict";

import { arrayUtilities } from "necessary";
import { MarkdownLexer, tokenTypes } from "highmark-grammars";

const { first } = arrayUtilities,
      { entries } = MarkdownLexer,
      { BLOCK_LISTING_TOKEN_TYPE } = tokenTypes;

entries.forEach((entry) => {
  const keys = Object.keys(entry),
        firstKey = first(keys),
        tokenType = firstKey; ///

  if (tokenType === BLOCK_LISTING_TOKEN_TYPE) {
    entry[tokenType] = "^'''";
  }
});

export default class extends MarkdownLexer {
  static entries = entries;
}

