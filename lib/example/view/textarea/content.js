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
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentTextarea extends _textarea.default {
    getContent() {
        const value = this.getValue(), content = value; ///
        return content;
    }
    setContent(content) {
        const value = content;
        this.setValue(value);
    }
    parentContext() {
        const getContent = this.getContent.bind(this), setContent = this.setContent.bind(this), focusContentTextarea = this.focus.bind(this);
        return {
            getContent,
            setContent,
            focusContentTextarea
        };
    }
    static defaultProperties = {
        className: "content",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(ContentTextarea)`

  height: 64rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5jbGFzcyBDb250ZW50VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50O1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgZm9jdXNDb250ZW50VGV4dGFyZWEgPSB0aGlzLmZvY3VzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBzZXRDb250ZW50LFxuICAgICAgZm9jdXNDb250ZW50VGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGVudFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29udGVudFRleHRhcmVhKWBcblxuICBoZWlnaHQ6IDY0cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ29udGVudFRleHRhcmVhIiwiVGV4dGFyZWEiLCJnZXRDb250ZW50IiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImZvY3VzQ29udGVudFRleHRhcmVhIiwiZm9jdXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNDQTs7O2VBQUE7OztzRUFwQ3NCO2lFQUVEOzs7Ozs7QUFFckIsTUFBTUEsd0JBQXdCQyxpQkFBUTtJQUNwQ0MsYUFBYTtRQUNYLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxVQUFVRixPQUFPLEdBQUc7UUFFMUIsT0FBT0U7SUFDVDtJQUVBQyxXQUFXRCxPQUFPLEVBQUU7UUFDbEIsTUFBTUYsUUFBUUU7UUFFZCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7SUFDaEI7SUFFQUssZ0JBQWdCO1FBQ2QsTUFBTU4sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDdENILGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNHLElBQUksQ0FBQyxJQUFJLEdBQ3RDQyx1QkFBdUIsSUFBSSxDQUFDQyxLQUFLLENBQUNGLElBQUksQ0FBQyxJQUFJO1FBRWpELE9BQVE7WUFDTlA7WUFDQUk7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDZixnQkFBZ0IsQ0FBQzs7OztBQUkxQyxDQUFDIn0=