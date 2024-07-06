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
var MarkdownDiv = /*#__PURE__*/ function(Element) {
    _inherits(MarkdownDiv, Element);
    var _super = _create_super(MarkdownDiv);
    function MarkdownDiv() {
        _class_call_check(this, MarkdownDiv);
        return _super.apply(this, arguments);
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
            value: function update(divisionMarkdownNode, context) {
                if (divisionMarkdownNode !== null) {
                    var domElement = this.getDOMElement(), parentDOMElement = domElement, siblingDOMElement = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIE1hcmtkb3duRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25OT2RlID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpO1xuXG4gICAgaWYgKGRpdmlzaW9uTWFya2Rvd25OT2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTk9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNsZWFyRGl2aXNpb25NYXJrZG93bk5vZGUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBpZiAoZGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJEaXZpc2lvbk1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJNYXJrZG93bkRpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVNYXJrZG93bkRpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyTWFya2Rvd25EaXYsXG4gICAgICB1cGRhdGVNYXJrZG93bkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2Rvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2Rvd25EaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICBcbmA7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25EaXYiLCJjbGVhciIsImRpdmlzaW9uTWFya2Rvd25OT2RlIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJ1bm1vdW50IiwiY2xlYXJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInVwZGF0ZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInNpYmxpbmdET01FbGVtZW50IiwibW91bnQiLCJzZXREaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJjbGVhck1hcmtkb3duRGl2IiwiYmluZCIsInVwZGF0ZU1hcmtkb3duRGl2IiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStFQTs7O2VBQUE7OztvRUE3RXNCO29CQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsNEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFBYSxHQUFHO29CQUV6Q0YscUJBQXFCSyxPQUFPLENBQUNEO29CQUU3QixJQUFJLENBQUNFLHlCQUF5QjtnQkFDaEM7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDbEMsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDLElBQU1OLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFlBQ25CUSxvQkFBb0I7b0JBRTFCRixxQkFBcUJHLEtBQUssQ0FBQ1Asa0JBQWtCTSxtQkFBbUJEO29CQUVoRSxJQUFJLENBQUNHLHVCQUF1QixDQUFDSjtnQkFDL0I7WUFDRjs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSx1QkFBdUI7Z0JBRTdCLElBQUksQ0FBQ0ksdUJBQXVCLENBQUNKO1lBQy9COzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRU8sdUJBQXlCLElBQUksQ0FBQ0ssUUFBUSxHQUF0Q0w7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JKLG9CQUFvQjtnQkFDMUMsSUFBSSxDQUFDTSxXQUFXLENBQUM7b0JBQ2ZOLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLHVCQUF1QjtnQkFFN0IsSUFBSSxDQUFDUSxRQUFRLENBQUM7b0JBQ1pSLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNuQixLQUFLLENBQUNvQixJQUFJLENBQUMsSUFBSSxHQUN2Q0Msb0JBQW9CLElBQUksQ0FBQ2IsTUFBTSxDQUFDWSxJQUFJLENBQUMsSUFBSTtnQkFFL0MsT0FBUTtvQkFDTkQsa0JBQUFBO29CQUNBRSxtQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNOLGVBQWU7WUFDdEI7OztXQWhFSWpCO3FCQUFvQndCLGFBQU87QUFrRS9CLGlCQWxFSXhCLGFBa0VHeUIsV0FBVTtBQUVqQixpQkFwRUl6QixhQW9FRzBCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzVCIn0=