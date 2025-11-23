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
var topmostHTMLNodeFromDocumentMarkdownNode = _index.grammarUtilities.topmostHTMLNodeFromDocumentMarkdownNode;
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
            value: function update(documentMarkdownNode, tokens) {
                if (documentMarkdownNode === null) {
                    return;
                }
                var domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null, context = {
                    tokens: tokens
                }, topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBncmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyB0b3Btb3N0SFRNTE5vZGVGcm9tRG9jdW1lbnRNYXJrZG93bk5vZGUgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIE1hcmtkb3duRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdEhUTUxOb2RlKCk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIHRvcG1vc3RIVE1MTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9wbW9zdEhUTUxOb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRvY3VtZW50TWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBpZiAoZG9jdW1lbnRNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlKGRvY3VtZW50TWFya2Rvd25Ob2RlKTtcblxuICAgIHRvcG1vc3RIVE1MTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuICB9XG5cbiAgY2xlYXJUb3Btb3N0SFRNTE5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG4gIH1cblxuICBnZXRUb3Btb3N0SFRNTE5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0SFRNTE5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0SFRNTE5vZGU7XG4gIH1cblxuICBzZXRUb3Btb3N0SFRNTE5vZGUodG9wbW9zdEhUTUxOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0SFRNTE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3Btb3N0SFRNTE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJNYXJrZG93bkRpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVNYXJrZG93bkRpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyTWFya2Rvd25EaXYsXG4gICAgICB1cGRhdGVNYXJrZG93bkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2Rvd25EaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICBcbmA7XG4iXSwibmFtZXMiOlsidG9wbW9zdEhUTUxOb2RlRnJvbURvY3VtZW50TWFya2Rvd25Ob2RlIiwiZ3JhbW1hclV0aWxpdGllcyIsIk1hcmtkb3duRGl2IiwiY2xlYXIiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRUb3Btb3N0SFRNTE5vZGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjb250ZXh0IiwidW5tb3VudCIsImNsZWFyVG9wbW9zdEhUTUxOb2RlIiwidXBkYXRlIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJzaWJsaW5nRE9NRWxlbWVudCIsIm1vdW50Iiwic2V0VG9wbW9zdEhUTUxOb2RlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwicGFyZW50Q29udGV4dCIsImNsZWFyTWFya2Rvd25EaXYiLCJiaW5kIiwidXBkYXRlTWFya2Rvd25EaXYiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIs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