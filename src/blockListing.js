"use strict";

import Yapp from "yapp";

export default class BlockListing extends Yapp {
  static defaultProperties = {
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };

  static fromClass(Class, properties) { return Yapp.fromClass(BlockListing, properties); }

  static fromContentAndOptions(content, options) { return Yapp.fromContentAndOptions(BlockListing, content, options); }
}
