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
    nodeFromTokens: function() {
        return nodeFromTokens;
    },
    tokensFromContent: function() {
        return tokensFromContent;
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
function tokensFromContent(content) {
    var lexer = markdownLexer, tokens = lexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var parser = markdownParser, startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
    return node;
}
var _default = {
    tokensFromContent: tokensFromContent,
    nodeFromTokens: nodeFromTokens
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bkxleGVyIGZyb20gXCIuLi9tYXJrZG93bi9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93bi9wYXJzZXJcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3QgbGV4ZXIgPSBtYXJrZG93bkxleGVyLCAgLy8vXG4gICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgY29uc3QgcGFyc2VyID0gbWFya2Rvd25QYXJzZXIsICAvLy9cbiAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0b2tlbnNGcm9tQ29udGVudCxcbiAgbm9kZUZyb21Ub2tlbnNcbn07XG4iXSwibmFtZXMiOlsibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwiY29udGVudCIsImxleGVyIiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZXIiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJzdGFydE9mQ29udGVudCIsIm5vZGUiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0JBLE9BR0U7ZUFIRjs7SUFUZ0JBLGNBQWM7ZUFBZEE7O0lBUEFDLGlCQUFpQjtlQUFqQkE7Ozs0REFOVTs2REFDQzs7Ozs7O0FBRTNCLElBQU1DLGdCQUFnQkMsY0FBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLGVBQWMsQ0FBQ0YsV0FBVztBQUUxQyxTQUFTSCxrQkFBa0JNLE9BQU87SUFDdkMsSUFBTUMsUUFBUU4sZUFDUk8sU0FBU0QsTUFBTUUsUUFBUSxDQUFDSDtJQUU5QixPQUFPRTtBQUNUO0FBRU8sU0FBU1QsZUFBZVMsTUFBTTtJQUNuQyxJQUFNRSxTQUFTTixnQkFDVE8sWUFBWUQsT0FBT0UsWUFBWSxJQUMvQkMsaUJBQWlCLE1BQ2pCQyxPQUFPSixPQUFPSyxLQUFLLENBQUNQLFFBQVFHLFdBQVdFO0lBRTdDLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JkLG1CQUFBQTtJQUNBRCxnQkFBQUE7QUFDRiJ9