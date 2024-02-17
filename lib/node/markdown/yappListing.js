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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
                var _$Listing = this.constructor.Listing, language = this.getLanguage(), content = this.getContent(tokens), listing = /*#__PURE__*/ React.createElement(_$Listing, {
                    language: language
                }, content), domElement = listing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getYapp",
            value: function getYapp() {
                var domElement = this.getDOMElement(), element = domElement.__element__, listing = element; ///
                return listing;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var listing = this.getYapp();
                listing.didMount();
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
_define_property(YappListingMarkdownNode, "Listing", _listing.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3lhcHBMaXN0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBMaXN0aW5nTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJcIjtcblxuaW1wb3J0IExpc3RpbmcgZnJvbSBcIi4uLy4uL2xpc3RpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWFwcExpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBMaXN0aW5nTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudCh0b2tlbnMpIHtcbiAgICBjb25zdCB7IExpc3RpbmcgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCh0b2tlbnMpLFxuICAgICAgICAgIGxpc3RpbmcgPVxuXG4gICAgICAgICAgICA8TGlzdGluZyBsYW5ndWFnZT17bGFuZ3VhZ2V9PlxuICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvTGlzdGluZz5cblxuICAgICAgICAgICxcbiAgICAgICAgICBkb21FbGVtZW50ID0gbGlzdGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFlhcHAoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fLCAvLy9cbiAgICAgICAgICBsaXN0aW5nID0gZWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gbGlzdGluZztcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGxpc3RpbmcgPSB0aGlzLmdldFlhcHAoKTtcblxuICAgIGxpc3RpbmcuZGlkTW91bnQoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHlhcHAgPSB0aGlzLmdldFlhcHAoKTtcblxuICAgIHlhcHAud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBMaXN0aW5nID0gTGlzdGluZztcblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTGlzdGluZ01hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFlhcHBMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHsgcmV0dXJuIExpc3RpbmdNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoWWFwcExpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIllhcHBMaXN0aW5nTWFya2Rvd25Ob2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsInRva2VucyIsIkxpc3RpbmciLCJjb25zdHJ1Y3RvciIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpc3RpbmciLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRZYXBwIiwiZWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInlhcHAiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiTGlzdGluZ01hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0JBSmU7OERBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTtnQkFDckIsSUFBTSxBQUFFQyxZQUFZLElBQUksQ0FBQ0MsV0FBVyxDQUE1QkQsU0FDRkUsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNOLFNBQzFCTyx3QkFFRSxvQkFBQ047b0JBQVFFLFVBQVVBO21CQUNoQkUsVUFJTEcsYUFBYUQsUUFBUUUsYUFBYTtnQkFFeEMsSUFBSSxDQUFDQyxhQUFhLENBQUNGO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CRyxVQUFVSixXQUFXSyxXQUFXLEVBQ2hDTixVQUFVSyxTQUFTLEdBQUc7Z0JBRTVCLE9BQU9MO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsVUFBVSxJQUFJLENBQUNJLE9BQU87Z0JBRTVCSixRQUFRTyxRQUFRO1lBQ2xCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDTCxPQUFPO2dCQUV6QkssS0FBS0QsV0FBVztZQUNsQjs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQ0FBbUIsQ0FBQ0gseUJBQXlCLENBekMxRm5CLHlCQXlDb0hvQixVQUFVQztZQUFhOzs7WUFFdkpFLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0gsUUFBUSxFQUFFQyxVQUFVLEVBQUVHLFVBQVU7Z0JBQUksT0FBT0Ysb0NBQW1CLENBQUNDLG1DQUFtQyxDQTNDMUh2Qix5QkEyQ29Kb0IsVUFBVUMsWUFBWUc7WUFBYTs7O1dBM0N2THhCO0VBQWdDc0Isb0NBQW1CO0FBdUN0RSxpQkF2Q21CdEIseUJBdUNaRyxXQUFVQSxnQkFBTyJ9