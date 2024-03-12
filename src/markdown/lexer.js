"use strict";

import { arrayUtilities } from "necessary";
import { tokenTypes, MarkdownLexer } from "highmark-markdown";

const { first } = arrayUtilities,
      { entries } = MarkdownLexer,
      { BACKTICKS_TOKEN_TYPE } = tokenTypes;

entries.forEach((entry) => {
  const keys = Object.keys(entry),
        firstKey = first(keys),
        tokenType = firstKey; ///

  if (tokenType === BACKTICKS_TOKEN_TYPE) {
    entry[tokenType] = "^'''";  ///
  }
});

export default class extends MarkdownLexer {
  static entries = entries;
}

