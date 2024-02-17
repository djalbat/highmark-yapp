"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return YappListingMarkdownNode;
    }
});
var _highmarkgrammar = require("highmark-grammar");
var _listing = /*#__PURE__*/ _interop_require_default(require("../../listing"));
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
var YappListingMarkdownNode = /*#__PURE__*/ function(ListingMarkdownNode) {
    _inherits(YappListingMarkdownNode, ListingMarkdownNode);
    var _super = _create_super(YappListingMarkdownNode);
    function YappListingMarkdownNode() {
        _class_call_check(this, YappListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(YappListingMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(tokens) {
                var language = this.getLanguage(), content = this.getContent(tokens), yapp = /*#__PURE__*/ React.createElement(_listing.default, {
                    language: language
                }, content), domElement = yapp.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getYapp",
            value: function getYapp() {
                var domElement = this.getDOMElement(), element = domElement.__element__, yapp = element; ///
                return yapp;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var yapp = this.getYapp();
                yapp.didMount();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var yapp = this.getYapp();
                yapp.willUnmount();
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _highmarkgrammar.ListingMarkdownNode.fromRuleNameAndChildNodes(YappListingMarkdownNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _highmarkgrammar.ListingMarkdownNode.fromRuleNameChildNodesAndPrecedence(YappListingMarkdownNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return YappListingMarkdownNode;
}(_highmarkgrammar.ListingMarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3lhcHBMaXN0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBMaXN0aW5nTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJcIjtcblxuaW1wb3J0IExpc3RpbmcgZnJvbSBcIi4uLy4uL2xpc3RpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWFwcExpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBMaXN0aW5nTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudCh0b2tlbnMpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KHRva2VucyksXG4gICAgICAgICAgeWFwcCA9XG5cbiAgICAgICAgICAgIDxMaXN0aW5nIGxhbmd1YWdlPXtsYW5ndWFnZX0+XG4gICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgPC9MaXN0aW5nPlxuXG4gICAgICAgICAgLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB5YXBwLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0WWFwcCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X18sIC8vL1xuICAgICAgICAgIHlhcHAgPSBlbGVtZW50OyAvLy9cblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeWFwcCA9IHRoaXMuZ2V0WWFwcCgpO1xuXG4gICAgeWFwcC5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeWFwcCA9IHRoaXMuZ2V0WWFwcCgpO1xuXG4gICAgeWFwcC53aWxsVW5tb3VudCgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIExpc3RpbmdNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhZYXBwTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBMaXN0aW5nTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKFlhcHBMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJZYXBwTGlzdGluZ01hcmtkb3duTm9kZSIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0b2tlbnMiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ5YXBwIiwiTGlzdGluZyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImdldFlhcHAiLCJlbGVtZW50IiwiX19lbGVtZW50X18iLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIkxpc3RpbmdNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytCQUplOzhEQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTtnQkFDckIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNKLFNBQzFCSyxxQkFFRSxvQkFBQ0MsZ0JBQU87b0JBQUNMLFVBQVVBO21CQUNoQkUsVUFJTEksYUFBYUYsS0FBS0csYUFBYTtnQkFFckMsSUFBSSxDQUFDQyxhQUFhLENBQUNGO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CRyxVQUFVSixXQUFXSyxXQUFXLEVBQ2hDUCxPQUFPTSxTQUFTLEdBQUc7Z0JBRXpCLE9BQU9OO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsT0FBTyxJQUFJLENBQUNLLE9BQU87Z0JBRXpCTCxLQUFLUSxRQUFRO1lBQ2Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTyxJQUFJLENBQUNLLE9BQU87Z0JBRXpCTCxLQUFLUyxXQUFXO1lBQ2xCOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9DQUFtQixDQUFDSCx5QkFBeUIsQ0F0QzFGakIseUJBc0NvSGtCLFVBQVVDO1lBQWE7OztZQUV2SkUsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DSCxRQUFRLEVBQUVDLFVBQVUsRUFBRUcsVUFBVTtnQkFBSSxPQUFPRixvQ0FBbUIsQ0FBQ0MsbUNBQW1DLENBeEMxSHJCLHlCQXdDb0prQixVQUFVQyxZQUFZRztZQUFhOzs7V0F4Q3ZMdEI7RUFBZ0NvQixvQ0FBbUIifQ==