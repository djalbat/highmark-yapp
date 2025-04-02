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
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
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
        "\n\n  height: 64rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var count = 0;
var ContentTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ContentTextarea, Textarea);
    function ContentTextarea() {
        _class_call_check(this, ContentTextarea);
        var _this;
        _this = _call_super(this, ContentTextarea, arguments), _define_property(_this, "blurHandler", function(event, element) {
            console.log(blur, count++);
        });
        return _this;
    }
    _create_class(ContentTextarea, [
        {
            key: "getContent",
            value: function getContent() {
                var value = this.getValue(), content = value; ///
                return content;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                var value = content;
                this.setValue(value);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onBlur(this.blurHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offBlur(this.blurHandler);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getContent = this.getContent.bind(this), setContent = this.setContent.bind(this);
                return {
                    getContent: getContent,
                    setContent: setContent
                };
            }
        }
    ]);
    return ContentTextarea;
}(_textarea.default);
_define_property(ContentTextarea, "defaultProperties", {
    className: "content",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(ContentTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5sZXQgY291bnQgPSAwO1xuXG5jbGFzcyBDb250ZW50VGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coYmx1ciwgY291bnQrKylcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50O1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQmx1cih0aGlzLmJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQmx1cih0aGlzLmJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldENvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHNldENvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGVudFwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29udGVudFRleHRhcmVhKWBcblxuICBoZWlnaHQ6IDY0cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiY291bnQiLCJDb250ZW50VGV4dGFyZWEiLCJibHVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJibHVyIiwiZ2V0Q29udGVudCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInNldFZhbHVlIiwiZGlkTW91bnQiLCJvbkJsdXIiLCJ3aWxsVW5tb3VudCIsIm9mZkJsdXIiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrREE7OztlQUFBOzs7b0VBaERzQjsrREFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUlBLFFBQVE7QUFFWixJQUFBLEFBQU1DLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLDZCQUNKQyx3QkFBQUEsZUFBYyxTQUFDQyxPQUFPQztZQUNwQkMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNUDtRQUNwQjs7O2tCQUhJQzs7WUFLSk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxVQUFVRixPQUFPLEdBQUc7Z0JBRTFCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0QsT0FBTztnQkFDaEIsSUFBTUYsUUFBUUU7Z0JBRWQsSUFBSSxDQUFDRSxRQUFRLENBQUNKO1lBQ2hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2IsV0FBVztZQUM5Qjs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNmLFdBQVc7WUFDL0I7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNXLElBQUksQ0FBQyxJQUFJLEdBQ3RDUCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTyxJQUFJLENBQUMsSUFBSTtnQkFFNUMsT0FBUTtvQkFDTlgsWUFBQUE7b0JBQ0FJLFlBQUFBO2dCQUNGO1lBQ0Y7OztXQWxDSVg7RUFBd0JtQixpQkFBUTtBQW9DcEMsaUJBcENJbkIsaUJBb0NHb0IscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7QUFDZDtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN2QiJ9