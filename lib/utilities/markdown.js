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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bkxleGVyIGZyb20gXCIuLi9tYXJrZG93bi9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93bi9wYXJzZXJcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZm9vdG5vdGVzID0gW10sXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIGZvb3Rub3Rlc1xuICAgICAgICAgIH07XG5cbiAgICBub2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBub2RlRnJvbUNvbnRlbnRcbn07XG4iXSwibmFtZXMiOlsibm9kZUZyb21Db250ZW50IiwibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJmb290bm90ZXMiLCJjb250ZXh0IiwiY3JlYXRlRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUJBLE9BRUU7ZUFGRjs7SUFqQmdCQSxlQUFlO2VBQWZBOzs7NERBTlU7NkRBQ0M7Ozs7OztBQUUzQixJQUFNQyxnQkFBZ0JDLGNBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxlQUFjLENBQUNGLFdBQVc7QUFFMUMsU0FBU0gsZ0JBQWdCTSxPQUFPO0lBQ3JDLElBQU1DLFNBQVNOLGNBQWNPLFFBQVEsQ0FBQ0YsVUFDaENHLE9BQU9MLGVBQWVNLEtBQUssQ0FBQ0g7SUFFbEMsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQU1FLFlBQVksRUFBRSxFQUNkQyxVQUFVO1lBQ1JMLFFBQUFBO1lBQ0FJLFdBQUFBO1FBQ0Y7UUFFTkYsS0FBS0ksZ0JBQWdCLENBQUNEO0lBQ3hCO0lBRUEsT0FBT0g7QUFDVDtJQUVBLFdBQWU7SUFDYlQsaUJBQUFBO0FBQ0YifQ==