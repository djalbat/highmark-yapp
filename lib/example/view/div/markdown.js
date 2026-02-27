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
const _index = require("../../../index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { topmostHTMLNodeFromDocumentMarkdownNode } = _index.grammarUtilities;
class MarkdownDiv extends _easy.Element {
    clear() {
        const topmostHTMLNode = this.getTopmostHTMLNode();
        if (topmostHTMLNode !== null) {
            const domElement = this.getDOMElement(), parentDOMElement = domElement, context = null;
            topmostHTMLNode.unmount(parentDOMElement, context);
            this.clearTopmostHTMLNode();
        }
    }
    update(documentMarkdownNode, tokens) {
        if (documentMarkdownNode === null) {
            return;
        }
        const domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null, context = {
            tokens
        }, topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode);
        topmostHTMLNode.mount(parentDOMElement, siblingDOMElement, context);
        this.setTopmostHTMLNode(topmostHTMLNode);
    }
    clearTopmostHTMLNode() {
        const topmostHTMLNode = null;
        this.setTopmostHTMLNode(topmostHTMLNode);
    }
    getTopmostHTMLNode() {
        const { topmostHTMLNode } = this.getState();
        return topmostHTMLNode;
    }
    setTopmostHTMLNode(topmostHTMLNode) {
        this.updateState({
            topmostHTMLNode
        });
    }
    setInitialState() {
        const topmostHTMLNode = null;
        this.setState({
            topmostHTMLNode
        });
    }
    parentContext() {
        const clearMarkdownDiv = this.clear.bind(this), updateMarkdownDiv = this.update.bind(this);
        return {
            clearMarkdownDiv,
            updateMarkdownDiv
        };
    }
    initialise() {
        this.setInitialState();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "markdown"
    };
}
const _default = (0, _easywithstyle.default)(MarkdownDiv)`

  width: 100%;
  height: 100%;
  border: 1px solid darkgrey;
  padding: 0.25rem;
  position: absolute;
  
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBncmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyB0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIE1hcmtkb3duRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdEhUTUxOb2RlKCk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIHRvcG1vc3RIVE1MTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9wbW9zdEhUTUxOb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRvY3VtZW50TWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuICB9XG5cbiAgY2xlYXJUb3Btb3N0SFRNTE5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gIH1cblxuICBnZXRUb3Btb3N0SFRNTE5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0SFRNTE5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0SFRNTE5vZGU7XG4gIH1cblxuICBzZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0SFRNTE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3Btb3N0SFRNTE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJNYXJrZG93bkRpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVNYXJrZG93bkRpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyTWFya2Rvd25EaXYsXG4gICAgICB1cGRhdGVNYXJrZG93bkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2Rvd25EaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICBcbmA7XG4iXSwibmFtZXMiOlsidG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiZ3JhbW1hclV0aWxpdGllcyIsIk1hcmtkb3duRGl2IiwiRWxlbWVudCIsImNsZWFyIiwidG9wbW9zdEhUTUxOb2RlIiwiZ2V0VG9wbW9zdEhUTUxOb2RlIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiY29udGV4dCIsInVubW91bnQiLCJjbGVhclRvcG1vc3RIVE1MTm9kZSIsInVwZGF0ZSIsImRvY3VtZW50TWFya2Rvd25Ob2RlIiwidG9rZW5zIiwic2libGluZ0RPTUVsZW1lbnQiLCJtb3VudCIsInNldFRvcG1vc3RIVE1MTm9kZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJjbGVhck1hcmtkb3duRGl2IiwiYmluZCIsInVwZGF0ZU1hcmtkb3duRGl2IiwiaW5pdGlhbGlzZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUZBOzs7ZUFBQTs7O3NFQXZGc0I7c0JBRUU7dUJBQ1M7Ozs7OztBQUVqQyxNQUFNLEVBQUVBLHVDQUF1QyxFQUFFLEdBQUdDLHVCQUFnQjtBQUVwRSxNQUFNQyxvQkFBb0JDLGFBQU87SUFDL0JDLFFBQVE7UUFDTixNQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0I7UUFFL0MsSUFBSUQsb0JBQW9CLE1BQU07WUFDNUIsTUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFDbkJHLFVBQVU7WUFFaEJMLGdCQUFnQk0sT0FBTyxDQUFDRixrQkFBa0JDO1lBRTFDLElBQUksQ0FBQ0Usb0JBQW9CO1FBQzNCO0lBQ0Y7SUFFQUMsT0FBT0Msb0JBQW9CLEVBQUVDLE1BQU0sRUFBRTtRQUNuQyxJQUFJRCx5QkFBeUIsTUFBTTtZQUNqQztRQUNGO1FBRUEsTUFBTVAsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFDbkJTLG9CQUFvQixNQUNwQk4sVUFBVTtZQUNSSztRQUNGLEdBQ0FWLGtCQUFrQkwsd0NBQXdDYztRQUVoRVQsZ0JBQWdCWSxLQUFLLENBQUNSLGtCQUFrQk8sbUJBQW1CTjtRQUUzRCxJQUFJLENBQUNRLGtCQUFrQixDQUFDYjtJQUMxQjtJQUVBTyx1QkFBdUI7UUFDckIsTUFBTVAsa0JBQWtCO1FBRXhCLElBQUksQ0FBQ2Esa0JBQWtCLENBQUNiO0lBQzFCO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNLEVBQUVELGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQ2MsUUFBUTtRQUV6QyxPQUFPZDtJQUNUO0lBRUFhLG1CQUFtQmIsZUFBZSxFQUFFO1FBQ2xDLElBQUksQ0FBQ2UsV0FBVyxDQUFDO1lBQ2ZmO1FBQ0Y7SUFDRjtJQUVBZ0Isa0JBQWtCO1FBQ2hCLE1BQU1oQixrQkFBa0I7UUFFeEIsSUFBSSxDQUFDaUIsUUFBUSxDQUFDO1lBQ1pqQjtRQUNGO0lBQ0Y7SUFFQWtCLGdCQUFnQjtRQUNkLE1BQU1DLG1CQUFtQixJQUFJLENBQUNwQixLQUFLLENBQUNxQixJQUFJLENBQUMsSUFBSSxHQUN2Q0Msb0JBQW9CLElBQUksQ0FBQ2IsTUFBTSxDQUFDWSxJQUFJLENBQUMsSUFBSTtRQUUvQyxPQUFRO1lBQ05EO1lBQ0FFO1FBQ0Y7SUFDRjtJQUVBQyxhQUFhO1FBQ1gsSUFBSSxDQUFDTixlQUFlO0lBQ3RCO0lBRUEsT0FBT08sVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM3QixZQUFZLENBQUM7Ozs7Ozs7OztBQVN0QyxDQUFDIn0=