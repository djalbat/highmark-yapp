"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

let count = 0;

class ContentTextarea extends Textarea {
  blurHandler = (event, element) => {
    console.log(blur, count++)
  }

  getContent() {
    const value = this.getValue(),
          content = value; ///

    return content;
  }

  setContent(content) {
    const value = content;

    this.setValue(value);
  }

  didMount() {
    this.onBlur(this.blurHandler);
  }

  willUnmount() {
    this.offBlur(this.blurHandler);
  }

  parentContext() {
    const getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this);

    return ({
      getContent,
      setContent
    });
  }

  static defaultProperties = {
    className: "content",
    spellCheck: "false"
  };
}

export default withStyle(ContentTextarea)`

  height: 64rem;
  
`;
