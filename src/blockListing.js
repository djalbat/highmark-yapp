"use strict";

import Yapp from "yapp";

export default class BlockListing extends Yapp {
  static defaultProperties = {
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };

  static fromClass(Class, properties) { return Yapp.fromClass(BlockListing, properties); }

  static fromContentAndConfiguration(content, configuration) { return Yapp.fromContentAndConfiguration(BlockListing, content, configuration); }
}
