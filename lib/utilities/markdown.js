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
    node.createDOMElement(tokens);
    return node;
}
var _default = {
    nodeFromContent: nodeFromContent
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bkxleGVyIGZyb20gXCIuLi9tYXJrZG93bi9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93bi9wYXJzZXJcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIG5vZGUuY3JlYXRlRE9NRWxlbWVudCh0b2tlbnMpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vZGVGcm9tQ29udGVudFxufTtcbiJdLCJuYW1lcyI6WyJub2RlRnJvbUNvbnRlbnQiLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImNyZWF0ZURPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWlCQSxPQUVFO2VBRkY7O0lBVGdCQSxlQUFlO2VBQWZBOzs7NERBTlU7NkRBQ0M7Ozs7OztBQUUzQixJQUFNQyxnQkFBZ0JDLGNBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxlQUFjLENBQUNGLFdBQVc7QUFFMUMsU0FBU0gsZ0JBQWdCTSxPQUFPO0lBQ3JDLElBQU1DLFNBQVNOLGNBQWNPLFFBQVEsQ0FBQ0YsVUFDaENHLE9BQU9MLGVBQWVNLEtBQUssQ0FBQ0g7SUFFbENFLEtBQUtFLGdCQUFnQixDQUFDSjtJQUV0QixPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNiVCxpQkFBQUE7QUFDRiJ9