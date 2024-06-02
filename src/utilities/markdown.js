"use strict";

import MarkdownLexer from "../markdown/lexer";
import MarkdownParser from "../markdown/parser";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

export function nodeFromContent(content) {
  const lexer = markdownLexer,  ///
        parser = markdownParser,  ///
        tokens = lexer.tokenise(content),
        startRule = parser.getStartRule(),
        startOfContent = true,
        node = parser.parse(tokens, startRule, startOfContent);

  if (node !== null) {
    const context = {
            tokens
          };

    node.createDOMElement(context);
  }

  return node;
}

export default {
  nodeFromContent
};
