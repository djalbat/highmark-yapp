"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ListingMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _constants = require("../../constants");
var _token = require("../../utilities/token");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last;
var ListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ListingMarkdownNode, MarkdownNode);
    var _super = _create_super(ListingMarkdownNode);
    function ListingMarkdownNode() {
        _class_call_check(this, ListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ListingMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(tokens) {
                var domElement = _get(_get_prototype_of(ListingMarkdownNode.prototype), "createDOMElement", this).call(this, tokens), content = this.getContent(tokens), innerHTML = content; ///
                Object.assign(domElement, {
                    innerHTML: innerHTML
                });
                return domElement;
            }
        },
        {
            key: "createChildNodesDOMElements",
            value: function createChildNodesDOMElements(tokens) {
            ///
            }
        },
        {
            key: "getClassName",
            value: function getClassName() {
                var language = this.getLanguage(), className = language; ///
                return className;
            }
        },
        {
            key: "getLanguage",
            value: function getLanguage() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), listingStartMarkdownNode = firstChildNode, language = listingStartMarkdownNode.getLanguage();
                return language;
            }
        },
        {
            key: "getContent",
            value: function getContent(tokens) {
                var content = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes(), lastChildNode = last(childNodes), firstChildNode = first(childNodes), listingEndMarkdownNode = lastChildNode, listingStartMarkdownNode = firstChildNode, listingEndMarkdownNodeFirstSignificantToken = listingEndMarkdownNode.getFirstSignificantToken(), listingStartMarkdownNodeLastSignificantToken = listingStartMarkdownNode.getLastSignificantToken(), listingEndMarkdownNodeFirstSignificantTokenIndex = tokens.indexOf(listingEndMarkdownNodeFirstSignificantToken), listingStartMarkdownNodeLastSignificantTokenIndex = tokens.indexOf(listingStartMarkdownNodeLastSignificantToken), start = listingStartMarkdownNodeLastSignificantTokenIndex + 1, end = listingEndMarkdownNodeFirstSignificantTokenIndex - 1;
                tokens = tokens.slice(start, end); ///
                tokens.forEach(function(token) {
                    var tokenContent = (0, _token.tokenContentFromToken)(token);
                    content += tokenContent;
                });
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
                if (childNodes === undefined) {
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = ListingMarkdownNode;
                }
                var listingMarkdownNode = _markdown.default.fromRuleNameAndChildNodes(Class, ruleName, childNodes);
                return listingMarkdownNode;
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence) {
                if (precedence === undefined) {
                    precedence = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = ListingMarkdownNode;
                }
                var listingMarkdownNode = _markdown.default.fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence);
                return listingMarkdownNode;
            }
        }
    ]);
    return ListingMarkdownNode;
}(_markdown.default);
_define_property(ListingMarkdownNode, "tagName", "pre");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRva2VuQ29udGVudEZyb21Ub2tlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5cIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjcmVhdGVET01FbGVtZW50KHRva2Vucykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KHRva2VucyksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCh0b2tlbnMpLFxuICAgICAgICAgIGlubmVySFRNTCA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgaW5uZXJIVE1MXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZXNET01FbGVtZW50cyh0b2tlbnMpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBsYW5ndWFnZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBsaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUuZ2V0TGFuZ3VhZ2UoKTtcblxuICAgIHJldHVybiBsYW5ndWFnZTtcbiAgfVxuXG4gIGdldENvbnRlbnQodG9rZW5zKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsaXN0aW5nRW5kTWFya2Rvd25Ob2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgbGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBsaXN0aW5nRW5kTWFya2Rvd25Ob2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0gbGlzdGluZ0VuZE1hcmtkb3duTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBsaXN0aW5nU3RhcnRNYXJrZG93bk5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxpc3RpbmdTdGFydE1hcmtkb3duTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxpc3RpbmdFbmRNYXJrZG93bk5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxpc3RpbmdFbmRNYXJrZG93bk5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIGxpc3RpbmdTdGFydE1hcmtkb3duTm9kZUxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsaXN0aW5nU3RhcnRNYXJrZG93bk5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgc3RhcnQgPSBsaXN0aW5nU3RhcnRNYXJrZG93bk5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMSxcbiAgICAgICAgICBlbmQgPSBsaXN0aW5nRW5kTWFya2Rvd25Ob2RlRmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggLSAxO1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudCA9IHRva2VuQ29udGVudEZyb21Ub2tlbih0b2tlbik7XG5cbiAgICAgIGNvbnRlbnQgKz0gdG9rZW5Db250ZW50O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicHJlXCI7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IExpc3RpbmdNYXJrZG93bk5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGluZ01hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gbGlzdGluZ01hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTGlzdGluZ01hcmtkb3duTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0aW5nTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbGlzdGluZ01hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpc3RpbmdNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0b2tlbnMiLCJkb21FbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVDaGlsZE5vZGVzRE9NRWxlbWVudHMiLCJnZXRDbGFzc05hbWUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImxpc3RpbmdTdGFydE1hcmtkb3duTm9kZSIsIkVNUFRZX1NUUklORyIsImxhc3RDaGlsZE5vZGUiLCJsaXN0aW5nRW5kTWFya2Rvd25Ob2RlIiwibGlzdGluZ0VuZE1hcmtkb3duTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxpc3RpbmdTdGFydE1hcmtkb3duTm9kZUxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsaXN0aW5nRW5kTWFya2Rvd25Ob2RlRmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlTGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJmb3JFYWNoIiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJ0b2tlbkNvbnRlbnRGcm9tVG9rZW4iLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiQ2xhc3MiLCJydWxlTmFtZSIsInVuZGVmaW5lZCIsImxpc3RpbmdNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsrREFFTjt5QkFFSTtxQkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVBLElBQUEsQUFBTUgsb0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTtnQkFDckIsSUFBTUMsYUFBYSx1QkFGRk4sZ0NBRVFJLG9CQUFOLElBQUssYUFBa0JDLFNBQ3BDRSxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxTQUMxQkksWUFBWUYsU0FBVSxHQUFHO2dCQUUvQkcsT0FBT0MsTUFBTSxDQUFDTCxZQUFZO29CQUN4QkcsV0FBQUE7Z0JBQ0Y7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJQLE1BQU07WUFDaEMsR0FBRztZQUNMOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxZQUFZRixVQUFVLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQmxCLE1BQU1nQixhQUN2QkcsMkJBQTJCRCxnQkFDM0JMLFdBQVdNLHlCQUF5QkwsV0FBVztnQkFFckQsT0FBT0Q7WUFDVDs7O1lBRUFOLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSCxNQUFNO2dCQUNmLElBQUlFLFVBQVVjLHVCQUFZO2dCQUUxQixJQUFNSixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkksZ0JBQWdCbkIsS0FBS2MsYUFDckJFLGlCQUFpQmxCLE1BQU1nQixhQUN2Qk0seUJBQXlCRCxlQUN6QkYsMkJBQTJCRCxnQkFDM0JLLDhDQUE4Q0QsdUJBQXVCRSx3QkFBd0IsSUFDN0ZDLCtDQUErQ04seUJBQXlCTyx1QkFBdUIsSUFDL0ZDLG1EQUFtRHZCLE9BQU93QixPQUFPLENBQUNMLDhDQUNsRU0sb0RBQW9EekIsT0FBT3dCLE9BQU8sQ0FBQ0gsK0NBQ25FSyxRQUFRRCxvREFBb0QsR0FDNURFLE1BQU1KLG1EQUFtRDtnQkFFL0R2QixTQUFTQSxPQUFPNEIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7Z0JBRXZDM0IsT0FBTzZCLE9BQU8sQ0FBQyxTQUFDQztvQkFDZCxJQUFNQyxlQUFlQyxJQUFBQSw0QkFBcUIsRUFBQ0Y7b0JBRTNDNUIsV0FBVzZCO2dCQUNiO2dCQUVBLE9BQU83QjtZQUNUOzs7O1lBSU8rQixLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLEtBQUssRUFBRUMsUUFBUSxFQUFFdkIsVUFBVTtnQkFDMUQsSUFBSUEsZUFBZXdCLFdBQVc7b0JBQzVCeEIsYUFBYXVCLFVBQVcsR0FBRztvQkFFM0JBLFdBQVdELE9BQU8sR0FBRztvQkFFckJBLFFBbkVldkM7Z0JBb0VqQjtnQkFFQSxJQUFNMEMsc0JBQXNCQyxpQkFBWSxDQUFDTCx5QkFBeUIsQ0FBQ0MsT0FBT0MsVUFBVXZCO2dCQUVwRixPQUFPeUI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0wsS0FBSyxFQUFFQyxRQUFRLEVBQUV2QixVQUFVLEVBQUU0QixVQUFVO2dCQUNoRixJQUFJQSxlQUFlSixXQUFXO29CQUM1QkksYUFBYTVCLFlBQWEsR0FBRztvQkFFN0JBLGFBQWF1QixVQUFXLEdBQUc7b0JBRTNCQSxXQUFXRCxPQUFPLEdBQUc7b0JBRXJCQSxRQW5GZXZDO2dCQW9GakI7Z0JBRUEsSUFBTTBDLHNCQUFzQkMsaUJBQVksQ0FBQ0MsbUNBQW1DLENBQUNMLE9BQU9DLFVBQVV2QixZQUFZNEI7Z0JBRTFHLE9BQU9IO1lBQ1Q7OztXQXpGbUIxQztFQUE0QjJDLGlCQUFZO0FBMkQzRCxpQkEzRG1CM0MscUJBMkRaOEMsV0FBVSJ9