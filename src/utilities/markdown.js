"use strict";

import MarkdownLexer from "../markdown/lexer";
import MarkdownParser from "../markdown/parser";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

export function nodeFromContent(content) {
  const tokens = markdownLexer.tokenise(content),
        node = markdownParser.parse(tokens);

  node.createDOMElement(tokens);

  return node;
}

export default {
  nodeFromContent
};