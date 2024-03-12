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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, mountElement = _easy.elementUtilities.mountElement, unmountElement = _easy.elementUtilities.unmountElement;
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockListingMarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var className = this.getClassName(), language = className, content = this.getContent(context), configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getContent",
            value: function getContent(context) {
                var content;
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), blockTextMarkdownNode = secondChildNode; ///
                content = blockTextMarkdownNode.getContent(context);
                content = content.slice(0, -1);
                return content;
            }
        },
        {
            key: "getClassName",
            value: function getClassName() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockListingStartMarkdownNode = firstChildNode, className = blockListingStartMarkdownNode.getClassName();
                return className;
            }
        },
        {
            key: "getBlockListing",
            value: function getBlockListing() {
                var domElement = this.getDOMElement(), element = domElement.__element__, blockListing = element; ///
                return blockListing;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var blockListing = this.getBlockListing(), element = blockListing; ///
                mountElement(element);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var blockListing = this.getBlockListing(), element = blockListing; ///
                unmountElement(element);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _highmarkmarkdown.MarkdownNode.fromRuleNameChildNodesAndAmbiguous(BlockListingMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkmarkdown.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGVsZW1lbnRVdGlsaXRpZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nIGZyb20gXCIuLi8uLi9ibG9ja0xpc3RpbmdcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGNsYXNzTmFtZSwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjb25maWd1cmF0aW9uID17XG4gICAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gQmxvY2tMaXN0aW5nLmZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gYmxvY2tMaXN0aW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICBjb250ZW50ID0gYmxvY2tUZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCk7XG5cbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgwLCAtMSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlLmdldENsYXNzTmFtZSgpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X18sIC8vL1xuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCksXG4gICAgICAgICAgZWxlbWVudCA9IGJsb2NrTGlzdGluZzsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSB0aGlzLmdldEJsb2NrTGlzdGluZygpLFxuICAgICAgICAgIGVsZW1lbnQgPSBibG9ja0xpc3Rpbmc7IC8vL1xuXG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsIm1vdW50RWxlbWVudCIsImVsZW1lbnRVdGlsaXRpZXMiLCJ1bm1vdW50RWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwiY2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwibGFuZ3VhZ2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbmZpZ3VyYXRpb24iLCJibG9ja0xpc3RpbmciLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImJsb2NrVGV4dE1hcmtkb3duTm9kZSIsInNsaWNlIiwiZmlyc3RDaGlsZE5vZGUiLCJibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSIsImdldEJsb2NrTGlzdGluZyIsImVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O2dDQVRRO3lCQUNFO29CQUNFO21FQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDLFFBQ1BDLGVBQWlDQyxzQkFBZ0IsQ0FBakRELGNBQWNFLGlCQUFtQkQsc0JBQWdCLENBQW5DQztBQUVQLElBQUEsQUFBTU4seUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQk8sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLFdBQVdGLFdBQ1hHLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNMLFVBQzFCTSxnQkFBZTtvQkFDYkgsVUFBQUE7Z0JBQ0YsR0FDQUksZUFBZUMscUJBQVksQ0FBQ0MsMkJBQTJCLENBQUNMLFNBQVNFLGdCQUNqRUksYUFBYUgsYUFBYUksYUFBYTtnQkFFN0MsSUFBSSxDQUFDQyxhQUFhLENBQUNGO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdMLE9BQU87Z0JBQ2hCLElBQUlJO2dCQUVKLElBQU1TLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JwQixPQUFPa0IsYUFDekJHLHdCQUF3QkQsaUJBQWlCLEdBQUc7Z0JBRWxEWCxVQUFVWSxzQkFBc0JYLFVBQVUsQ0FBQ0w7Z0JBRTNDSSxVQUFVQSxRQUFRYSxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUU1QixPQUFPYjtZQUNUOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1XLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CSSxpQkFBaUJ6QixNQUFNb0IsYUFDdkJNLGdDQUFnQ0QsZ0JBQ2hDakIsWUFBWWtCLDhCQUE4QmpCLFlBQVk7Z0JBRTVELE9BQU9EO1lBQ1Q7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CVSxVQUFVWCxXQUFXWSxXQUFXLEVBQ2hDZixlQUFlYyxTQUFTLEdBQUc7Z0JBRWpDLE9BQU9kO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1oQixlQUFlLElBQUksQ0FBQ2EsZUFBZSxJQUNuQ0MsVUFBVWQsY0FBYyxHQUFHO2dCQUVqQ1gsYUFBYXlCO1lBQ2Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpCLGVBQWUsSUFBSSxDQUFDYSxlQUFlLElBQ25DQyxVQUFVZCxjQUFjLEdBQUc7Z0JBRWpDVCxlQUFldUI7WUFDakI7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUViLFVBQVUsRUFBRWMsU0FBUztnQkFBSSxPQUFPQyw4QkFBWSxDQUFDSCxrQ0FBa0MsQ0E3RGhIakMsMEJBNkQySWtDLFVBQVViLFlBQVljO1lBQVk7OztXQTdEN0tuQztFQUFpQ29DLDhCQUFZIn0=