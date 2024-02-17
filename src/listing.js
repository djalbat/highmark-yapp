"use strict";

import Yapp from "yapp";
import withStyle from "easy-with-style";

import { listingPadding } from "./styles";

class Listing extends Yapp {
  static defaultProperties = {
    className: "listing",
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };
}

export default withStyle(Listing)`

  border: 0;
  padding: ${listingPadding};
  
`;
