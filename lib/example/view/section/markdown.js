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
            value: function update(node) {
                var previousNode = this.getPreviousNode();
                if (previousNode !== null) {
                    this.unmount(previousNode);
                }
                if (node !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VjdGlvbi9tYXJrZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBNYXJrZG93blNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdXBkYXRlKG5vZGUpIHtcbiAgICBjb25zdCBwcmV2aW91c05vZGUgPSB0aGlzLmdldFByZXZpb3VzTm9kZSgpO1xuXG4gICAgaWYgKHByZXZpb3VzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy51bm1vdW50KHByZXZpb3VzTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubW91bnQobm9kZSk7XG5cbiAgICAgIGNvbnN0IHByZXZpb3VzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c05vZGUocHJldmlvdXNOb2RlKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c05vZGUoKSB7XG4gICAgY29uc3QgeyBwcmV2aW91c05vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBwcmV2aW91c05vZGU7XG4gIH1cblxuICBzZXRQcmV2aW91c05vZGUocHJldmlvdXNOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c05vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c05vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c05vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgdXBkYXRlTWFya2Rvd25TZWN0aW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlTWFya2Rvd25TZWN0aW9uXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VjdGlvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2Rvd25TZWN0aW9uKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duU2VjdGlvbiIsInVwZGF0ZSIsIm5vZGUiLCJwcmV2aW91c05vZGUiLCJnZXRQcmV2aW91c05vZGUiLCJ1bm1vdW50IiwibW91bnQiLCJzZXRQcmV2aW91c05vZGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlTWFya2Rvd25TZWN0aW9uIiwiYmluZCIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7b0VBNURzQjtvQkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLGdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLElBQUk7Z0JBQ1QsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXpDLElBQUlELGlCQUFpQixNQUFNO29CQUN6QixJQUFJLENBQUNFLE9BQU8sQ0FBQ0Y7Z0JBQ2Y7Z0JBRUEsSUFBSUQsU0FBUyxNQUFNO29CQUNqQixJQUFJLENBQUNJLEtBQUssQ0FBQ0o7b0JBRVgsSUFBTUMsZ0JBQWVELE1BQU8sR0FBRztvQkFFL0IsSUFBSSxDQUFDSyxlQUFlLENBQUNKO2dCQUN2QjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsZUFBaUIsSUFBSSxDQUFDSyxRQUFRLEdBQTlCTDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkosWUFBWTtnQkFDMUIsSUFBSSxDQUFDTSxXQUFXLENBQUM7b0JBQ2ZOLGNBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsZUFBZTtnQkFFckIsSUFBSSxDQUFDUSxRQUFRLENBQUM7b0JBQ1pSLGNBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsd0JBQXdCLElBQUksQ0FBQ1osTUFBTSxDQUFDYSxJQUFJLENBQUMsSUFBSTtnQkFFbkQsT0FBUTtvQkFDTkQsdUJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDTCxlQUFlO1lBQ3RCOzs7V0EvQ0lWO3FCQUF3QmdCLGFBQU87QUFpRG5DLGlCQWpESWhCLGlCQWlER2lCLFdBQVU7QUFFakIsaUJBbkRJakIsaUJBbURHa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDcEIifQ==