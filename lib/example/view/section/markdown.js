"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 100%;\n  height: 100%;\n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  position: absolute;\n  \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkdownSection = /*#__PURE__*/ function(Element) {
    _inherits(MarkdownSection, Element);
    var _super = _create_super(MarkdownSection);
    function MarkdownSection() {
        _class_call_check(this, MarkdownSection);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownSection, [
        {
            key: "update",
            value: function update(node, tokens) {
                var previousNode = this.getPreviousNode();
                if (previousNode !== null) {
                    this.unmount(previousNode);
                }
                if (node !== null) {
                    var footnotes = [], context = {
                        tokens: tokens,
                        footnotes: footnotes
                    };
                    node.createDOMElement(context);
                    this.mount(node);
                    var previousNode1 = node; ///
                    this.setPreviousNode(previousNode1);
                }
            }
        },
        {
            key: "getPreviousNode",
            value: function getPreviousNode() {
                var previousNode = this.getState().previousNode;
                return previousNode;
            }
        },
        {
            key: "setPreviousNode",
            value: function setPreviousNode(previousNode) {
                this.updateState({
                    previousNode: previousNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousNode = null;
                this.setState({
                    previousNode: previousNode
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateMarkdownSection = this.update.bind(this);
                return {
                    updateMarkdownSection: updateMarkdownSection
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return MarkdownSection;
}(_wrap_native_super(_easy.Element));
_define_property(MarkdownSection, "tagName", "section");
_define_property(MarkdownSection, "defaultProperties", {
    className: "markdown"
});
var _default = (0, _easywithstyle.default)(MarkdownSection)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VjdGlvbi9tYXJrZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBNYXJrZG93blNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdXBkYXRlKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0UHJldmlvdXNOb2RlKCk7XG5cbiAgICBpZiAocHJldmlvdXNOb2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVubW91bnQocHJldmlvdXNOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm9vdG5vdGVzID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGZvb3Rub3Rlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgbm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1vdW50KG5vZGUpO1xuXG4gICAgICBjb25zdCBwcmV2aW91c05vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNOb2RlKHByZXZpb3VzTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNOb2RlKCkge1xuICAgIGNvbnN0IHsgcHJldmlvdXNOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gcHJldmlvdXNOb2RlO1xuICB9XG5cbiAgc2V0UHJldmlvdXNOb2RlKHByZXZpb3VzTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNOb2RlXG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZU1hcmtkb3duU2VjdGlvbiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHVwZGF0ZU1hcmtkb3duU2VjdGlvblxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlY3Rpb25cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtkb3duXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtkb3duU2VjdGlvbilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJNYXJrZG93blNlY3Rpb24iLCJ1cGRhdGUiLCJub2RlIiwidG9rZW5zIiwicHJldmlvdXNOb2RlIiwiZ2V0UHJldmlvdXNOb2RlIiwidW5tb3VudCIsImZvb3Rub3RlcyIsImNvbnRleHQiLCJjcmVhdGVET01FbGVtZW50IiwibW91bnQiLCJzZXRQcmV2aW91c05vZGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlTWFya2Rvd25TZWN0aW9uIiwiYmluZCIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzRUE7OztlQUFBOzs7b0VBcEVzQjtvQkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLGdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLElBQUksRUFBRUMsTUFBTTtnQkFDakIsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXpDLElBQUlELGlCQUFpQixNQUFNO29CQUN6QixJQUFJLENBQUNFLE9BQU8sQ0FBQ0Y7Z0JBQ2Y7Z0JBRUEsSUFBSUYsU0FBUyxNQUFNO29CQUNqQixJQUFNSyxZQUFZLEVBQUUsRUFDZEMsVUFBVTt3QkFDUkwsUUFBQUE7d0JBQ0FJLFdBQUFBO29CQUNGO29CQUVOTCxLQUFLTyxnQkFBZ0IsQ0FBQ0Q7b0JBRXRCLElBQUksQ0FBQ0UsS0FBSyxDQUFDUjtvQkFFWCxJQUFNRSxnQkFBZUYsTUFBTyxHQUFHO29CQUUvQixJQUFJLENBQUNTLGVBQWUsQ0FBQ1A7Z0JBQ3ZCO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxlQUFpQixJQUFJLENBQUNRLFFBQVEsR0FBOUJSO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCUCxZQUFZO2dCQUMxQixJQUFJLENBQUNTLFdBQVcsQ0FBQztvQkFDZlQsY0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixlQUFlO2dCQUVyQixJQUFJLENBQUNXLFFBQVEsQ0FBQztvQkFDWlgsY0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0IsSUFBSSxDQUFDaEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDLElBQUk7Z0JBRW5ELE9BQVE7b0JBQ05ELHVCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0wsZUFBZTtZQUN0Qjs7O1dBdkRJZDtxQkFBd0JvQixhQUFPO0FBeURuQyxpQkF6RElwQixpQkF5REdxQixXQUFVO0FBRWpCLGlCQTNESXJCLGlCQTJER3NCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3hCIn0=