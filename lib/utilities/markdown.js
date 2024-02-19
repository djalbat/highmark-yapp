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
    var tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens), footnotes = [], context = {
        tokens: tokens,
        footnotes: footnotes
    };
    node.createDOMElement(context);
    return node;
}
var _default = {
    nodeFromContent: nodeFromContent
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bkxleGVyIGZyb20gXCIuLi9tYXJrZG93bi9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93bi9wYXJzZXJcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBmb290bm90ZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgZm9vdG5vdGVzXG4gICAgICAgIH07XG5cbiAgbm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vZGVGcm9tQ29udGVudFxufTtcbiJdLCJuYW1lcyI6WyJub2RlRnJvbUNvbnRlbnQiLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImZvb3Rub3RlcyIsImNvbnRleHQiLCJjcmVhdGVET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzQkEsT0FFRTtlQUZGOztJQWRnQkEsZUFBZTtlQUFmQTs7OzREQU5VOzZEQUNDOzs7Ozs7QUFFM0IsSUFBTUMsZ0JBQWdCQyxjQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMsZUFBYyxDQUFDRixXQUFXO0FBRTFDLFNBQVNILGdCQUFnQk0sT0FBTztJQUNyQyxJQUFNQyxTQUFTTixjQUFjTyxRQUFRLENBQUNGLFVBQ2hDRyxPQUFPTCxlQUFlTSxLQUFLLENBQUNILFNBQzVCSSxZQUFZLEVBQUUsRUFDZEMsVUFBVTtRQUNSTCxRQUFBQTtRQUNBSSxXQUFBQTtJQUNGO0lBRU5GLEtBQUtJLGdCQUFnQixDQUFDRDtJQUV0QixPQUFPSDtBQUNUO0lBRUEsV0FBZTtJQUNiVCxpQkFBQUE7QUFDRiJ9