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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, mountElement = _easy.elementMixins.mountElement, unmountElement = _easy.elementMixins.unmountElement;
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
            value: function getContent(context) {
                var content;
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), blockTextMarkdownNode = secondChildNode; ///
                content = blockTextMarkdownNode.getContent(context);
                content = content.slice(0, -1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBlbGVtZW50TWl4aW5zIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nIGZyb20gXCIuLi8uLi9ibG9ja0xpc3RpbmdcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gPSBlbGVtZW50TWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPXtcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBCbG9ja0xpc3RpbmcuZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBibG9ja0xpc3RpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgYmxvY2tUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlOyAvLy9cblxuICAgIGNvbnRlbnQgPSBibG9ja1RleHRNYXJrZG93bk5vZGUuZ2V0Q29udGVudChjb250ZXh0KTtcblxuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDAsIC0xKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlLmdldExhbmd1YWdlKCk7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBnZXRCbG9ja0xpc3RpbmcoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fLCAvLy9cbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBlbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBibG9ja0xpc3Rpbmc7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSB0aGlzLmdldEJsb2NrTGlzdGluZygpLFxuICAgICAgICAgIGVsZW1lbnQgPSBibG9ja0xpc3Rpbmc7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKSxcbiAgICAgICAgICBlbGVtZW50ID0gYmxvY2tMaXN0aW5nOyAvLy9cblxuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwibW91bnRFbGVtZW50IiwiZWxlbWVudE1peGlucyIsInVubW91bnRFbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRleHQiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb25maWd1cmF0aW9uIiwiYmxvY2tMaXN0aW5nIiwiQmxvY2tMaXN0aW5nIiwiZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJibG9ja1RleHRNYXJrZG93bk5vZGUiLCJzbGljZSIsImZpcnN0Q2hpbGROb2RlIiwiYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJnZXRCbG9ja0xpc3RpbmciLCJlbGVtZW50IiwiX19lbGVtZW50X18iLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OztnQ0FYUTtvQkFDQzt5QkFDQzttRUFFTjt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQyxRQUNQQyxlQUFpQ0MsbUJBQWEsQ0FBOUNELGNBQWNFLGlCQUFtQkQsbUJBQWEsQ0FBaENDO0FBRVAsSUFBQSxBQUFNTix5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CTyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0osVUFDMUJLLGdCQUFlO29CQUNiSixVQUFBQTtnQkFDRixHQUNBSyxlQUFlQyxxQkFBWSxDQUFDQywyQkFBMkIsQ0FBQ0wsU0FBU0UsZ0JBQ2pFSSxhQUFhSCxhQUFhSSxhQUFhO2dCQUU3QyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0JBRW5CLE9BQU9BO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osT0FBTztnQkFDaEIsSUFBSUc7Z0JBRUosSUFBTVMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQm5CLE9BQU9pQixhQUN6Qkcsd0JBQXdCRCxpQkFBaUIsR0FBRztnQkFFbERYLFVBQVVZLHNCQUFzQlgsVUFBVSxDQUFDSjtnQkFFM0NHLFVBQVVBLFFBQVFhLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBRTVCLE9BQU9iO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JJLGlCQUFpQnhCLE1BQU1tQixhQUN2Qk0sZ0NBQWdDRCxnQkFDaENoQixXQUFXaUIsOEJBQThCaEIsV0FBVztnQkFFMUQsT0FBT0Q7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JVLFVBQVVYLFdBQVdZLFdBQVcsRUFDaENmLGVBQWVjLFNBQVMsR0FBRztnQkFFakMsT0FBT2Q7WUFDVDs7O1lBRUFnQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWhCLGVBQWUsSUFBSSxDQUFDYSxlQUFlLElBQ25DQyxVQUFVZCxjQUFjLEdBQUc7Z0JBRWpDVixhQUFhd0I7WUFDZjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsZUFBZSxJQUFJLENBQUNhLGVBQWUsSUFDbkNDLFVBQVVkLGNBQWMsR0FBRztnQkFFakNSLGVBQWVzQjtZQUNqQjs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRWIsVUFBVTtnQkFBSSxPQUFPYyw4QkFBWSxDQUFDRix5QkFBeUIsQ0E1RG5GaEMsMEJBNEQ4R2lDLFVBQVViO1lBQWE7OztZQUVqSmUsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DRixRQUFRLEVBQUViLFVBQVUsRUFBRWdCLFVBQVU7Z0JBQUksT0FBT0YsOEJBQVksQ0FBQ0MsbUNBQW1DLENBOURuSG5DLDBCQThEOElpQyxVQUFVYixZQUFZZ0I7WUFBYTs7O1dBOURqTHBDO0VBQWlDa0MsOEJBQVkifQ==