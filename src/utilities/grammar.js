"use strict";

import { HTMLNode, TopmostHTMLNode, grammarUtilities } from "highmark-markdown";

import htmlNodeMap from "../map/node/html";

const { tokensFromMarkdown,
        documentMarkdownNodeFromTokens,
        topmostHTMLNodeFromDocumentMarkdownNode: topmostHTMLNodeFromDocumentMarkdownNodeBase } = grammarUtilities;

export function HTMLClassFromMarkdownNode(markdownNode) {
  let Class;

  if (markdownNode === null) {
    Class = TopmostHTMLNode;  ///
  } else {
    const nonTerminalNode = markdownNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}

export function topmostHTMLNodeFromDocumentMarkdownNode(markdownNode) {
  const ClassFromOuterNode = HTMLClassFromMarkdownNode, ///
        topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNodeBase(markdownNode, ClassFromOuterNode);

  return topmostHTMLNode;
}

export default {
  tokensFromMarkdown,
  documentMarkdownNodeFromTokens,
  HTMLClassFromMarkdownNode,
  topmostHTMLNodeFromDocumentMarkdownNode
};
