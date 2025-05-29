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
var htmlNodeMap = Object.assign(_highmarkmarkdown.htmlNodeMap, _define_property({}, BLOCK_LISTING_MARKDOWN_RULE_NAME, _block.default));
var _default = htmlNodeMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXAvbm9kZS9odG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBodG1sTm9kZU1hcCBhcyBodG1sTm9kZU1hcEJhc2UsIG1hcmtkb3duUnVsZU5hbWVzIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2xpc3RpbmcvYmxvY2tcIjtcblxuY29uc3QgeyBCTE9DS19MSVNUSU5HX01BUktET1dOX1JVTEVfTkFNRX0gPSBtYXJrZG93blJ1bGVOYW1lcztcblxuY29uc3QgaHRtbE5vZGVNYXAgPSBPYmplY3QuYXNzaWduKGh0bWxOb2RlTWFwQmFzZSwge1xuICBbQkxPQ0tfTElTVElOR19NQVJLRE9XTl9SVUxFX05BTUVdOiBCbG9ja0xpc3RpbmdIVE1MTm9kZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGh0bWxOb2RlTWFwO1xuIl0sIm5hbWVzIjpbIkJMT0NLX0xJU1RJTkdfTUFSS0RPV05fUlVMRV9OQU1FIiwibWFya2Rvd25SdWxlTmFtZXMiLCJodG1sTm9kZU1hcCIsIk9iamVjdCIsImFzc2lnbiIsImh0bWxOb2RlTWFwQmFzZSIsIkJsb2NrTGlzdGluZ0hUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWa0U7NERBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUEsbUNBQW9DQyxtQ0FBaUIsQ0FBckREO0FBRVIsSUFBTUUsY0FBY0MsT0FBT0MsTUFBTSxDQUFDQyw2QkFBZSxFQUMvQyxxQkFBQ0wsa0NBQW1DTSxjQUFvQjtJQUcxRCxXQUFlSiJ9