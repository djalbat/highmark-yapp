"use strict";

import { blockListingPadding } from "./styles";

const style = `

  .yapp {
    border: 0;
    padding: ${blockListingPadding};
  }

  div.markdown {
    font-size: 2rem;
    font-family: serif;
  }
  
  div.markdown h1 {
    font-size: 4rem;
  }
  
  div.markdown h2 {
    font-size: 3rem;
  }
  
  div.markdown h3 {
    font-size: 2.5rem;
  }
  
  div.markdown h4 {
    font-size: 2rem;
  }
  
  div.markdown li {
    margin-left: 2rem;
  }
  
  div.markdown span.error {
    text-decoration-line: underline;
    text-decoration-color: red;
  }
  
`;

export default style;
