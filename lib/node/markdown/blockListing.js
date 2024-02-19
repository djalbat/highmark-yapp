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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, tokenContentFromToken = _highmarkgrammars.tokenUtilities.tokenContentFromToken;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyB0b2tlblV0aWxpdGllcywgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmcgZnJvbSBcIi4uLy4uL2Jsb2NrTGlzdGluZ1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b2tlbkNvbnRlbnRGcm9tVG9rZW4gfSA9IHRva2VuVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjcmVhdGVET01FbGVtZW50KHRva2Vucykge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQodG9rZW5zKSxcbiAgICAgICAgICBvcHRpb25zID17XG4gICAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gQmxvY2tMaXN0aW5nLmZyb21Db250ZW50QW5kT3B0aW9ucyhjb250ZW50LCBvcHRpb25zKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gYmxvY2tMaXN0aW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGVudCh0b2tlbnMpIHtcbiAgICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgICBlbmQgPSBsYXN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggLSAxOyAgLy8vXG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5Db250ZW50ID0gdG9rZW5Db250ZW50RnJvbVRva2VuKHRva2VuKTtcblxuICAgICAgY29udGVudCArPSB0b2tlbkNvbnRlbnQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZS5nZXRMYW5ndWFnZSgpO1xuXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xuICB9XG5cbiAgZ2V0QmxvY2tMaXN0aW5nKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBlbGVtZW50ID0gZG9tRWxlbWVudC5fX2VsZW1lbnRfXywgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gZWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIGJsb2NrTGlzdGluZy5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeWFwcCA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCk7XG5cbiAgICB5YXBwLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwidG9rZW5Db250ZW50RnJvbVRva2VuIiwidG9rZW5VdGlsaXRpZXMiLCJjcmVhdGVET01FbGVtZW50IiwidG9rZW5zIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwib3B0aW9ucyIsImJsb2NrTGlzdGluZyIsIkJsb2NrTGlzdGluZyIsImZyb21Db250ZW50QW5kT3B0aW9ucyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibGFzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJmaXJzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiZm9yRWFjaCIsInRva2VuIiwidG9rZW5Db250ZW50IiwiYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJnZXRCbG9ja0xpc3RpbmciLCJlbGVtZW50IiwiX19lbGVtZW50X18iLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwieWFwcCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7Z0NBQ2M7bUVBRXBCO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFDLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDLE1BQ1QsQUFBRUMsd0JBQTBCQyxnQ0FBYyxDQUF4Q0Q7QUFFTyxJQUFBLEFBQU1KLHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU07Z0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDSixTQUMxQkssVUFBUztvQkFDUEosVUFBQUE7Z0JBQ0YsR0FDQUssZUFBZUMscUJBQVksQ0FBQ0MscUJBQXFCLENBQUNMLFNBQVNFLFVBQzNESSxhQUFhSCxhQUFhSSxhQUFhO2dCQUU3QyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0JBRW5CLE9BQU9BO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osTUFBTTtnQkFDZixJQUFJRyxVQUFVUyx1QkFBWTtnQkFFMUIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQm5CLEtBQUtpQixhQUNyQkcsaUJBQWlCdEIsTUFBTW1CLGFBQ3ZCSSxxQ0FBcUNGLGNBQWNHLHdCQUF3QixJQUMzRUMscUNBQXFDSCxlQUFlSSx1QkFBdUIsSUFDM0VDLDBDQUEwQ3JCLE9BQU9zQixPQUFPLENBQUNMLHFDQUN6RE0sMENBQTBDdkIsT0FBT3NCLE9BQU8sQ0FBQ0gscUNBQ3pESyxRQUFRRCwwQ0FBMEMsR0FDbERFLE1BQU1KLDBDQUEwQyxHQUFJLEdBQUc7Z0JBRTdEckIsU0FBU0EsT0FBTzBCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO2dCQUV2Q3pCLE9BQU8yQixPQUFPLENBQUMsU0FBQ0M7b0JBQ2QsSUFBTUMsZUFBZWhDLHNCQUFzQitCO29CQUUzQ3pCLFdBQVcwQjtnQkFDYjtnQkFFQSxPQUFPMUI7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkUsaUJBQWlCdEIsTUFBTW1CLGFBQ3ZCaUIsZ0NBQWdDZCxnQkFDaENmLFdBQVc2Qiw4QkFBOEI1QixXQUFXO2dCQUUxRCxPQUFPRDtZQUNUOzs7WUFFQThCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdEIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JzQixVQUFVdkIsV0FBV3dCLFdBQVcsRUFDaEMzQixlQUFlMEIsU0FBUyxHQUFHO2dCQUVqQyxPQUFPMUI7WUFDVDs7O1lBRUE0QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTVCLGVBQWUsSUFBSSxDQUFDeUIsZUFBZTtnQkFFekN6QixhQUFhNEIsUUFBUTtZQUN2Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0wsZUFBZTtnQkFFakNLLEtBQUtELFdBQVc7WUFDbEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxRQUFRLEVBQUV6QixVQUFVO2dCQUFJLE9BQU8wQiw4QkFBWSxDQUFDRix5QkFBeUIsQ0FwRW5GNUMsMEJBb0U4RzZDLFVBQVV6QjtZQUFhOzs7WUFFakoyQixLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0NGLFFBQVEsRUFBRXpCLFVBQVUsRUFBRTRCLFVBQVU7Z0JBQUksT0FBT0YsOEJBQVksQ0FBQ0MsbUNBQW1DLENBdEVuSC9DLDBCQXNFOEk2QyxVQUFVekIsWUFBWTRCO1lBQWE7OztXQXRFakxoRDtFQUFpQzhDLDhCQUFZIn0=