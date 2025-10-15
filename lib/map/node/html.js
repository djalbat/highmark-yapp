"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _block = /*#__PURE__*/ _interop_require_default(require("../../node/html/listing/block"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BLOCK_LISTING_MARKDOWN_RULE_NAME = _highmarkmarkdown.markdownRuleNames.BLOCK_LISTING_MARKDOWN_RULE_NAME;
var htmlNodeMap = Object.assign({}, _highmarkmarkdown.htmlNodeMap, _define_property({}, BLOCK_LISTING_MARKDOWN_RULE_NAME, _block.default));
var _default = htmlNodeMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXAvbm9kZS9odG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBodG1sTm9kZU1hcCBhcyBodG1sTm9kZU1hcEJhc2UsIG1hcmtkb3duUnVsZU5hbWVzIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2xpc3RpbmcvYmxvY2tcIjtcblxuY29uc3QgeyBCTE9DS19MSVNUSU5HX01BUktET1dOX1JVTEVfTkFNRSB9ID0gbWFya2Rvd25SdWxlTmFtZXM7XG5cbmNvbnN0IGh0bWxOb2RlTWFwID0gT2JqZWN0LmFzc2lnbih7fSwgaHRtbE5vZGVNYXBCYXNlLCB7XG4gIFtCTE9DS19MSVNUSU5HX01BUktET1dOX1JVTEVfTkFNRV06IEJsb2NrTGlzdGluZ0hUTUxOb2RlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaHRtbE5vZGVNYXA7XG4iXSwibmFtZXMiOlsiQkxPQ0tfTElTVElOR19NQVJLRE9XTl9SVUxFX05BTUUiLCJtYXJrZG93blJ1bGVOYW1lcyIsImh0bWxOb2RlTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbE5vZGVNYXBCYXNlIiwiQmxvY2tMaXN0aW5nSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dDQVZrRTs0REFFakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTSxBQUFFQSxtQ0FBcUNDLG1DQUFpQixDQUF0REQ7QUFFUixJQUFNRSxjQUFjQyxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHQyw2QkFBZSxFQUNuRCxxQkFBQ0wsa0NBQW1DTSxjQUFvQjtJQUcxRCxXQUFlSiJ9