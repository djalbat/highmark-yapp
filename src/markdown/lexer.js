"use strict";

import { arrayUtilities } from "necessary";
import { tokenTypes, MarkdownLexer as MarkdownLexerBase } from "highmark-markdown";

const { first } = arrayUtilities,
      { BACKTICKS_TOKEN_TYPE } = tokenTypes,
      { entries: entriesBase } = MarkdownLexerBase;

const entries = entriesBase.map((entry) => {
  const keys = Object.keys(entry),
        firstKey = first(keys),
        tokenType = firstKey; ///

  if (tokenType === BACKTICKS_TOKEN_TYPE) {
    entry = Object.assign({}, entry, {
      [BACKTICKS_TOKEN_TYPE]: "^'''"
    });
  }

  return entry;
});

export default class MarkdownLexer extends MarkdownLexerBase {
  static entries = entries;

  static fromNothing() { return MarkdownLexerBase.fromNothing(MarkdownLexer); }

  static fromRules(rules) { return MarkdownLexerBase.fromRules(MarkdownLexer, rules); }

  static fromEntries(entries) { return MarkdownLexerBase.fromEntries(MarkdownLexer, entries); }
}

