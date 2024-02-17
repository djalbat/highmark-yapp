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
function add(node) {
    var domElement = this.getDOMElement(), nodeDOMEElement = node.getDOMElement();
    domElement.insertBefore(nodeDOMEElement, null); ///
}
function remove(node) {
    var domElement = this.getDOMElement();
    if (node) {
        var nodeDOMEElement = node.getDOMElement();
        domElement.removeChild(nodeDOMEElement);
    } else {
        domElement.remove();
    }
}
function getDescendantNodes() {
    var descendantNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var domElement = this.getDOMElement();
    if (domElement !== null) {
        var childNodes = this.getChildNodes(), descendantNode = this; ///
        descendantNodes.push(descendantNode);
        childNodes.forEach(function(childNode) {
            childNode.getDescendantNodes(descendantNodes);
        });
    }
    return descendantNodes;
}
function getDescendantElements() {
    var descendantNodes = this.getDescendantNodes(), descendantElements = descendantNodes; ///
    return descendantElements;
}
var elementMixins = {
    add: add,
    remove: remove,
    getDescendantNodes: getDescendantNodes,
    getDescendantElements: getDescendantElements
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYWRkKG5vZGUpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBub2RlRE9NRUVsZW1lbnQgPSBub2RlLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50Lmluc2VydEJlZm9yZShub2RlRE9NRUVsZW1lbnQsIG51bGwpOyAvLy9cbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5vZGUpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIGlmIChub2RlKSB7XG4gICAgY29uc3Qgbm9kZURPTUVFbGVtZW50ID0gbm9kZS5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKG5vZGVET01FRWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzID0gW10pIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRlc2NlbmRhbnROb2RlID0gdGhpczsgLy8vXG5cbiAgICBkZXNjZW5kYW50Tm9kZXMucHVzaChkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmdldERlc2NlbmRhbnROb2RlcyhkZXNjZW5kYW50Tm9kZXMpO1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZGVzY2VuZGFudE5vZGVzO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50RWxlbWVudHMoKSB7XG4gIGNvbnN0IGRlc2NlbmRhbnROb2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzKCksXG4gICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGRlc2NlbmRhbnROb2RlczsgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbn1cblxuY29uc3QgZWxlbWVudE1peGlucyA9IHtcbiAgYWRkLFxuICByZW1vdmUsXG4gIGdldERlc2NlbmRhbnROb2RlcyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbImFkZCIsIm5vZGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsIm5vZGVET01FRWxlbWVudCIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkZXNjZW5kYW50Tm9kZSIsInB1c2giLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0RBOzs7ZUFBQTs7O0FBbERBLFNBQVNBLElBQUlDLElBQUk7SUFDZixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCSCxLQUFLRSxhQUFhO0lBRTFDRCxXQUFXRyxZQUFZLENBQUNELGlCQUFpQixPQUFPLEdBQUc7QUFDckQ7QUFFQSxTQUFTRSxPQUFPTCxJQUFJO0lBQ2xCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDLElBQUlGLE1BQU07UUFDUixJQUFNRyxrQkFBa0JILEtBQUtFLGFBQWE7UUFFMUNELFdBQVdLLFdBQVcsQ0FBQ0g7SUFDekIsT0FBTztRQUNMRixXQUFXSSxNQUFNO0lBQ25CO0FBQ0Y7QUFFQSxTQUFTRTtRQUFtQkMsa0JBQUFBLGlFQUFrQixFQUFFO0lBQzlDLElBQU1QLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDLElBQUlELGVBQWUsTUFBTTtRQUN2QixJQUFNUSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsaUJBQWlCLElBQUksRUFBRSxHQUFHO1FBRWhDSCxnQkFBZ0JJLElBQUksQ0FBQ0Q7UUFFckJGLFdBQVdJLE9BQU8sQ0FBQyxTQUFDQztZQUNsQkEsVUFBVVAsa0JBQWtCLENBQUNDO1FBQy9CO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU087SUFDUCxJQUFNUCxrQkFBa0IsSUFBSSxDQUFDRCxrQkFBa0IsSUFDekNTLHFCQUFxQlIsaUJBQWlCLEdBQUc7SUFFL0MsT0FBT1E7QUFDVDtBQUVBLElBQU1DLGdCQUFnQjtJQUNwQmxCLEtBQUFBO0lBQ0FNLFFBQUFBO0lBQ0FFLG9CQUFBQTtJQUNBUSx1QkFBQUE7QUFDRjtJQUVBLFdBQWVFIn0=