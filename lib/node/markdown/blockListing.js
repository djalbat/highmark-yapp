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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var first = _necessary.arrayUtilities.first;
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockListingMarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
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
            key: "className",
            value: function className(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockListingStartMarkdownNode = firstChildNode, className = blockListingStartMarkdownNode.className(context);
                return className;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                _get(_get_prototype_of(BlockListingMarkdownNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var blockListing = this.getBlockListing();
                blockListing.didMount();
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var blockListing = this.getBlockListing();
                blockListing.willUnmount();
                _get(_get_prototype_of(BlockListingMarkdownNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _highmarkmarkdown.MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkmarkdown.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZyBmcm9tIFwiLi4vLi4vYmxvY2tMaXN0aW5nXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBfX2VsZW1lbnRfXyB9ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gX19lbGVtZW50X187IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzTGVuZ3RoIC0gMTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKChpbmRleCAhPT0gZmlyc3RJbmRleCkgJiYgKGluZGV4ICE9PSBsYXN0SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUNvbnRlbnQgPSBjaGlsZE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke2NoaWxkTm9kZUNvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcbiQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIGJsb2NrTGlzdGluZy5kaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIGJsb2NrTGlzdGluZy53aWxsVW5tb3VudCgpO1xuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBjbGFzc05hbWUsIC8vL1xuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPXtcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBCbG9ja0xpc3RpbmcuZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBibG9ja0xpc3RpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRCbG9ja0xpc3RpbmciLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiYmxvY2tMaXN0aW5nIiwiY29udGVudCIsImNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2RlQ29udGVudCIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJmaXJzdENoaWxkTm9kZSIsImJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkaWRNb3VudCIsInVubW91bnQiLCJ3aWxsVW5tb3VudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJsYW5ndWFnZSIsImNvbmZpZ3VyYXRpb24iLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7Z0NBVFE7eUJBQ0U7bUVBRU47eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CLEFBQUVDLGNBQWdCRixXQUFoQkUsYUFDRkMsZUFBZUQsYUFBYSxHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUQsVUFBVUUsdUJBQVk7Z0JBRTFCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFdBQVdHLE1BQU0sRUFDcENDLGFBQWEsR0FDYkMsWUFBWUgsbUJBQW1CO2dCQUVyQ0YsV0FBV00sT0FBTyxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFJLEFBQUNBLFVBQVVKLGNBQWdCSSxVQUFVSCxXQUFZO3dCQUNuRCxJQUFNSSxtQkFBbUJGLFVBQVVWLE9BQU8sQ0FBQ0M7d0JBRTNDRCxVQUFVLEFBQUMsR0FBWVksT0FBVlosU0FBMkIsT0FBakJZO29CQUN6QjtnQkFDRjtnQkFFQVosVUFBVUEsUUFBUWEsT0FBTyxDQUFDLE9BQU9YLHVCQUFZO2dCQUU3QyxPQUFPRjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVViLE9BQU87Z0JBQ2YsSUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JXLGlCQUFpQnRCLE1BQU1VLGFBQ3ZCYSxnQ0FBZ0NELGdCQUNoQ0QsWUFBWUUsOEJBQThCRixTQUFTLENBQUNiO2dCQUUxRCxPQUFPYTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRWxCLE9BQU87Z0JBQ2hELHVCQXhDaUJULHFDQXdDWHlCLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQmxCO2dCQUVqRCxJQUFNRixlQUFlLElBQUksQ0FBQ0osZUFBZTtnQkFFekNJLGFBQWFxQixRQUFRO1lBQ3ZCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFILGdCQUFnQixFQUFFakIsT0FBTztnQkFDL0IsSUFBTUYsZUFBZSxJQUFJLENBQUNKLGVBQWU7Z0JBRXpDSSxhQUFhdUIsV0FBVztnQkFFeEIsdUJBcERpQjlCLHFDQW9EWDZCLFdBQU4sSUFBSyxhQUFTSCxrQkFBa0JqQjtZQUNsQzs7O1lBRUFzQixLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCdEIsT0FBTztnQkFDdEIsSUFBTUQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJhLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNiLFVBQzNCdUIsV0FBV1YsV0FDWFcsZ0JBQWU7b0JBQ2JELFVBQUFBO2dCQUNGLEdBQ0F6QixlQUFlMkIscUJBQVksQ0FBQ0MsMkJBQTJCLENBQUMzQixTQUFTeUIsZ0JBQ2pFN0IsYUFBYUcsYUFBYUYsYUFBYTtnQkFFN0MsT0FBT0Q7WUFDVDs7OztZQUVPZ0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUUxQixVQUFVLEVBQUUyQixPQUFPO2dCQUFJLE9BQU9DLDhCQUFZLENBQUNILGdDQUFnQyxDQXBFMUdwQywwQkFvRXFJcUMsVUFBVTFCLFlBQVkyQjtZQUFVOzs7V0FwRXJLdEM7RUFBaUN1Qyw4QkFBWSJ9