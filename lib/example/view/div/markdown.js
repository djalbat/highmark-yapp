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
var _index = require("../../../index");
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
var topmostHTMLNodeFromMarkdownNode = _index.grammarUtilities.topmostHTMLNodeFromMarkdownNode;
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
            value: function update(markdownNode, tokens) {
                if (markdownNode === null) {
                    return;
                }
                var domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null, context = {
                    tokens: tokens
                }, topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);
                topmostHTMLNode.mount(parentDOMElement, siblingDOMElement, context);
                this.setTopmostHTMLNode(topmostHTMLNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBncmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5jbGFzcyBNYXJrZG93bkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGVhcigpIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzLmdldFRvcG1vc3RIVE1MTm9kZSgpO1xuXG4gICAgaWYgKHRvcG1vc3RIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICB0b3Btb3N0SFRNTE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5jbGVhclRvcG1vc3RIVE1MTm9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93bk5vZGUsIHRva2Vucykge1xuICAgIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgdG9wbW9zdEhUTUxOb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gIH1cblxuICBjbGVhclRvcG1vc3RIVE1MTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKTtcbiAgfVxuXG4gIGdldFRvcG1vc3RIVE1MTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RIVE1MTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RIVE1MTm9kZTtcbiAgfVxuXG4gIHNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvcG1vc3RIVE1MTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjbGVhck1hcmtkb3duRGl2ID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU1hcmtkb3duRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgY2xlYXJNYXJrZG93bkRpdixcbiAgICAgIHVwZGF0ZU1hcmtkb3duRGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZG93blwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZG93bkRpdilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJ0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlIiwiZ3JhbW1hclV0aWxpdGllcyIsIk1hcmtkb3duRGl2IiwiY2xlYXIiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRUb3Btb3N0SFRNTE5vZGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjb250ZXh0IiwidW5tb3VudCIsImNsZWFyVG9wbW9zdEhUTUxOb2RlIiwidXBkYXRlIiwibWFya2Rvd25Ob2RlIiwidG9rZW5zIiwic2libGluZ0RPTUVsZW1lbnQiLCJtb3VudCIsInNldFRvcG1vc3RIVE1MTm9kZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJjbGVhck1hcmtkb3duRGl2IiwiYmluZCIsInVwZGF0ZU1hcmtkb3duRGl2IiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlGQTs7O2VB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