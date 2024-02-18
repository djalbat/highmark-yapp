"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListing;
    }
});
var _yapp = /*#__PURE__*/ _interop_require_default(require("yapp"));
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
var BlockListing = /*#__PURE__*/ function(Yapp) {
    _inherits(BlockListing, Yapp);
    var _super = _create_super(BlockListing);
    function BlockListing() {
        _class_call_check(this, BlockListing);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListing, null, [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                return _yapp.default.fromClass(BlockListing, properties);
            }
        },
        {
            key: "fromContentAndOptions",
            value: function fromContentAndOptions(content, options) {
                return _yapp.default.fromContentAndOptions(BlockListing, content, options);
            }
        }
    ]);
    return BlockListing;
}(_yapp.default);
_define_property(BlockListing, "defaultProperties", {
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja0xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCJ5YXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZyBleHRlbmRzIFlhcHAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgZmlyYUNvZGU6IHRydWUsXG4gICAgaGlkZGVuR3V0dGVyOiB0cnVlLFxuICAgIGhpZGRlblNjcm9sbGJhcnM6IHRydWVcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7IHJldHVybiBZYXBwLmZyb21DbGFzcyhCbG9ja0xpc3RpbmcsIHByb3BlcnRpZXMpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kT3B0aW9ucyhjb250ZW50LCBvcHRpb25zKSB7IHJldHVybiBZYXBwLmZyb21Db250ZW50QW5kT3B0aW9ucyhCbG9ja0xpc3RpbmcsIGNvbnRlbnQsIG9wdGlvbnMpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiWWFwcCIsImZyb21Db250ZW50QW5kT3B0aW9ucyIsImNvbnRlbnQiLCJvcHRpb25zIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJmaXJhQ29kZSIsImhpZGRlbkd1dHRlciIsImhpZGRlblNjcm9sbGJhcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsNkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQU9aQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsYUFBSSxDQUFDSCxTQUFTLENBUHhDRCxjQU91REc7WUFBYTs7O1lBRWhGRSxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLE9BQU8sRUFBRUMsT0FBTztnQkFBSSxPQUFPSCxhQUFJLENBQUNDLHFCQUFxQixDQVQvREwsY0FTOEVNLFNBQVNDO1lBQVU7OztXQVRqR1A7RUFBcUJJLGFBQUk7QUFDNUMsaUJBRG1CSixjQUNaUSxxQkFBb0I7SUFDekJDLFVBQVU7SUFDVkMsY0FBYztJQUNkQyxrQkFBa0I7QUFDcEIifQ==