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
                var divisionMarkdownNOde = this.getDivisionMarkdownNode();
                if (divisionMarkdownNOde !== null) {
                    var domElement = this.getDOMElement(), parentDOMElement = domElement; ///
                    divisionMarkdownNOde.unmount(parentDOMElement);
                    this.clearDivisionMarkdownNode();
                }
            }
        },
        {
            key: "update",
            value: function update(node, tokens) {
                var divisionMarkdownNode = node; ///
                if (divisionMarkdownNode !== null) {
                    var domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null, context = {
                        tokens: tokens
                    };
                    divisionMarkdownNode.mount(parentDOMElement, siblingDOMElement, context);
                    this.setDivisionMarkdownNode(divisionMarkdownNode);
                }
            }
        },
        {
            key: "clearDivisionMarkdownNode",
            value: function clearDivisionMarkdownNode() {
                var divisionMarkdownNode = null;
                this.setDivisionMarkdownNode(divisionMarkdownNode);
            }
        },
        {
            key: "getDivisionMarkdownNode",
            value: function getDivisionMarkdownNode() {
                var divisionMarkdownNode = this.getState().divisionMarkdownNode;
                return divisionMarkdownNode;
            }
        },
        {
            key: "setDivisionMarkdownNode",
            value: function setDivisionMarkdownNode(divisionMarkdownNode) {
                this.updateState({
                    divisionMarkdownNode: divisionMarkdownNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var divisionMarkdownNode = null;
                this.setState({
                    divisionMarkdownNode: divisionMarkdownNode
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIE1hcmtkb3duRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25OT2RlID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKGRpdmlzaW9uTWFya2Rvd25OT2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTk9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNsZWFyRGl2aXNpb25NYXJrZG93bk5vZGUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBpZiAoZGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJEaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJNYXJrZG93bkRpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVNYXJrZG93bkRpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyTWFya2Rvd25EaXYsXG4gICAgICB1cGRhdGVNYXJrZG93bkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2Rvd25EaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICBcbmA7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25EaXYiLCJjbGVhciIsImRpdmlzaW9uTWFya2Rvd25OT2RlIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJ1bm1vdW50IiwiY2xlYXJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInVwZGF0ZSIsIm5vZGUiLCJ0b2tlbnMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsIm1vdW50Iiwic2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwYXJlbnRDb250ZXh0IiwiY2xlYXJNYXJrZG93bkRpdiIsImJpbmQiLCJ1cGRhdGVNYXJrZG93bkRpdiIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvRkE7OztlQUFBOzs7b0VBbEZzQjtvQkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFBYSxHQUFHO29CQUV6Q0YscUJBQXFCSyxPQUFPLENBQUNEO29CQUU3QixJQUFJLENBQUNFLHlCQUF5QjtnQkFDaEM7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ2pCLElBQU1DLHVCQUF1QkYsTUFBTyxHQUFHO2dCQUV2QyxJQUFJRSx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTVIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFDbkJTLG9CQUFvQixNQUNwQkMsVUFBVTt3QkFDUkgsUUFBQUE7b0JBQ0Y7b0JBRU5DLHFCQUFxQkcsS0FBSyxDQUFDVCxrQkFBa0JPLG1CQUFtQkM7b0JBRWhFLElBQUksQ0FBQ0UsdUJBQXVCLENBQUNKO2dCQUMvQjtZQUNGOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1JLHVCQUF1QjtnQkFFN0IsSUFBSSxDQUFDSSx1QkFBdUIsQ0FBQ0o7WUFDL0I7OztZQUVBVCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFUyx1QkFBeUIsSUFBSSxDQUFDSyxRQUFRLEdBQXRDTDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3Qkosb0JBQW9CO2dCQUMxQyxJQUFJLENBQUNNLFdBQVcsQ0FBQztvQkFDZk4sc0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsdUJBQXVCO2dCQUU3QixJQUFJLENBQUNRLFFBQVEsQ0FBQztvQkFDWlIsc0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLEdBQ3ZDQyxvQkFBb0IsSUFBSSxDQUFDZixNQUFNLENBQUNjLElBQUksQ0FBQyxJQUFJO2dCQUUvQyxPQUFRO29CQUNORCxrQkFBQUE7b0JBQ0FFLG1CQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ04sZUFBZTtZQUN0Qjs7O1dBckVJbkI7cUJBQW9CMEIsYUFBTztBQXVFL0IsaUJBdkVJMUIsYUF1RUcyQixXQUFVO0FBRWpCLGlCQXpFSTNCLGFBeUVHNEIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDOUIifQ==