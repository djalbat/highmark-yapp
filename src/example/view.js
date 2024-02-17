"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { rulesUtilities, parserUtilities } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import BNFTextarea from "./view/textarea/bnf";
import MarkdownLexer from "./markdown/lexer";
import MarkdownParser from "./markdown/parser";
import ContentTextarea from "./view/textarea/content";
import MarkdownSection from "./view/section/markdown";
import ParseTreeTextarea from "./view/textarea/parseTree";
import StartRuleNameInput from "./view/input/startRuleName";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

import { setNonTerminalNodes } from "../utilities/parser";

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

class View extends Element {
  changeHandler = (event, element) => {
    this.update();
  }

  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const bnf = this.getBNF(),
          rules = rulesFromBNF(bnf),
          startRuleName = this.getStartRuleName(),
          lexicalEntries = this.getLexicalEntries();

    const markdownLexer = markdownLexerFromLexicalEntries(lexicalEntries),
          markdownParser =  markdownParserFromRulesAndStartRuleName(rules, startRuleName);

    const content = this.getContent(),
          tokens = markdownLexer.tokenise(content),
          node = markdownParser.parse(tokens);

    let parseTree = null;

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    this.updateMarkdownSection(node, tokens);

    this.setParseTree(parseTree);
  }

  childElements() {
    return (

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Start rule name
            </SubHeading>
            <StartRuleNameInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <MarkdownSection/>
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { bnf } = MarkdownParser,
          { entries } = MarkdownLexer,
          { initialContent, initialStartRuleName } = this.constructor,
          content = initialContent, ///
          startRuleName = initialStartRuleName, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalEntries(lexicalEntries);

    this.setStartRuleName(startRuleName);

    this.update();
  }

  static initialContent = `===json
{
  "hello": "world"
}
===
`;

  static initialStartRuleName = "";

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function markdownLexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        markdownLexer = MarkdownLexer.fromEntries(entries);

  return markdownLexer;
}

function markdownParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        markdownParser = new MarkdownParser(startRule, ruleMap);

  setNonTerminalNodes(markdownParser);

  return markdownParser;
}
