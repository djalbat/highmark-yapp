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
                debugger;
                return _yapp.default.fromClass(BlockListing, properties);
            }
        },
        {
            key: "fromContentAndOptions",
            value: function fromContentAndOptions(content, options) {
                debugger;
                return _yapp.default.fromContentAndOptions(BlockListing, content, options);
            }
        }
    ]);
    return BlockListing;
} // export default withStyle(BlockListing)`
 //
 //   border: 0;
 //   padding: ${blockListingPadding};
 //
 // `;
(_yapp.default);
_define_property(BlockListing, "defaultProperties", {
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja0xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCJ5YXBwXCI7XG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgYmxvY2tMaXN0aW5nUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmcgZXh0ZW5kcyBZYXBwIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGZpcmFDb2RlOiB0cnVlLFxuICAgIGhpZGRlbkd1dHRlcjogdHJ1ZSxcbiAgICBoaWRkZW5TY3JvbGxiYXJzOiB0cnVlXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gWWFwcC5mcm9tQ2xhc3MoQmxvY2tMaXN0aW5nLCBwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZE9wdGlvbnMoY29udGVudCwgb3B0aW9ucykge1xuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gWWFwcC5mcm9tQ29udGVudEFuZE9wdGlvbnMoQmxvY2tMaXN0aW5nLCBjb250ZW50LCBvcHRpb25zKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQmxvY2tMaXN0aW5nKWBcbi8vXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgcGFkZGluZzogJHtibG9ja0xpc3RpbmdQYWRkaW5nfTtcbi8vXG4vLyBgO1xuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZyIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsIllhcHAiLCJmcm9tQ29udGVudEFuZE9wdGlvbnMiLCJjb250ZW50Iiwib3B0aW9ucyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZmlyYUNvZGUiLCJoaWRkZW5HdXR0ZXIiLCJoaWRkZW5TY3JvbGxiYXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjtvRUFDSztzQkFFYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSw2QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBT1pDLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUssRUFBRUMsVUFBVTtnQkFDaEMsUUFBUTtnQkFFUixPQUFPQyxhQUFJLENBQUNILFNBQVMsQ0FWSkQsY0FVbUJHO1lBQ3RDOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxPQUFPLEVBQUVDLE9BQU87Z0JBQzNDLFFBQVE7Z0JBRVIsT0FBT0gsYUFBSSxDQUFDQyxxQkFBcUIsQ0FoQmhCTCxjQWdCK0JNLFNBQVNDO1lBQzNEOzs7V0FqQm1CUDtFQW9CckIsMENBQTBDO0NBQzFDLEVBQUU7Q0FDRixlQUFlO0NBQ2YscUNBQXFDO0NBQ3JDLEVBQUU7Q0FDRixLQUFLO0NBekJxQ0ksYUFBSTtBQUM1QyxpQkFEbUJKLGNBQ1pRLHFCQUFvQjtJQUN6QkMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLGtCQUFrQjtBQUNwQiJ9