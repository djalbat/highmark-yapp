"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class ContentTextarea extends Textarea {
  getContent() {
    const value = this.getValue(),
          content = value; ///

    return content;
  }

  setContent(content) {
    const value = content;

    this.setValue(value);
  }

  parentContext() {
    const getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this),
          focusContentTextarea = this.focus.bind(this);

    return ({
      getContent,
      setContent,
      focusContentTextarea
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
