"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get HTMLClassFromMarkdownNode () {
        return HTMLClassFromMarkdownNode;
    },
    get default () {
        return _default;
    },
    get topmostHTMLNodeFromDocumentMarkdownNode () {
        return topmostHTMLNodeFromDocumentMarkdownNode;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _html = /*#__PURE__*/ _interop_require_default(require("../map/node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var tokensFromMarkdown = _highmarkmarkdown.grammarUtilities.tokensFromMarkdown, documentMarkdownNodeFromTokens = _highmarkmarkdown.grammarUtilities.documentMarkdownNodeFromTokens, topmostHTMLNodeFromDocumentMarkdownNodeBase = _highmarkmarkdown.grammarUtilities.topmostHTMLNodeFromDocumentMarkdownNode;
function HTMLClassFromMarkdownNode(markdownNode) {
    var Class;
    if (markdownNode === null) {
        Class = _highmarkmarkdown.TopmostHTMLNode; ///
    } else {
        var nonTerminalNode = markdownNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html.default[ruleName] || _highmarkmarkdown.HTMLNode;
    }
    return Class;
}
function topmostHTMLNodeFromDocumentMarkdownNode(markdownNode) {
    var ClassFromOuterNode = HTMLClassFromMarkdownNode, topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNodeBase(markdownNode, ClassFromOuterNode);
    return topmostHTMLNode;
}
var _default = {
    tokensFromMarkdown: tokensFromMarkdown,
    documentMarkdownNodeFromTokens: documentMarkdownNodeFromTokens,
    HTMLClassFromMarkdownNode: HTMLClassFromMarkdownNode,
    topmostHTMLNodeFromDocumentMarkdownNode: topmostHTMLNodeFromDocumentMarkdownNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSFRNTE5vZGUsIFRvcG1vc3RIVE1MTm9kZSwgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgaHRtbE5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2h0bWxcIjtcblxuY29uc3QgeyB0b2tlbnNGcm9tTWFya2Rvd24sXG4gICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlOiB0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGVCYXNlIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgY29uc3QgQ2xhc3NGcm9tT3V0ZXJOb2RlID0gSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZUJhc2UobWFya2Rvd25Ob2RlLCBDbGFzc0Zyb21PdXRlck5vZGUpO1xuXG4gIHJldHVybiB0b3Btb3N0SFRNTE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdG9rZW5zRnJvbU1hcmtkb3duLFxuICBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMsXG4gIEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUsXG4gIHRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZVxufTtcbiJdLCJuYW1lcyI6WyJIVE1MQ2xhc3NGcm9tTWFya2Rvd25Ob2RlIiwidG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwidG9rZW5zRnJvbU1hcmtkb3duIiwiZ3JhbW1hclV0aWxpdGllcyIsImRvY3VtZW50TWFya2Rvd25Ob2RlRnJvbVRva2VucyIsInRvcG1vc3RIVE1MTm9kZUZyb21Eb2N1bWVudE1hcmtkb3duTm9kZUJhc2UiLCJtYXJrZG93bk5vZGUiLCJDbGFzcyIsIlRvcG1vc3RIVE1MTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsIkhUTUxOb2RlIiwiQ2xhc3NGcm9tT3V0ZXJOb2RlIiwidG9wbW9zdEhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVZ0JBO2VBQUFBOztRQXNCaEI7ZUFBQTs7UUFQZ0JDO2VBQUFBOzs7Z0NBdkI0QzsyREFFcEM7Ozs7OztBQUV4QixJQUFRQyxxQkFFeUZDLGtDQUFnQixDQUZ6R0Qsb0JBQ0FFLGlDQUN5RkQsa0NBQWdCLENBRHpHQyxnQ0FDQUgsQUFBeUNJLDhDQUFnREYsa0NBQWdCLENBQXpHRjtBQUVELFNBQVNELDBCQUEwQk0sWUFBWTtJQUNwRCxJQUFJQztJQUVKLElBQUlELGlCQUFpQixNQUFNO1FBQ3pCQyxRQUFRQyxpQ0FBZSxFQUFHLEdBQUc7SUFDL0IsT0FBTztRQUNMLElBQU1DLGtCQUFrQkgsY0FDbEJJLFdBQVdELGdCQUFnQkUsV0FBVztRQUU1Q0osUUFBUUssYUFBVyxDQUFDRixTQUFTLElBQUlHLDBCQUFRO0lBQzNDO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNOLHdDQUF3Q0ssWUFBWTtJQUNsRSxJQUFNUSxxQkFBcUJkLDJCQUNyQmUsa0JBQWtCViw0Q0FBNENDLGNBQWNRO0lBRWxGLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JiLG9CQUFBQTtJQUNBRSxnQ0FBQUE7SUFDQUosMkJBQUFBO0lBQ0FDLHlDQUFBQTtBQUNGIn0=