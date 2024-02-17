"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { renderYappStyles } from "yapp";

import View from "./example/view";
import style from "./example/style";

const { renderStyle, renderStyles } = withStyle;

const body = new Body();

renderYappStyles();

renderStyles();

renderStyle(style);

body.mount(

  <View/>

);
