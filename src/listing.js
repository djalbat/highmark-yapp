"use strict";

import Yapp from "yapp";

export default class Listing extends Yapp {
  static defaultProperties = {
    className: "listing",
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
  };
}
