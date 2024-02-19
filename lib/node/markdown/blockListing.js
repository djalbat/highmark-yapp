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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyB0b2tlblV0aWxpdGllcywgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmcgZnJvbSBcIi4uLy4uL2Jsb2NrTGlzdGluZ1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b2tlbkNvbnRlbnRGcm9tVG9rZW4gfSA9IHRva2VuVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPXtcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBCbG9ja0xpc3RpbmcuZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBibG9ja0xpc3RpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIGxldCB7IHRva2VucyB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgICBlbmQgPSBsYXN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggLSAxOyAgLy8vXG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5Db250ZW50ID0gdG9rZW5Db250ZW50RnJvbVRva2VuKHRva2VuKTtcblxuICAgICAgY29udGVudCArPSB0b2tlbkNvbnRlbnQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZS5nZXRMYW5ndWFnZSgpO1xuXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xuICB9XG5cbiAgZ2V0QmxvY2tMaXN0aW5nKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBlbGVtZW50ID0gZG9tRWxlbWVudC5fX2VsZW1lbnRfXywgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gZWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIGJsb2NrTGlzdGluZy5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeWFwcCA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCk7XG5cbiAgICB5YXBwLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwidG9rZW5Db250ZW50RnJvbVRva2VuIiwidG9rZW5VdGlsaXRpZXMiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGV4dCIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbmZpZ3VyYXRpb24iLCJibG9ja0xpc3RpbmciLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJFTVBUWV9TVFJJTkciLCJ0b2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImxhc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwiZmlyc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsImZvckVhY2giLCJ0b2tlbiIsInRva2VuQ29udGVudCIsImJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlIiwiZ2V0QmxvY2tMaXN0aW5nIiwiZWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInlhcHAiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVO2dDQUNjO21FQUVwQjt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQyxNQUNULEFBQUVDLHdCQUEwQkMsZ0NBQWMsQ0FBeENEO0FBRU8sSUFBQSxBQUFNSix5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CTSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0osVUFDMUJLLGdCQUFlO29CQUNiSixVQUFBQTtnQkFDRixHQUNBSyxlQUFlQyxxQkFBWSxDQUFDQywyQkFBMkIsQ0FBQ0wsU0FBU0UsZ0JBQ2pFSSxhQUFhSCxhQUFhSSxhQUFhO2dCQUU3QyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0Y7Z0JBRW5CLE9BQU9BO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osT0FBTztnQkFDaEIsSUFBSUcsVUFBVVMsdUJBQVk7Z0JBRTFCLElBQUksQUFBRUMsU0FBV2IsUUFBWGE7Z0JBRU4sSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQnBCLEtBQUtrQixhQUNyQkcsaUJBQWlCdkIsTUFBTW9CLGFBQ3ZCSSxxQ0FBcUNGLGNBQWNHLHdCQUF3QixJQUMzRUMscUNBQXFDSCxlQUFlSSx1QkFBdUIsSUFDM0VDLDBDQUEwQ1QsT0FBT1UsT0FBTyxDQUFDTCxxQ0FDekRNLDBDQUEwQ1gsT0FBT1UsT0FBTyxDQUFDSCxxQ0FDekRLLFFBQVFELDBDQUEwQyxHQUNsREUsTUFBTUosMENBQTBDLEdBQUksR0FBRztnQkFFN0RULFNBQVNBLE9BQU9jLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO2dCQUV2Q2IsT0FBT2UsT0FBTyxDQUFDLFNBQUNDO29CQUNkLElBQU1DLGVBQWVqQyxzQkFBc0JnQztvQkFFM0MxQixXQUFXMkI7Z0JBQ2I7Z0JBRUEsT0FBTzNCO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVksYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JFLGlCQUFpQnZCLE1BQU1vQixhQUN2QmlCLGdDQUFnQ2QsZ0JBQ2hDaEIsV0FBVzhCLDhCQUE4QjdCLFdBQVc7Z0JBRTFELE9BQU9EO1lBQ1Q7OztZQUVBK0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU12QixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQnVCLFVBQVV4QixXQUFXeUIsV0FBVyxFQUNoQzVCLGVBQWUyQixTQUFTLEdBQUc7Z0JBRWpDLE9BQU8zQjtZQUNUOzs7WUFFQTZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNN0IsZUFBZSxJQUFJLENBQUMwQixlQUFlO2dCQUV6QzFCLGFBQWE2QixRQUFRO1lBQ3ZCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDTCxlQUFlO2dCQUVqQ0ssS0FBS0QsV0FBVztZQUNsQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRXpCLFVBQVU7Z0JBQUksT0FBTzBCLDhCQUFZLENBQUNGLHlCQUF5QixDQXRFbkY3QywwQkFzRThHOEMsVUFBVXpCO1lBQWE7OztZQUVqSjJCLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0YsUUFBUSxFQUFFekIsVUFBVSxFQUFFNEIsVUFBVTtnQkFBSSxPQUFPRiw4QkFBWSxDQUFDQyxtQ0FBbUMsQ0F4RW5IaEQsMEJBd0U4SThDLFVBQVV6QixZQUFZNEI7WUFBYTs7O1dBeEVqTGpEO0VBQWlDK0MsOEJBQVkifQ==