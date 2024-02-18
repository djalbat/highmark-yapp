"use strict";

import Yapp from "yapp";
import withStyle from "easy-with-style";

import { blockListingPadding } from "./styles";

class BlockListing extends Yapp {
  static defaultProperties = {
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };
}

export default withStyle(BlockListing)`

  border: 0;
  padding: ${blockListingPadding};
  
`;
