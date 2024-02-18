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
var _necessary = require("necessary");
var _highmarkgrammar = require("highmark-grammar");
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, tokenContentFromToken = _highmarkgrammar.tokenUtilities.tokenContentFromToken;
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
            value: function createDOMElement(tokens) {
                var language = this.getLanguage(), content = this.getContent(tokens), options = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndOptions(content, options), domElement = blockListing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getContent",
            value: function getContent(tokens) {
                var content = _constants.EMPTY_STRING;
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
                var blockListing = this.getBlockListing();
                blockListing.didMount();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var yapp = this.getBlockListing();
                yapp.willUnmount();
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _highmarkgrammar.MarkdownNode.fromRuleNameAndChildNodes(BlockListingMarkdownNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _highmarkgrammar.MarkdownNode.fromRuleNameChildNodesAndPrecedence(BlockListingMarkdownNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkgrammar.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyB0b2tlblV0aWxpdGllcywgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJcIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZyBmcm9tIFwiLi4vLi4vYmxvY2tMaXN0aW5nXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRva2VuQ29udGVudEZyb21Ub2tlbiB9ID0gdG9rZW5VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNyZWF0ZURPTUVsZW1lbnQodG9rZW5zKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCh0b2tlbnMpLFxuICAgICAgICAgIG9wdGlvbnMgPXtcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBCbG9ja0xpc3RpbmcuZnJvbUNvbnRlbnRBbmRPcHRpb25zKGNvbnRlbnQsIG9wdGlvbnMpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBibG9ja0xpc3RpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KHRva2Vucykge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgc3RhcnQgPSBmaXJzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxLFxuICAgICAgICAgIGVuZCA9IGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAtIDE7ICAvLy9cblxuICAgIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkNvbnRlbnQgPSB0b2tlbkNvbnRlbnRGcm9tVG9rZW4odG9rZW4pO1xuXG4gICAgICBjb250ZW50ICs9IHRva2VuQ29udGVudDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlLmdldExhbmd1YWdlKCk7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH1cblxuICBnZXRCbG9ja0xpc3RpbmcoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fLCAvLy9cbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBlbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBibG9ja0xpc3Rpbmc7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSB0aGlzLmdldEJsb2NrTGlzdGluZygpO1xuXG4gICAgYmxvY2tMaXN0aW5nLmRpZE1vdW50KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB5YXBwID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIHlhcHAud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJ0b2tlbkNvbnRlbnRGcm9tVG9rZW4iLCJ0b2tlblV0aWxpdGllcyIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0b2tlbnMiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJvcHRpb25zIiwiYmxvY2tMaXN0aW5nIiwiQmxvY2tMaXN0aW5nIiwiZnJvbUNvbnRlbnRBbmRPcHRpb25zIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsYXN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJsYXN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJmb3JFYWNoIiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZSIsImdldEJsb2NrTGlzdGluZyIsImVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJ5YXBwIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsrQkFDYzttRUFFcEI7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsUUFBZ0JDLHlCQUFjLENBQTlCRCxPQUFPRSxPQUFTRCx5QkFBYyxDQUF2QkMsTUFDVCxBQUFFQyx3QkFBMEJDLCtCQUFjLENBQXhDRDtBQUVPLElBQUEsQUFBTUoseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTtnQkFDckIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNKLFNBQzFCSyxVQUFTO29CQUNQSixVQUFBQTtnQkFDRixHQUNBSyxlQUFlQyxxQkFBWSxDQUFDQyxxQkFBcUIsQ0FBQ0wsU0FBU0UsVUFDM0RJLGFBQWFILGFBQWFJLGFBQWE7Z0JBRTdDLElBQUksQ0FBQ0MsYUFBYSxDQUFDRjtnQkFFbkIsT0FBT0E7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSixNQUFNO2dCQUNmLElBQUlHLFVBQVVTLHVCQUFZO2dCQUUxQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZ0JBQWdCbkIsS0FBS2lCLGFBQ3JCRyxpQkFBaUJ0QixNQUFNbUIsYUFDdkJJLHFDQUFxQ0YsY0FBY0csd0JBQXdCLElBQzNFQyxxQ0FBcUNILGVBQWVJLHVCQUF1QixJQUMzRUMsMENBQTBDckIsT0FBT3NCLE9BQU8sQ0FBQ0wscUNBQ3pETSwwQ0FBMEN2QixPQUFPc0IsT0FBTyxDQUFDSCxxQ0FDekRLLFFBQVFELDBDQUEwQyxHQUNsREUsTUFBTUosMENBQTBDLEdBQUksR0FBRztnQkFFN0RyQixTQUFTQSxPQUFPMEIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7Z0JBRXZDekIsT0FBTzJCLE9BQU8sQ0FBQyxTQUFDQztvQkFDZCxJQUFNQyxlQUFlaEMsc0JBQXNCK0I7b0JBRTNDekIsV0FBVzBCO2dCQUNiO2dCQUVBLE9BQU8xQjtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1XLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CRSxpQkFBaUJ0QixNQUFNbUIsYUFDdkJpQixnQ0FBZ0NkLGdCQUNoQ2YsV0FBVzZCLDhCQUE4QjVCLFdBQVc7Z0JBRTFELE9BQU9EO1lBQ1Q7OztZQUVBOEIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU10QixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQnNCLFVBQVV2QixXQUFXd0IsV0FBVyxFQUNoQzNCLGVBQWUwQixTQUFTLEdBQUc7Z0JBRWpDLE9BQU8xQjtZQUNUOzs7WUFFQTRCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUIsZUFBZSxJQUFJLENBQUN5QixlQUFlO2dCQUV6Q3pCLGFBQWE0QixRQUFRO1lBQ3ZCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDTCxlQUFlO2dCQUVqQ0ssS0FBS0QsV0FBVztZQUNsQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRXpCLFVBQVU7Z0JBQUksT0FBTzBCLDZCQUFZLENBQUNGLHlCQUF5QixDQXBFbkY1QywwQkFvRThHNkMsVUFBVXpCO1lBQWE7OztZQUVqSjJCLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0YsUUFBUSxFQUFFekIsVUFBVSxFQUFFNEIsVUFBVTtnQkFBSSxPQUFPRiw2QkFBWSxDQUFDQyxtQ0FBbUMsQ0F0RW5IL0MsMEJBc0U4STZDLFVBQVV6QixZQUFZNEI7WUFBYTs7O1dBdEVqTGhEO0VBQWlDOEMsNkJBQVkifQ==