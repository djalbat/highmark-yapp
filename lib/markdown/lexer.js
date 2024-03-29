"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownLexer;
    }
});
var _necessary = require("necessary");
var _highmarkmarkdown = require("highmark-markdown");
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
var first = _necessary.arrayUtilities.first, entries = _highmarkmarkdown.MarkdownLexer.entries, BACKTICKS_TOKEN_TYPE = _highmarkmarkdown.tokenTypes.BACKTICKS_TOKEN_TYPE;
entries.forEach(function(entry) {
    var keys = Object.keys(entry), firstKey = first(keys), tokenType = firstKey; ///
    if (tokenType === BACKTICKS_TOKEN_TYPE) {
        entry[tokenType] = "^'''"; ///
    }
});
var MarkdownLexer = /*#__PURE__*/ function(MarkdownLexerBase) {
    _inherits(MarkdownLexer, MarkdownLexerBase);
    var _super = _create_super(MarkdownLexer);
    function MarkdownLexer() {
        _class_call_check(this, MarkdownLexer);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _highmarkmarkdown.MarkdownLexer.fromNothing(MarkdownLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _highmarkmarkdown.MarkdownLexer.fromRules(MarkdownLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _highmarkmarkdown.MarkdownLexer.fromEntries(MarkdownLexer, entries);
            }
        }
    ]);
    return MarkdownLexer;
}(_highmarkmarkdown.MarkdownLexer);
_define_property(MarkdownLexer, "entries", entries);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyB0b2tlblR5cGVzLCBNYXJrZG93bkxleGVyIGFzIE1hcmtkb3duTGV4ZXJCYXNlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBlbnRyaWVzIH0gPSBNYXJrZG93bkxleGVyQmFzZSxcbiAgICAgIHsgQkFDS1RJQ0tTX1RPS0VOX1RZUEUgfSA9IHRva2VuVHlwZXM7XG5cbmVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgZmlyc3RLZXkgPSBmaXJzdChrZXlzKSxcbiAgICAgICAgdG9rZW5UeXBlID0gZmlyc3RLZXk7IC8vL1xuXG4gIGlmICh0b2tlblR5cGUgPT09IEJBQ0tUSUNLU19UT0tFTl9UWVBFKSB7XG4gICAgZW50cnlbdG9rZW5UeXBlXSA9IFwiXicnJ1wiOyAgLy8vXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93bkxleGVyIGV4dGVuZHMgTWFya2Rvd25MZXhlckJhc2Uge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gTWFya2Rvd25MZXhlckJhc2UuZnJvbU5vdGhpbmcoTWFya2Rvd25MZXhlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBNYXJrZG93bkxleGVyQmFzZS5mcm9tUnVsZXMoTWFya2Rvd25MZXhlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIE1hcmtkb3duTGV4ZXJCYXNlLmZyb21FbnRyaWVzKE1hcmtkb3duTGV4ZXIsIGVudHJpZXMpOyB9XG59XG5cbiJdLCJuYW1lcyI6WyJNYXJrZG93bkxleGVyIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImVudHJpZXMiLCJNYXJrZG93bkxleGVyQmFzZSIsIkJBQ0tUSUNLU19UT0tFTl9UWVBFIiwidG9rZW5UeXBlcyIsImZvckVhY2giLCJlbnRyeSIsImtleXMiLCJPYmplY3QiLCJmaXJzdEtleSIsInRva2VuVHlwZSIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7O3lCQWpCVTtnQ0FDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNGLEFBQUVFLFVBQVlDLCtCQUFpQixDQUE3QkQsU0FDRixBQUFFRSx1QkFBeUJDLDRCQUFVLENBQW5DRDtBQUVSRixRQUFRSSxPQUFPLENBQUMsU0FBQ0M7SUFDZixJQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNELFFBQ25CRyxXQUFXVixNQUFNUSxPQUNqQkcsWUFBWUQsVUFBVSxHQUFHO0lBRS9CLElBQUlDLGNBQWNQLHNCQUFzQjtRQUN0Q0csS0FBSyxDQUFDSSxVQUFVLEdBQUcsUUFBUyxHQUFHO0lBQ2pDO0FBQ0Y7QUFFZSxJQUFBLEFBQU1aLDhCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFHWmEsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9ULCtCQUFpQixDQUFDUyxXQUFXLENBSHhDYjtZQUd5RDs7O1lBRXJFYyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9YLCtCQUFpQixDQUFDVSxTQUFTLENBTHpDZCxlQUt5RGU7WUFBUTs7O1lBRTdFQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZYixPQUFPO2dCQUFJLE9BQU9DLCtCQUFpQixDQUFDWSxXQUFXLENBUC9DaEIsZUFPK0RHO1lBQVU7OztXQVB6RUg7RUFBc0JJLCtCQUFpQjtBQUMxRCxpQkFEbUJKLGVBQ1pHLFdBQVVBIn0=