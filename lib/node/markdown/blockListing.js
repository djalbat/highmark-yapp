"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingMarkdownNode;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _necessary = require("necessary");
var _easy = require("easy");
var _blockListing = /*#__PURE__*/ _interop_require_default(require("../../blockListing"));
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first, mountElement = _easy.elementUtilities.mountElement, unmountElement = _easy.elementUtilities.unmountElement;
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockListingMarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
        {
            key: "getElement",
            value: function getElement() {
                var domElement = this.getDOMElement(), element = domElement.__element__; ///
                return element;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var className = this.className(context), language = className, content = this.content(context), configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockListingStartMarkdownNode = firstChildNode, className = blockListingStartMarkdownNode.className(context);
                return className;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length, firstIndex = 0, lastIndex = childNodesLength - 1;
                childNodes.forEach(function(childNode, index) {
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
            key: "didMount",
            value: function didMount() {
                var element = this.getElement();
                mountElement(element);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var element = this.getElement();
                unmountElement(element);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _highmarkmarkdown.MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkmarkdown.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGVsZW1lbnRVdGlsaXRpZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nIGZyb20gXCIuLi8uLi9ibG9ja0xpc3RpbmdcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0RWxlbWVudCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X187IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGNsYXNzTmFtZSwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjb25maWd1cmF0aW9uID17XG4gICAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gQmxvY2tMaXN0aW5nLmZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gYmxvY2tMaXN0aW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXG4gICAgICAgICAgbGFzdEluZGV4ID0gY2hpbGROb2Rlc0xlbmd0aCAtIDE7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICgoaW5kZXggIT09IGZpcnN0SW5kZXgpICYmIChpbmRleCAhPT0gbGFzdEluZGV4KSkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVDb250ZW50ID0gY2hpbGROb2RlLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHtjaGlsZE5vZGVDb250ZW50fWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXG4kLywgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuXG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtb3VudEVsZW1lbnQiLCJlbGVtZW50VXRpbGl0aWVzIiwidW5tb3VudEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJlbGVtZW50IiwiX19lbGVtZW50X18iLCJjcmVhdGVET01FbGVtZW50IiwiY29udGV4dCIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwiY29udGVudCIsImNvbmZpZ3VyYXRpb24iLCJibG9ja0xpc3RpbmciLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJzZXRET01FbGVtZW50IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlIiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVDb250ZW50IiwicmVwbGFjZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7Z0NBWFE7eUJBQ0U7b0JBQ0U7bUVBRVI7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDQUUsZUFBaUNDLHNCQUFnQixDQUFqREQsY0FBY0UsaUJBQW1CRCxzQkFBZ0IsQ0FBbkNDO0FBRVAsSUFBQSxBQUFNTCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLFVBQVVGLFdBQVdHLFdBQVcsRUFBRSxHQUFHO2dCQUUzQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBTUMsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0QsVUFDM0JFLFdBQVdELFdBQ1hFLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNILFVBQ3ZCSSxnQkFBZTtvQkFDYkYsVUFBQUE7Z0JBQ0YsR0FDQUcsZUFBZUMscUJBQVksQ0FBQ0MsMkJBQTJCLENBQUNKLFNBQVNDLGdCQUNqRVQsYUFBYVUsYUFBYVQsYUFBYTtnQkFFN0MsSUFBSSxDQUFDWSxhQUFhLENBQUNiO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVELE9BQU87Z0JBQ2YsSUFBTVMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQnRCLE1BQU1vQixhQUN2QkcsZ0NBQWdDRCxnQkFDaENWLFlBQVlXLDhCQUE4QlgsU0FBUyxDQUFDRDtnQkFFMUQsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSCxPQUFPO2dCQUNiLElBQUlHLFVBQVVVLHVCQUFZO2dCQUUxQixJQUFNSixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkksbUJBQW1CTCxXQUFXTSxNQUFNLEVBQ3BDQyxhQUFhLEdBQ2JDLFlBQVlILG1CQUFtQjtnQkFFckNMLFdBQVdTLE9BQU8sQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBSSxBQUFDQSxVQUFVSixjQUFnQkksVUFBVUgsV0FBWTt3QkFDbkQsSUFBTUksbUJBQW1CRixVQUFVaEIsT0FBTyxDQUFDSDt3QkFFM0NHLFVBQVUsQUFBQyxHQUFZa0IsT0FBVmxCLFNBQTJCLE9BQWpCa0I7b0JBQ3pCO2dCQUNGO2dCQUVBbEIsVUFBVUEsUUFBUW1CLE9BQU8sQ0FBQyxPQUFPVCx1QkFBWTtnQkFFN0MsT0FBT1Y7WUFDVDs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTFCLFVBQVUsSUFBSSxDQUFDSCxVQUFVO2dCQUUvQkgsYUFBYU07WUFDZjs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTNCLFVBQVUsSUFBSSxDQUFDSCxVQUFVO2dCQUUvQkQsZUFBZUk7WUFDakI7Ozs7WUFFTzRCLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFakIsVUFBVSxFQUFFa0IsT0FBTztnQkFBSSxPQUFPQyw4QkFBWSxDQUFDSCxnQ0FBZ0MsQ0FqRTFHckMsMEJBaUVxSXNDLFVBQVVqQixZQUFZa0I7WUFBVTs7O1dBakVyS3ZDO0VBQWlDd0MsOEJBQVkifQ==