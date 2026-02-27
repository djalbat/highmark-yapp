"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListing;
    }
});
const _yapp = /*#__PURE__*/ _interop_require_default(require("yapp"));
const _highmarkmarkdown = require("highmark-markdown");
const _easy = require("easy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { mountElement, unmountElement } = _easy.elementUtilities, { remove, insertAfter, insertBeforehand } = _highmarkmarkdown.domUtilities;
class BlockListing extends _yapp.default {
    mount(parentDOMElement, siblingDOMElement, context) {
        const domElement = this.getDOMElement();
        siblingDOMElement !== null ? insertAfter(domElement, parentDOMElement, siblingDOMElement) : insertBeforehand(domElement, parentDOMElement);
        const element = this; ///
        mountElement(element);
        siblingDOMElement = domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement, context) {
        const element = this; ///
        unmountElement(element);
        const domElement = this.getDOMElement();
        remove(domElement, parentDOMElement);
    }
    static defaultProperties = {
        editable: false,
        firaCode: true,
        hiddenGutter: true,
        hiddenScrollbars: true
    };
    static fromContentAndConfiguration(content, configuration) {
        return _yapp.default.fromContentAndConfiguration(BlockListing, content, configuration);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja0xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCJ5YXBwXCI7XG5cbmltcG9ydCB7IGRvbVV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuaW1wb3J0IHsgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QmVmb3JlaGFuZCB9ID0gZG9tVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmcgZXh0ZW5kcyBZYXBwIHtcbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICBmaXJhQ29kZTogdHJ1ZSxcbiAgICBoaWRkZW5HdXR0ZXI6IHRydWUsXG4gICAgaGlkZGVuU2Nyb2xsYmFyczogdHJ1ZVxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbikgeyByZXR1cm4gWWFwcC5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oQmxvY2tMaXN0aW5nLCBjb250ZW50LCBjb25maWd1cmF0aW9uKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZyIsIm1vdW50RWxlbWVudCIsInVubW91bnRFbGVtZW50IiwiZWxlbWVudFV0aWxpdGllcyIsInJlbW92ZSIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImRvbVV0aWxpdGllcyIsIllhcHAiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImVsZW1lbnQiLCJ1bm1vdW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJlZGl0YWJsZSIsImZpcmFDb2RlIiwiaGlkZGVuR3V0dGVyIiwiaGlkZGVuU2Nyb2xsYmFycyIsImZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsImNvbnRlbnQiLCJjb25maWd1cmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXFCQTs7OzZEQVJKO2tDQUVZO3NCQUNJOzs7Ozs7QUFFakMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRSxHQUFHQyxzQkFBZ0IsRUFDbkQsRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdDLDhCQUFZO0FBRS9DLE1BQU1QLHFCQUFxQlEsYUFBSTtJQUM1Q0MsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPLEVBQUU7UUFDbEQsTUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7UUFFcENILHNCQUFzQixPQUNyQk4sWUFBWVEsWUFBWUgsa0JBQWtCQyxxQkFDeENMLGlCQUFpQk8sWUFBWUg7UUFFakMsTUFBTUssVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QmQsYUFBYWM7UUFFYkosb0JBQW9CRSxZQUFhLEdBQUc7UUFFcEMsT0FBT0Y7SUFDVDtJQUVBSyxRQUFRTixnQkFBZ0IsRUFBRUUsT0FBTyxFQUFFO1FBQ2pDLE1BQU1HLFVBQVUsSUFBSSxFQUFFLEdBQUc7UUFFekJiLGVBQWVhO1FBRWYsTUFBTUYsYUFBYSxJQUFJLENBQUNDLGFBQWE7UUFFckNWLE9BQU9TLFlBQVlIO0lBQ3JCO0lBRUEsT0FBT08sb0JBQW9CO1FBQ3pCQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxrQkFBa0I7SUFDcEIsRUFBRTtJQUVGLE9BQU9DLDRCQUE0QkMsT0FBTyxFQUFFQyxhQUFhLEVBQUU7UUFBRSxPQUFPaEIsYUFBSSxDQUFDYywyQkFBMkIsQ0FBQ3RCLGNBQWN1QixTQUFTQztJQUFnQjtBQUM5SSJ9