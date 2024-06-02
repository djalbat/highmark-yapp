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
    var lexer = markdownLexer, parser = markdownParser, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
    if (node !== null) {
        var context = {
            tokens: tokens
        };
        node.createDOMElement(context);
    }
    return node;
}
var _default = {
    nodeFromContent: nodeFromContent
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bkxleGVyIGZyb20gXCIuLi9tYXJrZG93bi9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93bi9wYXJzZXJcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICBwYXJzZXIgPSBtYXJrZG93blBhcnNlciwgIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgbm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZUZyb21Db250ZW50XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVGcm9tQ29udGVudCIsIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwiY29udGVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwidG9rZW5pc2UiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJzdGFydE9mQ29udGVudCIsIm5vZGUiLCJwYXJzZSIsImNvbnRleHQiLCJjcmVhdGVET01FbGVtZW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEyQkEsT0FFRTtlQUZGOztJQW5CZ0JBLGVBQWU7ZUFBZkE7Ozs0REFOVTs2REFDQzs7Ozs7O0FBRTNCLElBQU1DLGdCQUFnQkMsY0FBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLGVBQWMsQ0FBQ0YsV0FBVztBQUUxQyxTQUFTSCxnQkFBZ0JNLE9BQU87SUFDckMsSUFBTUMsUUFBUU4sZUFDUk8sU0FBU0osZ0JBQ1RLLFNBQVNGLE1BQU1HLFFBQVEsQ0FBQ0osVUFDeEJLLFlBQVlILE9BQU9JLFlBQVksSUFDL0JDLGlCQUFpQixNQUNqQkMsT0FBT04sT0FBT08sS0FBSyxDQUFDTixRQUFRRSxXQUFXRTtJQUU3QyxJQUFJQyxTQUFTLE1BQU07UUFDakIsSUFBTUUsVUFBVTtZQUNSUCxRQUFBQTtRQUNGO1FBRU5LLEtBQUtHLGdCQUFnQixDQUFDRDtJQUN4QjtJQUVBLE9BQU9GO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JkLGlCQUFBQTtBQUNGIn0=