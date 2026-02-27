"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _yapp = require("yapp");
const _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
const _style = /*#__PURE__*/ _interop_require_default(require("./example/style"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { renderStyle, renderStyles } = _easywithstyle.default;
const body = new _easy.Body();
(0, _yapp.renderYappStyles)();
renderStyles();
renderStyle(_style.default);
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyByZW5kZXJZYXBwU3R5bGVzIH0gZnJvbSBcInlhcHBcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vZXhhbXBsZS9zdHlsZVwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnJlbmRlcllhcHBTdHlsZXMoKTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKHN0eWxlKTtcblxuYm9keS5tb3VudChcblxuICA8Vmlldy8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsInJlbmRlcllhcHBTdHlsZXMiLCJzdHlsZSIsIm1vdW50IiwiVmlldyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztzRUFFZTtzQkFFRDtzQkFDWTs2REFFaEI7OERBQ0M7Ozs7OztBQUVsQixNQUFNLEVBQUVBLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQUdDLHNCQUFTO0FBRS9DLE1BQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQkMsSUFBQUEsc0JBQWdCO0FBRWhCSjtBQUVBRCxZQUFZTSxjQUFLO0FBRWpCSCxLQUFLSSxLQUFLLGVBRVIsb0JBQUNDLGFBQUkifQ==