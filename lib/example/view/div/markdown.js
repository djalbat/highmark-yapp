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
var _highmarkmarkdown = require("highmark-markdown");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var topmostHTMLNodeFromMarkdownNode = _highmarkmarkdown.grammarUtilities.topmostHTMLNodeFromMarkdownNode;
var MarkdownDiv = /*#__PURE__*/ function(Element) {
    _inherits(MarkdownDiv, Element);
    function MarkdownDiv() {
        _class_call_check(this, MarkdownDiv);
        return _call_super(this, MarkdownDiv, arguments);
    }
    _create_class(MarkdownDiv, [
        {
            key: "clear",
            value: function clear() {
                var topmostHTMLNode = this.getTopmostHTMLNode();
                if (topmostHTMLNode !== null) {
                    var domElement = this.getDOMElement(), parentDOMElement = domElement, context = null;
                    topmostHTMLNode.unmount(parentDOMElement, context);
                    this.clearTopmostHTMLNode();
                }
            }
        },
        {
            key: "update",
            value: function update(node, tokens) {
                var markdownNode = node; ///
                if (markdownNode !== null) {
                    var domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null, context = {
                        tokens: tokens
                    }, topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);
                    topmostHTMLNode.mount(parentDOMElement, siblingDOMElement, context);
                    this.setTopmostHTMLNode(topmostHTMLNode);
                }
            }
        },
        {
            key: "clearTopmostHTMLNode",
            value: function clearTopmostHTMLNode() {
                var topmostHTMLNode = null;
                this.setTopmostHTMLNode(topmostHTMLNode);
            }
        },
        {
            key: "getTopmostHTMLNode",
            value: function getTopmostHTMLNode() {
                var topmostHTMLNode = this.getState().topmostHTMLNode;
                return topmostHTMLNode;
            }
        },
        {
            key: "setTopmostHTMLNode",
            value: function setTopmostHTMLNode(topmostHTMLNode) {
                this.updateState({
                    topmostHTMLNode: topmostHTMLNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var topmostHTMLNode = null;
                this.setState({
                    topmostHTMLNode: topmostHTMLNode
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var clearMarkdownDiv = this.clear.bind(this), updateMarkdownDiv = this.update.bind(this);
                return {
                    clearMarkdownDiv: clearMarkdownDiv,
                    updateMarkdownDiv: updateMarkdownDiv
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
    return MarkdownDiv;
}(_wrap_native_super(_easy.Element));
_define_property(MarkdownDiv, "tagName", "div");
_define_property(MarkdownDiv, "defaultProperties", {
    className: "markdown"
});
var _default = (0, _easywithstyle.default)(MarkdownDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBncmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmNvbnN0IHsgdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSB9ID0gZ3JhbW1hclV0aWxpdGllcztcblxuY2xhc3MgTWFya2Rvd25EaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xlYXIoKSB7XG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpcy5nZXRUb3Btb3N0SFRNTE5vZGUoKTtcblxuICAgIGlmICh0b3Btb3N0SFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgdG9wbW9zdEhUTUxOb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb3Btb3N0SFRNTE5vZGUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlKTtcblxuICAgICAgdG9wbW9zdEhUTUxOb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRvcG1vc3RIVE1MTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgfVxuXG4gIGdldFRvcG1vc3RIVE1MTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RIVE1MTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbiAgfVxuXG4gIHNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjbGVhck1hcmtkb3duRGl2ID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU1hcmtkb3duRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgY2xlYXJNYXJrZG93bkRpdixcbiAgICAgIHVwZGF0ZU1hcmtkb3duRGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZG93blwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZG93bkRpdilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJ0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlIiwiZ3JhbW1hclV0aWxpdGllcyIsIk1hcmtkb3duRGl2IiwiY2xlYXIiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRUb3Btb3N0SFRNTE5vZGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjb250ZXh0IiwidW5tb3VudCIsImNsZWFyVG9wbW9zdEhUTUxOb2RlIiwidXBkYXRlIiwibm9kZSIsInRva2VucyIsIm1hcmtkb3duTm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwibW91bnQiLCJzZXRUb3Btb3N0SFRNTE5vZGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwYXJlbnRDb250ZXh0IiwiY2xlYXJNYXJrZG93bkRpdiIsImJpbmQiLCJ1cGRhdGVNYXJrZG93bkRpdiIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0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