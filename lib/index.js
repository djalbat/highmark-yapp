"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MarkdownLexer: function() {
        return _lexer.default;
    },
    MarkdownParser: function() {
        return _parser.default;
    }
});
var _lexer = /*#__PURE__*/ _interop_require_default(require("./markdown/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./markdown/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXJrZG93bkxleGVyIH0gZnJvbSBcIi4vbWFya2Rvd24vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiLi9tYXJrZG93bi9wYXJzZXJcIjtcbiJdLCJuYW1lcyI6WyJNYXJrZG93bkxleGVyIiwiTWFya2Rvd25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsYUFBYTtlQUFiQSxjQUFhOztJQUNiQyxjQUFjO2VBQWRBLGVBQWM7Ozs0REFETzs2REFDQyJ9