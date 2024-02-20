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
var _easy = require("easy");
var _necessary = require("necessary");
var _highmarkgrammars = require("highmark-grammars");
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, tokenContentFromToken = _highmarkgrammars.tokenUtilities.tokenContentFromToken, mountElement = _easy.elementMixins.mountElement, unmountElement = _easy.elementMixins.unmountElement;
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
                var content = _constants.EMPTY_STRING;
                var tokens = context.tokens;
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), firstChildNode = first(childNodes), lastChildNodeFirstSignificantToken = lastChildNode.getFirstSignificantToken(), firstChildNodeLastSignificantToken = firstChildNode.getLastSignificantToken(), lastChildNodeFirstSignificantTokenIndex = tokens.indexOf(lastChildNodeFirstSignificantToken), firstChildNodeLastSignificantTokenIndex = tokens.indexOf(firstChildNodeLastSignificantToken), start = firstChildNodeLastSignificantTokenIndex + 1, end = lastChildNodeFirstSignificantTokenIndex - 1; ///
                tokens = tokens.slice(start, end); ///
                tokens.forEach(function(token) {
                    var tokenContent = tokenContentFromToken(token);
                    content += tokenContent;
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudE1peGlucyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHRva2VuVXRpbGl0aWVzLCBNYXJrZG93bk5vZGUgfSBmcm9tIFwiaGlnaG1hcmstZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZyBmcm9tIFwiLi4vLi4vYmxvY2tMaXN0aW5nXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRva2VuQ29udGVudEZyb21Ub2tlbiB9ID0gdG9rZW5VdGlsaXRpZXMsXG4gICAgICB7IG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSA9IGVsZW1lbnRNaXhpbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY29uZmlndXJhdGlvbiA9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IEJsb2NrTGlzdGluZy5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGJsb2NrTGlzdGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgc3RhcnQgPSBmaXJzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICAgIGVuZCA9IGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAtIDE7ICAvLy9cblxuICAgIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnQgPSB0b2tlbkNvbnRlbnRGcm9tVG9rZW4odG9rZW4pO1xuXG4gICAgICBjb250ZW50ICs9IHRva2VuQ29udGVudDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlLmdldExhbmd1YWdlKCk7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBnZXRCbG9ja0xpc3RpbmcoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fLCAvLy9cbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBlbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBibG9ja0xpc3Rpbmc7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSB0aGlzLmdldEJsb2NrTGlzdGluZygpLFxuICAgICAgICAgIGVsZW1lbnQgPSBibG9ja0xpc3Rpbmc7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKSxcbiAgICAgICAgICBlbGVtZW50ID0gYmxvY2tMaXN0aW5nOyAvLy9cblxuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsInRva2VuQ29udGVudEZyb21Ub2tlbiIsInRva2VuVXRpbGl0aWVzIiwibW91bnRFbGVtZW50IiwiZWxlbWVudE1peGlucyIsInVubW91bnRFbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRleHQiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb25maWd1cmF0aW9uIiwiYmxvY2tMaXN0aW5nIiwiQmxvY2tMaXN0aW5nIiwiZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiRU1QVFlfU1RSSU5HIiwidG9rZW5zIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsYXN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJsYXN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJmb3JFYWNoIiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSIsImdldEJsb2NrTGlzdGluZyIsImVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O29CQVpTO3lCQUNDO2dDQUNjO21FQUVwQjt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQyxNQUNULEFBQUVDLHdCQUEwQkMsZ0NBQWMsQ0FBeENELHVCQUNBRSxlQUFpQ0MsbUJBQWEsQ0FBOUNELGNBQWNFLGlCQUFtQkQsbUJBQWEsQ0FBaENDO0FBRVAsSUFBQSxBQUFNUix5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CUyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0osVUFDMUJLLGdCQUFlO29CQUNiSixVQUFBQTtnQkFDRixHQUNBSyxlQUFlQyxxQkFBWSxDQUFDQywyQkFBMkIsQ0FBQ0wsU0FBU0UsZ0JBQ2pFSSxhQUFhSCxhQUFhSSxhQUFhO2dCQUU3QyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0JBRW5CLE9BQU9BO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osT0FBTztnQkFDaEIsSUFBSUcsVUFBVVMsdUJBQVk7Z0JBRTFCLElBQUksQUFBRUMsU0FBV2IsUUFBWGE7Z0JBRU4sSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQnZCLEtBQUtxQixhQUNyQkcsaUJBQWlCMUIsTUFBTXVCLGFBQ3ZCSSxxQ0FBcUNGLGNBQWNHLHdCQUF3QixJQUMzRUMscUNBQXFDSCxlQUFlSSx1QkFBdUIsSUFDM0VDLDBDQUEwQ1QsT0FBT1UsT0FBTyxDQUFDTCxxQ0FDekRNLDBDQUEwQ1gsT0FBT1UsT0FBTyxDQUFDSCxxQ0FDekRLLFFBQVFELDBDQUEwQyxHQUNsREUsTUFBTUosMENBQTBDLEdBQUksR0FBRztnQkFFN0RULFNBQVNBLE9BQU9jLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO2dCQUV2Q2IsT0FBT2UsT0FBTyxDQUFDLFNBQUNDO29CQUNkLElBQU1DLGVBQWVwQyxzQkFBc0JtQztvQkFFM0MxQixXQUFXMkI7Z0JBQ2I7Z0JBRUEsT0FBTzNCO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVksYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JFLGlCQUFpQjFCLE1BQU11QixhQUN2QmlCLGdDQUFnQ2QsZ0JBQ2hDaEIsV0FBVzhCLDhCQUE4QjdCLFdBQVc7Z0JBRTFELE9BQU9EO1lBQ1Q7OztZQUVBK0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU12QixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQnVCLFVBQVV4QixXQUFXeUIsV0FBVyxFQUNoQzVCLGVBQWUyQixTQUFTLEdBQUc7Z0JBRWpDLE9BQU8zQjtZQUNUOzs7WUFFQTZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNN0IsZUFBZSxJQUFJLENBQUMwQixlQUFlLElBQ25DQyxVQUFVM0IsY0FBYyxHQUFHO2dCQUVqQ1YsYUFBYXFDO1lBQ2Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTlCLGVBQWUsSUFBSSxDQUFDMEIsZUFBZSxJQUNuQ0MsVUFBVTNCLGNBQWMsR0FBRztnQkFFakNSLGVBQWVtQztZQUNqQjs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRXhCLFVBQVU7Z0JBQUksT0FBT3lCLDhCQUFZLENBQUNGLHlCQUF5QixDQXhFbkYvQywwQkF3RThHZ0QsVUFBVXhCO1lBQWE7OztZQUVqSjBCLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0YsUUFBUSxFQUFFeEIsVUFBVSxFQUFFMkIsVUFBVTtnQkFBSSxPQUFPRiw4QkFBWSxDQUFDQyxtQ0FBbUMsQ0ExRW5IbEQsMEJBMEU4SWdELFVBQVV4QixZQUFZMkI7WUFBYTs7O1dBMUVqTG5EO0VBQWlDaUQsOEJBQVkifQ==