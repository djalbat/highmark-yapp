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
    default: function() {
        return _default;
    },
    nodeFromContent: function() {
        return nodeFromContent;
    }
});
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdown/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdown/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var markdownLexer = _lexer.default.fromNothing(), markdownParser = _parser.default.fromNothing();
function nodeFromContent(content) {
    var tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens);
    if (node !== null) {
        var footnotes = [], context = {
            tokens: tokens,
            footnotes: footnotes
        };
        node.createDOMElement(context);
    }
    return node;
}
var _default = {
    nodeFromContent: nodeFromContent
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bkxleGVyIGZyb20gXCIuLi9tYXJrZG93bi9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93bi9wYXJzZXJcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZm9vdG5vdGVzID0gW10sXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIGZvb3Rub3Rlc1xuICAgICAgICAgIH07XG5cbiAgICBub2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBub2RlRnJvbUNvbnRlbnRcbn07XG4iXSwibmFtZXMiOlsibm9kZUZyb21Db250ZW50IiwibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJmb290bm90ZXMiLCJjb250ZXh0IiwiY3JlYXRlRE9NRWxlbWVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlCQSxPQUVFO2VBRkY7O0lBakJnQkEsZUFBZTtlQUFmQTs7OzREQU5VOzZEQUNDOzs7Ozs7QUFFM0IsSUFBTUMsZ0JBQWdCQyxjQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMsZUFBYyxDQUFDRixXQUFXO0FBRTFDLFNBQVNILGdCQUFnQk0sT0FBTztJQUNyQyxJQUFNQyxTQUFTTixjQUFjTyxRQUFRLENBQUNGLFVBQ2hDRyxPQUFPTCxlQUFlTSxLQUFLLENBQUNIO0lBRWxDLElBQUlFLFNBQVMsTUFBTTtRQUNqQixJQUFNRSxZQUFZLEVBQUUsRUFDZEMsVUFBVTtZQUNSTCxRQUFBQTtZQUNBSSxXQUFBQTtRQUNGO1FBRU5GLEtBQUtJLGdCQUFnQixDQUFDRDtJQUN4QjtJQUVBLE9BQU9IO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JULGlCQUFBQTtBQUNGIn0=