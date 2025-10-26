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
    get topmostHTMLNodeFromMarkdownNode () {
        return topmostHTMLNodeFromMarkdownNode;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _html = /*#__PURE__*/ _interop_require_default(require("../map/node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var tokensFromMarkdown = _highmarkmarkdown.grammarUtilities.tokensFromMarkdown, markdownNodeFromTokens = _highmarkmarkdown.grammarUtilities.markdownNodeFromTokens, topmostHTMLNodeFromMarkdownNodeBase = _highmarkmarkdown.grammarUtilities.topmostHTMLNodeFromMarkdownNode;
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
function topmostHTMLNodeFromMarkdownNode(markdownNode) {
    var ClassFromOuterNode = HTMLClassFromMarkdownNode, topmostHTMLNode = topmostHTMLNodeFromMarkdownNodeBase(markdownNode, ClassFromOuterNode);
    return topmostHTMLNode;
}
var _default = {
    tokensFromMarkdown: tokensFromMarkdown,
    markdownNodeFromTokens: markdownNodeFromTokens,
    HTMLClassFromMarkdownNode: HTMLClassFromMarkdownNode,
    topmostHTMLNodeFromMarkdownNode: topmostHTMLNodeFromMarkdownNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSFRNTE5vZGUsIFRvcG1vc3RIVE1MTm9kZSwgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgaHRtbE5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2h0bWxcIjtcblxuY29uc3QgeyB0b2tlbnNGcm9tTWFya2Rvd24sXG4gICAgICAgIG1hcmtkb3duTm9kZUZyb21Ub2tlbnMsXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGU6IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGVCYXNlIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKSB7XG4gIGNvbnN0IENsYXNzRnJvbU91dGVyTm9kZSA9IEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlQmFzZShtYXJrZG93bk5vZGUsIENsYXNzRnJvbU91dGVyTm9kZSk7XG5cbiAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0b2tlbnNGcm9tTWFya2Rvd24sXG4gIG1hcmtkb3duTm9kZUZyb21Ub2tlbnMsXG4gIEhUTUxDbGFzc0Zyb21NYXJrZG93bk5vZGUsXG4gIHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGVcbn07XG4iXSwibmFtZXMiOlsiSFRNTENsYXNzRnJvbU1hcmtkb3duTm9kZSIsInRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUiLCJ0b2tlbnNGcm9tTWFya2Rvd24iLCJncmFtbWFyVXRpbGl0aWVzIiwibWFya2Rvd25Ob2RlRnJvbVRva2VucyIsInRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGVCYXNlIiwibWFya2Rvd25Ob2RlIiwiQ2xhc3MiLCJUb3Btb3N0SFRNTE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaHRtbE5vZGVNYXAiLCJIVE1MTm9kZSIsIkNsYXNzRnJvbU91dGVyTm9kZSIsInRvcG1vc3RIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBVWdCQTtlQUFBQTs7UUFzQmhCO2VBQUE7O1FBUGdCQztlQUFBQTs7O2dDQXZCNEM7MkRBRXBDOzs7Ozs7QUFFeEIsSUFBUUMscUJBRXlFQyxrQ0FBZ0IsQ0FGekZELG9CQUNBRSx5QkFDeUVELGtDQUFnQixDQUR6RkMsd0JBQ0FILEFBQWlDSSxzQ0FBd0NGLGtDQUFnQixDQUF6RkY7QUFFRCxTQUFTRCwwQkFBMEJNLFlBQVk7SUFDcEQsSUFBSUM7SUFFSixJQUFJRCxpQkFBaUIsTUFBTTtRQUN6QkMsUUFBUUMsaUNBQWUsRUFBRyxHQUFHO0lBQy9CLE9BQU87UUFDTCxJQUFNQyxrQkFBa0JILGNBQ2xCSSxXQUFXRCxnQkFBZ0JFLFdBQVc7UUFFNUNKLFFBQVFLLGFBQVcsQ0FBQ0YsU0FBUyxJQUFJRywwQkFBUTtJQUMzQztJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTTixnQ0FBZ0NLLFlBQVk7SUFDMUQsSUFBTVEscUJBQXFCZCwyQkFDckJlLGtCQUFrQlYsb0NBQW9DQyxjQUFjUTtJQUUxRSxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiYixvQkFBQUE7SUFDQUUsd0JBQUFBO0lBQ0FKLDJCQUFBQTtJQUNBQyxpQ0FBQUE7QUFDRiJ9