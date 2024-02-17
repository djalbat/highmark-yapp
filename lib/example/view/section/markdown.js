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
                    node.createDOMElement(tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VjdGlvbi9tYXJrZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBNYXJrZG93blNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdXBkYXRlKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0UHJldmlvdXNOb2RlKCk7XG5cbiAgICBpZiAocHJldmlvdXNOb2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVubW91bnQocHJldmlvdXNOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5jcmVhdGVET01FbGVtZW50KHRva2Vucyk7XG5cbiAgICAgIHRoaXMubW91bnQobm9kZSk7XG5cbiAgICAgIGNvbnN0IHByZXZpb3VzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c05vZGUocHJldmlvdXNOb2RlKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c05vZGUoKSB7XG4gICAgY29uc3QgeyBwcmV2aW91c05vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBwcmV2aW91c05vZGU7XG4gIH1cblxuICBzZXRQcmV2aW91c05vZGUocHJldmlvdXNOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c05vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c05vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c05vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgdXBkYXRlTWFya2Rvd25TZWN0aW9uID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlTWFya2Rvd25TZWN0aW9uXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VjdGlvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2Rvd25TZWN0aW9uKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duU2VjdGlvbiIsInVwZGF0ZSIsIm5vZGUiLCJ0b2tlbnMiLCJwcmV2aW91c05vZGUiLCJnZXRQcmV2aW91c05vZGUiLCJ1bm1vdW50IiwiY3JlYXRlRE9NRWxlbWVudCIsIm1vdW50Iiwic2V0UHJldmlvdXNOb2RlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwicGFyZW50Q29udGV4dCIsInVwZGF0ZU1hcmtkb3duU2VjdGlvbiIsImJpbmQiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0VBOzs7ZUFBQTs7O29FQTlEc0I7b0JBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSxnQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ2pCLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJRCxpQkFBaUIsTUFBTTtvQkFDekIsSUFBSSxDQUFDRSxPQUFPLENBQUNGO2dCQUNmO2dCQUVBLElBQUlGLFNBQVMsTUFBTTtvQkFDakJBLEtBQUtLLGdCQUFnQixDQUFDSjtvQkFFdEIsSUFBSSxDQUFDSyxLQUFLLENBQUNOO29CQUVYLElBQU1FLGdCQUFlRixNQUFPLEdBQUc7b0JBRS9CLElBQUksQ0FBQ08sZUFBZSxDQUFDTDtnQkFDdkI7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELGVBQWlCLElBQUksQ0FBQ00sUUFBUSxHQUE5Qk47Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JMLFlBQVk7Z0JBQzFCLElBQUksQ0FBQ08sV0FBVyxDQUFDO29CQUNmUCxjQUFBQTtnQkFDRjtZQUNGOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLGVBQWU7Z0JBRXJCLElBQUksQ0FBQ1MsUUFBUSxDQUFDO29CQUNaVCxjQUFBQTtnQkFDRjtZQUNGOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHdCQUF3QixJQUFJLENBQUNkLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDLElBQUk7Z0JBRW5ELE9BQVE7b0JBQ05ELHVCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0wsZUFBZTtZQUN0Qjs7O1dBakRJWjtxQkFBd0JrQixhQUFPO0FBbURuQyxpQkFuRElsQixpQkFtREdtQixXQUFVO0FBRWpCLGlCQXJESW5CLGlCQXFER29CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3RCIn0=