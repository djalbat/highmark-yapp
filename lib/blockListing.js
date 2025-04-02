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
var BlockListing = /*#__PURE__*/ function(Yapp) {
    _inherits(BlockListing, Yapp);
    function BlockListing() {
        _class_call_check(this, BlockListing);
        return _call_super(this, BlockListing, arguments);
    }
    _create_class(BlockListing, null, [
        {
            key: "fromContentAndConfiguration",
            value: function fromContentAndConfiguration(content, configuration) {
                return _yapp.default.fromContentAndConfiguration(BlockListing, content, configuration);
            }
        }
    ]);
    return BlockListing;
}(_yapp.default);
_define_property(BlockListing, "defaultProperties", {
    editable: false,
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja0xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCJ5YXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZyBleHRlbmRzIFlhcHAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgZWRpdGFibGU6IGZhbHNlLFxuICAgIGZpcmFDb2RlOiB0cnVlLFxuICAgIGhpZGRlbkd1dHRlcjogdHJ1ZSxcbiAgICBoaWRkZW5TY3JvbGxiYXJzOiB0cnVlXG4gIH07XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSB7IHJldHVybiBZYXBwLmZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihCbG9ja0xpc3RpbmcsIGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nIiwiZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uIiwiY29udGVudCIsImNvbmZpZ3VyYXRpb24iLCJZYXBwIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJlZGl0YWJsZSIsImZpcmFDb2RlIiwiaGlkZGVuR3V0dGVyIiwiaGlkZGVuU2Nyb2xsYmFycyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFRWkMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyxPQUFPLEVBQUVDLGFBQWE7Z0JBQUksT0FBT0MsYUFBSSxDQUFDSCwyQkFBMkIsQ0FSakZELGNBUWdHRSxTQUFTQztZQUFnQjs7O1dBUnpISDtFQUFxQkksYUFBSTtBQUM1QyxpQkFEbUJKLGNBQ1pLLHFCQUFvQjtJQUN6QkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLGNBQWM7SUFDZEMsa0JBQWtCO0FBQ3BCIn0=