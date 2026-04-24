"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { renderYappStyles } from "yapp";

import View from "./example/view";

const { renderStyles } = withStyle;

const body = new Body();

renderYappStyles();

renderStyles();

body.mount(

  <View/>

);
