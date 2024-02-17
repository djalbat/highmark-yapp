"use strict";

const entries = [
  {
    "escaped": "^\\\\[^\\s]+"
  },
  {
    "bullet": "^\\*"
  },
  {
    "marker": "^[1-9][0-9]*\\."
  },
  {
    "listing": "^```"
  },
  {
    "heading": "^#{1,4}"
  },
  {
    "line-break": "^-{2,3}"
  },
  {
    "identifier": "^[a-z]+"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
