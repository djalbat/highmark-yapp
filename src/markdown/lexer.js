"use strict";

import { arrayUtilities } from "necessary";
import { MarkdownLexer, markdownTokenTypes } from "highmark-grammars";

const { first } = arrayUtilities,
      { entries } = MarkdownLexer,
      { BACKTICKS_MARKDOWN_TOKEN_TYPE } = markdownTokenTypes;

entries.forEach((entry) => {
  const keys = Object.keys(entry),
        firstKey = first(keys),
        tokenType = firstKey; ///

  if (tokenType === BACKTICKS_MARKDOWN_TOKEN_TYPE) {
    entry[tokenType] = "^'''";  ///
  }
});

export default class extends MarkdownLexer {
  static entries = entries;
}

