"use strict";

import Yapp from "yapp";

export default class BlockListing extends Yapp {
  static defaultProperties = {
    editable: false,
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };

  static fromContentAndConfiguration(content, configuration) { return Yapp.fromContentAndConfiguration(BlockListing, content, configuration); }
}
