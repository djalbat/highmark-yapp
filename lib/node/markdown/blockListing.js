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
var _highmarkgrammars = require("highmark-grammars");
var _easy = require("easy");
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first, mountElement = _easy.elementMixins.mountElement, unmountElement = _easy.elementMixins.unmountElement;
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
                var language = this.getLanguage(), content = this.getContent(context), configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockTextMarkdownNode = firstChildNode, content = blockTextMarkdownNode.getContent();
                return content;
            }
        },
        {
            key: "getLanguage",
            value: function getLanguage() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockListingStartMarkdownNode = firstChildNode, language = blockListingStartMarkdownNode.getLanguage();
                return language;
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
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _highmarkgrammars.MarkdownNode.fromRuleNameAndChildNodes(BlockListingMarkdownNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _highmarkgrammars.MarkdownNode.fromRuleNameChildNodesAndPrecedence(BlockListingMarkdownNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkgrammars.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBlbGVtZW50TWl4aW5zIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nIGZyb20gXCIuLi8uLi9ibG9ja0xpc3RpbmdcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSA9IGVsZW1lbnRNaXhpbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY29uZmlndXJhdGlvbiA9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IEJsb2NrTGlzdGluZy5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGJsb2NrTGlzdGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgYmxvY2tUZXh0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBibG9ja1RleHRNYXJrZG93bk5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRMYW5ndWFnZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgIGxhbmd1YWdlID0gYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUuZ2V0TGFuZ3VhZ2UoKTtcblxuICAgIHJldHVybiBsYW5ndWFnZTtcbiAgfVxuXG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X18sIC8vL1xuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCksXG4gICAgICAgICAgZWxlbWVudCA9IGJsb2NrTGlzdGluZzsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSB0aGlzLmdldEJsb2NrTGlzdGluZygpLFxuICAgICAgICAgIGVsZW1lbnQgPSBibG9ja0xpc3Rpbmc7IC8vL1xuXG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtb3VudEVsZW1lbnQiLCJlbGVtZW50TWl4aW5zIiwidW5tb3VudEVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGV4dCIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbmZpZ3VyYXRpb24iLCJibG9ja0xpc3RpbmciLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiYmxvY2tUZXh0TWFya2Rvd25Ob2RlIiwiYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJnZXRCbG9ja0xpc3RpbmciLCJlbGVtZW50IiwiX19lbGVtZW50X18iLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OztnQ0FUUTtvQkFDQzt5QkFDQzttRUFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNBRSxlQUFpQ0MsbUJBQWEsQ0FBOUNELGNBQWNFLGlCQUFtQkQsbUJBQWEsQ0FBaENDO0FBRVAsSUFBQSxBQUFNTCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CTSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0osVUFDMUJLLGdCQUFlO29CQUNiSixVQUFBQTtnQkFDRixHQUNBSyxlQUFlQyxxQkFBWSxDQUFDQywyQkFBMkIsQ0FBQ0wsU0FBU0UsZ0JBQ2pFSSxhQUFhSCxhQUFhSSxhQUFhO2dCQUU3QyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0JBRW5CLE9BQU9BO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVEsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQnBCLE1BQU1rQixhQUN2Qkcsd0JBQXdCRCxnQkFDeEJYLFVBQVVZLHNCQUFzQlgsVUFBVTtnQkFFaEQsT0FBT0Q7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsaUJBQWlCcEIsTUFBTWtCLGFBQ3ZCSSxnQ0FBZ0NGLGdCQUNoQ2IsV0FBV2UsOEJBQThCZCxXQUFXO2dCQUUxRCxPQUFPRDtZQUNUOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlEsVUFBVVQsV0FBV1UsV0FBVyxFQUNoQ2IsZUFBZVksU0FBUyxHQUFHO2dCQUVqQyxPQUFPWjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLGVBQWUsSUFBSSxDQUFDVyxlQUFlLElBQ25DQyxVQUFVWixjQUFjLEdBQUc7Z0JBRWpDVixhQUFhc0I7WUFDZjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNZixlQUFlLElBQUksQ0FBQ1csZUFBZSxJQUNuQ0MsVUFBVVosY0FBYyxHQUFHO2dCQUVqQ1IsZUFBZW9CO1lBQ2pCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFWCxVQUFVO2dCQUFJLE9BQU9ZLDhCQUFZLENBQUNGLHlCQUF5QixDQXZEbkY3QiwwQkF1RDhHOEIsVUFBVVg7WUFBYTs7O1lBRWpKYSxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0NGLFFBQVEsRUFBRVgsVUFBVSxFQUFFYyxVQUFVO2dCQUFJLE9BQU9GLDhCQUFZLENBQUNDLG1DQUFtQyxDQXpEbkhoQywwQkF5RDhJOEIsVUFBVVgsWUFBWWM7WUFBYTs7O1dBekRqTGpDO0VBQWlDK0IsOEJBQVkifQ==