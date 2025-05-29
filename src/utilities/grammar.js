"use strict";

import { HTMLNode, TopmostHTMLNode, grammarUtilities } from "highmark-markdown";

import htmlNodeMap from "../map/node/html";

const { tokensFromMarkdown,
        markdownNodeFromTokens,
        topmostHTMLNodeFromMarkdownNode: topmostHTMLNodeFromMarkdownNodeBase } = grammarUtilities;

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

export function topmostHTMLNodeFromMarkdownNode(markdownNode) {
  const ClassFromOuterNode = HTMLClassFromMarkdownNode, ///
        topmostHTMLNode = topmostHTMLNodeFromMarkdownNodeBase(markdownNode, ClassFromOuterNode);

  return topmostHTMLNode;
}

export default {
  tokensFromMarkdown,
  markdownNodeFromTokens,
  HTMLClassFromMarkdownNode,
  topmostHTMLNodeFromMarkdownNode
};
