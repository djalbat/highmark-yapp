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
var _yapp = /*#__PURE__*/ _interop_require_default(require("yapp"));
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _styles = require("./styles");
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
        "\n\n  border: 0;\n  padding: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Listing = /*#__PURE__*/ function(Yapp) {
    _inherits(Listing, Yapp);
    var _super = _create_super(Listing);
    function Listing() {
        _class_call_check(this, Listing);
        return _super.apply(this, arguments);
    }
    return Listing;
}(_yapp.default);
_define_property(Listing, "defaultProperties", {
    className: "listing",
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
});
var _default = (0, _easywithstyle.default)(Listing)(_templateObject(), _styles.listingPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWWFwcCBmcm9tIFwieWFwcFwiO1xuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGxpc3RpbmdQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNsYXNzIExpc3RpbmcgZXh0ZW5kcyBZYXBwIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsaXN0aW5nXCIsXG4gICAgZmlyYUNvZGU6IHRydWUsXG4gICAgaGlkZGVuR3V0dGVyOiB0cnVlLFxuICAgIGhpZGRlblNjcm9sbGJhcnM6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExpc3RpbmcpYFxuXG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogJHtsaXN0aW5nUGFkZGluZ307XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJMaXN0aW5nIiwiWWFwcCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZmlyYUNvZGUiLCJoaWRkZW5HdXR0ZXIiLCJoaWRkZW5TY3JvbGxiYXJzIiwid2l0aFN0eWxlIiwibGlzdGluZ1BhZGRpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OzsyREFkaUI7b0VBQ0s7c0JBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsd0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7V0FBQUE7RUFBZ0JDLGFBQUk7QUFDeEIsaUJBRElELFNBQ0dFLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLGNBQWM7SUFDZEMsa0JBQWtCO0FBQ3BCO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1AsNEJBR1pRLHNCQUFjIn0=