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
var _listing = /*#__PURE__*/ _interop_require_default(require("../../view/listing"));
var _index = require("../../../index");
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
                return _index.ListingMarkdownNode.fromRuleNameAndChildNodes(YappListingMarkdownNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _index.ListingMarkdownNode.fromRuleNameChildNodesAndPrecedence(YappListingMarkdownNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return YappListingMarkdownNode;
}(_index.ListingMarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL25vZGUvbWFya2Rvd24veWFwcExpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMaXN0aW5nIGZyb20gXCIuLi8uLi92aWV3L2xpc3RpbmdcIjtcblxuaW1wb3J0IHsgTGlzdGluZ01hcmtkb3duTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZYXBwTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIExpc3RpbmdNYXJrZG93bk5vZGUge1xuICBjcmVhdGVET01FbGVtZW50KHRva2Vucykge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQodG9rZW5zKSxcbiAgICAgICAgICB5YXBwID1cblxuICAgICAgICAgICAgPExpc3RpbmcgbGFuZ3VhZ2U9e2xhbmd1YWdlfT5cbiAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L0xpc3Rpbmc+XG5cbiAgICAgICAgICAsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHlhcHAuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRZYXBwKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBlbGVtZW50ID0gZG9tRWxlbWVudC5fX2VsZW1lbnRfXywgLy8vXG4gICAgICAgICAgeWFwcCA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB5YXBwID0gdGhpcy5nZXRZYXBwKCk7XG5cbiAgICB5YXBwLmRpZE1vdW50KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB5YXBwID0gdGhpcy5nZXRZYXBwKCk7XG5cbiAgICB5YXBwLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTGlzdGluZ01hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFlhcHBMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHsgcmV0dXJuIExpc3RpbmdNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoWWFwcExpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIllhcHBMaXN0aW5nTWFya2Rvd25Ob2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsInRva2VucyIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInlhcHAiLCJMaXN0aW5nIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiZ2V0WWFwcCIsImVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiTGlzdGluZ01hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OERBSkQ7cUJBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTtnQkFDckIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNKLFNBQzFCSyxxQkFFRSxvQkFBQ0MsZ0JBQU87b0JBQUNMLFVBQVVBO21CQUNoQkUsVUFJTEksYUFBYUYsS0FBS0csYUFBYTtnQkFFckMsSUFBSSxDQUFDQyxhQUFhLENBQUNGO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CRyxVQUFVSixXQUFXSyxXQUFXLEVBQ2hDUCxPQUFPTSxTQUFTLEdBQUc7Z0JBRXpCLE9BQU9OO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsT0FBTyxJQUFJLENBQUNLLE9BQU87Z0JBRXpCTCxLQUFLUSxRQUFRO1lBQ2Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTyxJQUFJLENBQUNLLE9BQU87Z0JBRXpCTCxLQUFLUyxXQUFXO1lBQ2xCOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDBCQUFtQixDQUFDSCx5QkFBeUIsQ0F0QzFGakIseUJBc0NvSGtCLFVBQVVDO1lBQWE7OztZQUV2SkUsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DSCxRQUFRLEVBQUVDLFVBQVUsRUFBRUcsVUFBVTtnQkFBSSxPQUFPRiwwQkFBbUIsQ0FBQ0MsbUNBQW1DLENBeEMxSHJCLHlCQXdDb0prQixVQUFVQyxZQUFZRztZQUFhOzs7V0F4Q3ZMdEI7RUFBZ0NvQiwwQkFBbUIifQ==