"use strict";

import Yapp from "yapp";
import withStyle from "easy-with-style";

import { blockListingPadding } from "./styles";

export default class BlockListing extends Yapp {
  static defaultProperties = {
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };

  static fromClass(Class, properties) {
    debugger

    return Yapp.fromClass(BlockListing, properties);
  }

  static fromContentAndOptions(content, options) {
    debugger

    return Yapp.fromContentAndOptions(BlockListing, content, options);
  }
}

// export default withStyle(BlockListing)`
//
//   border: 0;
//   padding: ${blockListingPadding};
//
// `;
