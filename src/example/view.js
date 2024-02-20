"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import ColumnDiv from "./view/div/column";
import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import MarkdownLexer from "../markdown/lexer";
import MarkdownParser from "../markdown/parser";
import ContentTextarea from "./view/textarea/content";
import MarkdownSection from "./view/section/markdown";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

class View extends Element {
  changeHandler = (event, element) => {
    this.update();
  }

  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const content = this.getContent(),
          tokens = markdownLexer.tokenise(content),
          node = markdownParser.parse(tokens);

    this.updateMarkdownSection(node, tokens);
  }

  didMount() {
    this.update();
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <MarkdownSection/>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { initialContent } = this.constructor,
          content = initialContent;

    this.setContent(content);
  }

  static initialContent = `
'''javascript
export default function blah() {
  ///
}
'''
`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
