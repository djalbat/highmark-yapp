"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { grammarUtilities } from "../index"; ///
import { RowsDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import ColumnDiv from "./view/div/column";
import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import MarkdownDiv from "./view/div/markdown";
import ContentTextarea from "./view/textarea/content";

const { tokensFromMarkdown, documentMarkdownNodeFromTokens } = grammarUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const content = this.getContent(),
          markdown = content, ///
          tokens = tokensFromMarkdown(markdown),
          documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);

    this.clearMarkdownDiv();

    this.updateMarkdownDiv(documentMarkdownNode, tokens);

    this.focusContentTextarea();
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
          <MarkdownDiv/>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { initialContent } = this.constructor,
          content = initialContent; ///

    this.setContent(content);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static initialContent = `\`\`\`json
{
  "foo": "bah"
}
\`\`\`
`;

  static _initialContent = `
### JavaScript
  
'''javascript
"use strict";

import "juxtapose";

import withStyle from "easy-with-style"; ///

import { Body } from "easy";

function simpleApplication(selector) {
  const body = new Body(selector);

  body.mount(

    <p>
      A simple application.
    </p>

  );
}

export default withStyle(simpleApplication)\`

  color: \\#333;

\`;
'''

### JSON

'''json
{  
  "type": "book",
  "title": "Look to Windward",
  "author": "Look to Windward",
  "stores" : [{
    "identifier": 123
  }],
  "details" : {
    "in-print": true,
    "stock-count": 123
  }
}
'''

### XML

'''xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Look to Windward by Iain M. Banks -->
<book>
  <name>
    Look to Windward
  </name>
  <author>
    Iain M. Banks
  </author>
  <language>
    English
  </language>
  <genre>
    Science fiction
  </genre>
</book>
'''
`;
}

export default withStyle(View)`

  padding: 1rem;
  
`;
