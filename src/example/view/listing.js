"use strict";

import withStyle from "easy-with-style";

import Listing from "../../listing";

import { listingPadding } from "../styles";

export default withStyle(Listing)`

  border: 0;
  padding: ${listingPadding};
  
`;
