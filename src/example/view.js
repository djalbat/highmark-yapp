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

    this.update();
  }

  static initialContent = `
In order to get started you can do one of the following:

Have a look at this site in your browser's developer tools.
Clone the Yapp pretty printer's repository and run the example.
Clone the Juxtapose repository and build the examples.
Firstly, if you choose to have a look at this site in your browser's developer tools then a good place to start is the src/main.js file. The other file that should be of interest is its sibling view.js file. After that, maybe just look around.

This site should be taken as an example, by the way, not as a blueprint. Experience has taught that certain approaches work well, but nothing is written in stone.

Also bear in mind that JSX is not ideal for embedding large amounts of content into a site or application. The articles here demonstrate what is about the practical limit.

Secondly, here is the link to the Yapp pretty printer's repository:

https://github.com/djalbat/yapp

This is a more comprehensive project and shows what is possible with Juxtapose. The code listings on this site use Yapp, for example. The project's example application also makes use of several Easy projects.

Lastly, the octocat logo, top right, is a link to the Juxtapose repository on GitHub. This provides the means to set up a working environment for Juxtapose. The remaining articles here tacitly assume that you have done so, but it is not essential.
`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
