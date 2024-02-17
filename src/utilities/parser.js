"use strict";

import { rulesUtilities } from "occam-parsers";

const { rulesFromStartRuleAndRuleMap } = rulesUtilities;

export function setNonTerminalNodes(markdownParser) {
  const { nodeMap } = markdownParser.constructor,
        startRule = markdownParser.getStartRule(),
        ruleMap = markdownParser.getRuleMap(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

  rules.forEach((rule) => {
    const ruleName = rule.getName(),
          MarkdownNode = nodeMap[ruleName],
          NonTerminalNode = MarkdownNode; ///

    rule.setNonTerminalNode(NonTerminalNode);
  });
}
