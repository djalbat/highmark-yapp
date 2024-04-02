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
var first = _necessary.arrayUtilities.first, BACKTICKS_TOKEN_TYPE = _highmarkmarkdown.tokenTypes.BACKTICKS_TOKEN_TYPE, entriesBase = _highmarkmarkdown.MarkdownLexer.entries;
var entries = entriesBase.map(function(entry) {
    var keys = Object.keys(entry), firstKey = first(keys), tokenType = firstKey; ///
    if (tokenType === BACKTICKS_TOKEN_TYPE) {
        entry = Object.assign({}, entry, _define_property({}, BACKTICKS_TOKEN_TYPE, "^'''"));
    }
    return entry;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyB0b2tlblR5cGVzLCBNYXJrZG93bkxleGVyIGFzIE1hcmtkb3duTGV4ZXJCYXNlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBCQUNLVElDS1NfVE9LRU5fVFlQRSB9ID0gdG9rZW5UeXBlcyxcbiAgICAgIHsgZW50cmllczogZW50cmllc0Jhc2UgfSA9IE1hcmtkb3duTGV4ZXJCYXNlO1xuXG5jb25zdCBlbnRyaWVzID0gZW50cmllc0Jhc2UubWFwKChlbnRyeSkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICBmaXJzdEtleSA9IGZpcnN0KGtleXMpLFxuICAgICAgICB0b2tlblR5cGUgPSBmaXJzdEtleTsgLy8vXG5cbiAgaWYgKHRva2VuVHlwZSA9PT0gQkFDS1RJQ0tTX1RPS0VOX1RZUEUpIHtcbiAgICBlbnRyeSA9IE9iamVjdC5hc3NpZ24oe30sIGVudHJ5LCB7XG4gICAgICBbQkFDS1RJQ0tTX1RPS0VOX1RZUEVdOiBcIl4nJydcIlxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duTGV4ZXIgZXh0ZW5kcyBNYXJrZG93bkxleGVyQmFzZSB7XG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBNYXJrZG93bkxleGVyQmFzZS5mcm9tTm90aGluZyhNYXJrZG93bkxleGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIE1hcmtkb3duTGV4ZXJCYXNlLmZyb21SdWxlcyhNYXJrZG93bkxleGVyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gTWFya2Rvd25MZXhlckJhc2UuZnJvbUVudHJpZXMoTWFya2Rvd25MZXhlciwgZW50cmllcyk7IH1cbn1cblxuIl0sIm5hbWVzIjpbIk1hcmtkb3duTGV4ZXIiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiQkFDS1RJQ0tTX1RPS0VOX1RZUEUiLCJ0b2tlblR5cGVzIiwiZW50cmllcyIsImVudHJpZXNCYXNlIiwiTWFya2Rvd25MZXhlckJhc2UiLCJtYXAiLCJlbnRyeSIsImtleXMiLCJPYmplY3QiLCJmaXJzdEtleSIsInRva2VuVHlwZSIsImFzc2lnbiIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7Ozt5QkFyQlU7Z0NBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSx1QkFBeUJDLDRCQUFVLENBQW5DRCxzQkFDQUUsQUFBU0MsY0FBZ0JDLCtCQUFpQixDQUExQ0Y7QUFFUixJQUFNQSxVQUFVQyxZQUFZRSxHQUFHLENBQUMsU0FBQ0M7SUFDL0IsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRCxRQUNuQkcsV0FBV1gsTUFBTVMsT0FDakJHLFlBQVlELFVBQVUsR0FBRztJQUUvQixJQUFJQyxjQUFjVixzQkFBc0I7UUFDdENNLFFBQVFFLE9BQU9HLE1BQU0sQ0FBQyxDQUFDLEdBQUdMLE9BQ3hCLHFCQUFDTixzQkFBdUI7SUFFNUI7SUFFQSxPQUFPTTtBQUNUO0FBRWUsSUFBQSxBQUFNVCw4QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBR1plLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPUiwrQkFBaUIsQ0FBQ1EsV0FBVyxDQUh4Q2Y7WUFHeUQ7OztZQUVyRWdCLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQUksT0FBT1YsK0JBQWlCLENBQUNTLFNBQVMsQ0FMekNoQixlQUt5RGlCO1lBQVE7OztZQUU3RUMsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWWIsT0FBTztnQkFBSSxPQUFPRSwrQkFBaUIsQ0FBQ1csV0FBVyxDQVAvQ2xCLGVBTytESztZQUFVOzs7V0FQekVMO0VBQXNCTywrQkFBaUI7QUFDMUQsaUJBRG1CUCxlQUNaSyxXQUFVQSJ9