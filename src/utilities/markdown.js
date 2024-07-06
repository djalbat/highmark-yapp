"use strict";

import MarkdownLexer from "../markdown/lexer";
import MarkdownParser from "../markdown/parser";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

export function tokensFromContent(content) {
  const lexer = markdownLexer,  ///
        tokens = lexer.tokenise(content);

  return tokens;
}

export function nodeFromTokens(tokens) {
  const parser = markdownParser,  ///
        startRule = parser.getStartRule(),
        startOfContent = true,
        node = parser.parse(tokens, startRule, startOfContent);

  return node;
}

export default {
  tokensFromContent,
  nodeFromTokens
};
