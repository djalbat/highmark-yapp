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
let count = 0;
class ContentTextarea extends _textarea.default {
    blurHandler = (event, element)=>{
        console.log(blur, count++);
    };
    getContent() {
        const value = this.getValue(), content = value; ///
        return content;
    }
    setContent(content) {
        const value = content;
        this.setValue(value);
    }
    didMount() {
        this.onBlur(this.blurHandler);
    }
    willUnmount() {
        this.offBlur(this.blurHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5sZXQgY291bnQgPSAwO1xuXG5jbGFzcyBDb250ZW50VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coYmx1ciwgY291bnQrKylcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50O1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQmx1cih0aGlzLmJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQmx1cih0aGlzLmJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldENvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBmb2N1c0NvbnRlbnRUZXh0YXJlYSA9IHRoaXMuZm9jdXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHNldENvbnRlbnQsXG4gICAgICBmb2N1c0NvbnRlbnRUZXh0YXJlYVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb250ZW50XCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb250ZW50VGV4dGFyZWEpYFxuXG4gIGhlaWdodDogNjRyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb3VudCIsIkNvbnRlbnRUZXh0YXJlYSIsIlRleHRhcmVhIiwiYmx1ckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiYmx1ciIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRWYWx1ZSIsImRpZE1vdW50Iiwib25CbHVyIiwid2lsbFVubW91bnQiLCJvZmZCbHVyIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJmb2N1c0NvbnRlbnRUZXh0YXJlYSIsImZvY3VzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvREE7OztlQUFBOzs7c0VBbERzQjtpRUFFRDs7Ozs7O0FBRXJCLElBQUlBLFFBQVE7QUFFWixNQUFNQyx3QkFBd0JDLGlCQUFRO0lBQ3BDQyxjQUFjLENBQUNDLE9BQU9DO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUNDLE1BQU1SO0lBQ3BCLEVBQUM7SUFFRFMsYUFBYTtRQUNYLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxVQUFVRixPQUFPLEdBQUc7UUFFMUIsT0FBT0U7SUFDVDtJQUVBQyxXQUFXRCxPQUFPLEVBQUU7UUFDbEIsTUFBTUYsUUFBUUU7UUFFZCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7SUFDaEI7SUFFQUssV0FBVztRQUNULElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2IsV0FBVztJQUM5QjtJQUVBYyxjQUFjO1FBQ1osSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDZixXQUFXO0lBQy9CO0lBRUFnQixnQkFBZ0I7UUFDZCxNQUFNVixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDVyxJQUFJLENBQUMsSUFBSSxHQUN0Q1AsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDdENDLHVCQUF1QixJQUFJLENBQUNDLEtBQUssQ0FBQ0YsSUFBSSxDQUFDLElBQUk7UUFFakQsT0FBUTtZQUNOWDtZQUNBSTtZQUNBUTtRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN6QixnQkFBZ0IsQ0FBQzs7OztBQUkxQyxDQUFDIn0=