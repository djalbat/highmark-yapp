"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _index = require("../index");
const _easylayout = require("easy-layout");
const _column = /*#__PURE__*/ _interop_require_default(require("./view/div/column"));
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/markdown"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { tokensFromMarkdown, documentMarkdownNodeFromTokens } = _index.grammarUtilities;
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        this.update();
    };
    update() {
        const content = this.getContent(), markdown = content, tokens = tokensFromMarkdown(markdown), documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);
        this.clearMarkdownDiv();
        this.updateMarkdownDiv(documentMarkdownNode, tokens);
        this.focusContentTextarea();
    }
    didMount() {
        this.update();
    }
    willUnmount() {
    ///
    }
    childElements() {
        return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
            onKeyUp: this.keyUpHandler
        }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_markdown.default, null)));
    }
    initialise() {
        this.assignContext();
        const { initialContent } = this.constructor, content = initialContent; ///
        this.setContent(content);
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
    static initialContent = `\`\`\`json
{
  "foo": "bah"
}
\`\`\`
`;
    static _initialContent = `
### JavaScript
  
'''javascript
"use strict";

import "juxtapose";

import withStyle from "easy-with-style"; ///

import { Body } from "easy";

function simpleApplication(selector) {
  const body = new Body(selector);

  body.mount(

    <p>
      A simple application.
    </p>

  );
}

export default withStyle(simpleApplication)\`

  color: \\#333;

\`;
'''

### JSON

'''json
{  
  "type": "book",
  "title": "Look to Windward",
  "author": "Look to Windward",
  "stores" : [{
    "identifier": 123
  }],
  "details" : {
    "in-print": true,
    "stock-count": 123
  }
}
'''

### XML

'''xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Look to Windward by Iain M. Banks -->
<book>
  <name>
    Look to Windward
  </name>
  <author>
    Iain M. Banks
  </author>
  <language>
    English
  </language>
  <genre>
    Science fiction
  </genre>
</book>
'''
`;
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTWFya2Rvd25EaXYgZnJvbSBcIi4vdmlldy9kaXYvbWFya2Rvd25cIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5cbmNvbnN0IHsgdG9rZW5zRnJvbU1hcmtkb3duLCBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWFya2Rvd24gPSBjb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICB0aGlzLmNsZWFyTWFya2Rvd25EaXYoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25EaXYoZG9jdW1lbnRNYXJrZG93bk5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLmZvY3VzQ29udGVudFRleHRhcmVhKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8TWFya2Rvd25EaXYvPlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxcYFxcYFxcYGpzb25cbntcbiAgXCJmb29cIjogXCJiYWhcIlxufVxuXFxgXFxgXFxgXG5gO1xuXG4gIHN0YXRpYyBfaW5pdGlhbENvbnRlbnQgPSBgXG4jIyMgSmF2YVNjcmlwdFxuICBcbicnJ2phdmFzY3JpcHRcblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7IC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuZnVuY3Rpb24gc2ltcGxlQXBwbGljYXRpb24oc2VsZWN0b3IpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KHNlbGVjdG9yKTtcblxuICBib2R5Lm1vdW50KFxuXG4gICAgPHA+XG4gICAgICBBIHNpbXBsZSBhcHBsaWNhdGlvbi5cbiAgICA8L3A+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKHNpbXBsZUFwcGxpY2F0aW9uKVxcYFxuXG4gIGNvbG9yOiBcXFxcIzMzMztcblxuXFxgO1xuJycnXG5cbiMjIyBKU09OXG5cbicnJ2pzb25cbnsgIFxuICBcInR5cGVcIjogXCJib29rXCIsXG4gIFwidGl0bGVcIjogXCJMb29rIHRvIFdpbmR3YXJkXCIsXG4gIFwiYXV0aG9yXCI6IFwiTG9vayB0byBXaW5kd2FyZFwiLFxuICBcInN0b3Jlc1wiIDogW3tcbiAgICBcImlkZW50aWZpZXJcIjogMTIzXG4gIH1dLFxuICBcImRldGFpbHNcIiA6IHtcbiAgICBcImluLXByaW50XCI6IHRydWUsXG4gICAgXCJzdG9jay1jb3VudFwiOiAxMjNcbiAgfVxufVxuJycnXG5cbiMjIyBYTUxcblxuJycneG1sXG48P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjwhLS0gTG9vayB0byBXaW5kd2FyZCBieSBJYWluIE0uIEJhbmtzIC0tPlxuPGJvb2s+XG4gIDxuYW1lPlxuICAgIExvb2sgdG8gV2luZHdhcmRcbiAgPC9uYW1lPlxuICA8YXV0aG9yPlxuICAgIElhaW4gTS4gQmFua3NcbiAgPC9hdXRob3I+XG4gIDxsYW5ndWFnZT5cbiAgICBFbmdsaXNoXG4gIDwvbGFuZ3VhZ2U+XG4gIDxnZW5yZT5cbiAgICBTY2llbmNlIGZpY3Rpb25cbiAgPC9nZW5yZT5cbjwvYm9vaz5cbicnJ1xuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJ0b2tlbnNGcm9tTWFya2Rvd24iLCJkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJncmFtbWFyVXRpbGl0aWVzIiwiVmlldyIsIkVsZW1lbnQiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm1hcmtkb3duIiwidG9rZW5zIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duRGl2IiwidXBkYXRlTWFya2Rvd25EaXYiLCJmb2N1c0NvbnRlbnRUZXh0YXJlYSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJDb250ZW50VGV4dGFyZWEiLCJvbktleVVwIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIk1hcmtkb3duRGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsInNldENvbnRlbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJfaW5pdGlhbENvbnRlbnQiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRKQTs7O2VBQUE7OztzRUExSnNCO3NCQUVFO3VCQUNTOzRCQUN3QjsrREFFbkM7bUVBQ0M7aUVBQ0M7aUVBQ0E7Z0VBQ0k7Ozs7OztBQUU1QixNQUFNLEVBQUVBLGtCQUFrQixFQUFFQyw4QkFBOEIsRUFBRSxHQUFHQyx1QkFBZ0I7QUFFL0UsTUFBTUMsYUFBYUMsYUFBTztJQUN4QkMsZUFBZSxDQUFDQyxPQUFPQztRQUNyQixJQUFJLENBQUNDLE1BQU07SUFDYixFQUFDO0lBRURBLFNBQVM7UUFDUCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsV0FBV0YsU0FDWEcsU0FBU1osbUJBQW1CVyxXQUM1QkUsdUJBQXVCWiwrQkFBK0JXO1FBRTVELElBQUksQ0FBQ0UsZ0JBQWdCO1FBRXJCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGLHNCQUFzQkQ7UUFFN0MsSUFBSSxDQUFDSSxvQkFBb0I7SUFDM0I7SUFFQUMsV0FBVztRQUNULElBQUksQ0FBQ1QsTUFBTTtJQUNiO0lBRUFVLGNBQWM7SUFDWixHQUFHO0lBQ0w7SUFFQUMsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLHNCQUFVLHNCQUNULG9CQUFDQyxpQkFBVyxzQkFDVixvQkFBQ0MsbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsMEJBR1osb0JBQUNDLGdCQUFlO1lBQUNDLFNBQVMsSUFBSSxDQUFDcEIsWUFBWTs0QkFHL0Msb0JBQUNxQiwrQkFBbUIsdUJBQ3BCLG9CQUFDQyxlQUFTLHNCQUNSLG9CQUFDQyxpQkFBVztJQUtwQjtJQUVBQyxhQUFhO1FBQ1gsSUFBSSxDQUFDQyxhQUFhO1FBRWxCLE1BQU0sRUFBRUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDckN0QixVQUFVc0IsZ0JBQWdCLEdBQUc7UUFFbkMsSUFBSSxDQUFDQyxVQUFVLENBQUN2QjtJQUNsQjtJQUVBLE9BQU93QixVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtJQUVGLE9BQU9KLGlCQUFpQixDQUFDOzs7OztBQUszQixDQUFDLENBQUM7SUFFQSxPQUFPSyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRTVCLENBQUMsQ0FBQztBQUNGO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2xDLEtBQUssQ0FBQzs7OztBQUkvQixDQUFDIn0=