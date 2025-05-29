"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHTMLNode;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _blockListing = /*#__PURE__*/ _interop_require_default(require("../../../blockListing"));
var _constants = require("../../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BlockListingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(BlockListingHTMLNode, HTMLNode);
    function BlockListingHTMLNode() {
        _class_call_check(this, BlockListingHTMLNode);
        return _call_super(this, BlockListingHTMLNode, arguments);
    }
    _create_class(BlockListingHTMLNode, [
        {
            key: "getBlockListing",
            value: function getBlockListing() {
                var domElement = this.getDOMElement(), __element__ = domElement.__element__, blockListing = __element__; ///
                return blockListing;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                var multiplicity = this.getMultiplicity(), firstIndex = 0, lastIndex = multiplicity - 1;
                this.forEachChildNode(function(childNode, index) {
                    if (index !== firstIndex && index !== lastIndex) {
                        var childNodeContent = childNode.content(context);
                        content = "".concat(content).concat(childNodeContent);
                    }
                });
                content = content.replace(/\n$/, _constants.EMPTY_STRING);
                return content;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.fromFirstChildNode(function(firstChildNode) {
                    var blockListingStartHTMLNode = firstChildNode, className = blockListingStartHTMLNode.className(context);
                    return className;
                });
                return className;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content = this.content(context), className = this.className(context), language = className, configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                return domElement;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _highmarkmarkdown.HTMLNode.fromNothing(BlockListingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _highmarkmarkdown.HTMLNode.fromOuterNode(BlockListingHTMLNode, outerNode);
            }
        }
    ]);
    return BlockListingHTMLNode;
}(_highmarkmarkdown.HTMLNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSFRNTE5vZGUgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZyBmcm9tIFwiLi4vLi4vLi4vYmxvY2tMaXN0aW5nXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBfX2VsZW1lbnRfXyB9ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gX19lbGVtZW50X187IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoKGluZGV4ICE9PSBmaXJzdEluZGV4KSAmJiAoaW5kZXggIT09IGxhc3RJbmRleCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlQ29udGVudCA9IGNoaWxkTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7Y2hpbGROb2RlQ29udGVudH1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFxuJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBibG9ja0xpc3RpbmdTdGFydEhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYmxvY2tMaXN0aW5nU3RhcnRIVE1MTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGNsYXNzTmFtZSwgLy8vXG4gICAgICAgICAgY29uZmlndXJhdGlvbiA9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IEJsb2NrTGlzdGluZy5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGJsb2NrTGlzdGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEJsb2NrTGlzdGluZ0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShCbG9ja0xpc3RpbmdIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiZ2V0QmxvY2tMaXN0aW5nIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImJsb2NrTGlzdGluZyIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsImNoaWxkTm9kZUNvbnRlbnQiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJibG9ja0xpc3RpbmdTdGFydEhUTUxOb2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsImxhbmd1YWdlIiwiY29uZmlndXJhdGlvbiIsIkJsb2NrTGlzdGluZyIsImZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztnQ0FOSTttRUFFQTt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0IsQUFBRUMsY0FBZ0JGLFdBQWhCRSxhQUNGQyxlQUFlRCxhQUFhLEdBQUc7Z0JBRXJDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJRCxVQUFVRSx1QkFBWTtnQkFFMUIsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGFBQWEsR0FDYkMsWUFBWUgsZUFBZTtnQkFFakMsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxTQUFDQyxXQUFXQztvQkFDaEMsSUFBSSxBQUFDQSxVQUFVSixjQUFnQkksVUFBVUgsV0FBWTt3QkFDbkQsSUFBTUksbUJBQW1CRixVQUFVUixPQUFPLENBQUNDO3dCQUUzQ0QsVUFBVSxBQUFDLEdBQVlVLE9BQVZWLFNBQTJCLE9BQWpCVTtvQkFDekI7Z0JBQ0Y7Z0JBRUFWLFVBQVVBLFFBQVFXLE9BQU8sQ0FBQyxPQUFPVCx1QkFBWTtnQkFFN0MsT0FBT0Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVWCxPQUFPO2dCQUNmLElBQU1XLFlBQVksSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDekMsSUFBTUMsNEJBQTRCRCxnQkFDNUJGLFlBQVlHLDBCQUEwQkgsU0FBUyxDQUFDWDtvQkFFdEQsT0FBT1c7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJmLE9BQU87Z0JBQ3RCLElBQU1ELFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFVBQ3ZCVyxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDWCxVQUMzQmdCLFdBQVdMLFdBQ1hNLGdCQUFlO29CQUNiRCxVQUFBQTtnQkFDRixHQUNBbEIsZUFBZW9CLHFCQUFZLENBQUNDLDJCQUEyQixDQUFDcEIsU0FBU2tCLGdCQUNqRXRCLGFBQWFHLGFBQWFGLGFBQWE7Z0JBRTdDLE9BQU9EO1lBQ1Q7Ozs7WUFFT3lCLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQywwQkFBUSxDQUFDRCxXQUFXLENBckQvQjNCO1lBcUR1RDs7O1lBRW5FNkIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRiwwQkFBUSxDQUFDQyxhQUFhLENBdkQ1QzdCLHNCQXVEbUU4QjtZQUFZOzs7V0F2RC9FOUI7RUFBNkI0QiwwQkFBUSJ9