"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _class;
    }
});
var _necessary = require("necessary");
var _highmarkgrammar = require("highmark-grammar");
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
var first = _necessary.arrayUtilities.first, entries = _highmarkgrammar.MarkdownLexer.entries, BLOCK_LISTING_TOKEN_TYPE = _highmarkgrammar.tokenTypes.BLOCK_LISTING_TOKEN_TYPE;
entries.forEach(function(entry) {
    var keys = Object.keys(entry), firstKey = first(keys), tokenType = firstKey; ///
    if (tokenType === BLOCK_LISTING_TOKEN_TYPE) {
        entry[tokenType] = "^===";
    }
});
var _class = /*#__PURE__*/ function(MarkdownLexer) {
    _inherits(_class, MarkdownLexer);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_highmarkgrammar.MarkdownLexer);
_define_property(_class, "entries", entries);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCB0b2tlblR5cGVzIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGVudHJpZXMgfSA9IE1hcmtkb3duTGV4ZXIsXG4gICAgICB7IEJMT0NLX0xJU1RJTkdfVE9LRU5fVFlQRSB9ID0gdG9rZW5UeXBlcztcblxuZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICBmaXJzdEtleSA9IGZpcnN0KGtleXMpLFxuICAgICAgICB0b2tlblR5cGUgPSBmaXJzdEtleTsgLy8vXG5cbiAgaWYgKHRva2VuVHlwZSA9PT0gQkxPQ0tfTElTVElOR19UT0tFTl9UWVBFKSB7XG4gICAgZW50cnlbdG9rZW5UeXBlXSA9IFwiXj09PVwiO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBNYXJrZG93bkxleGVyIHtcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xufVxuXG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImVudHJpZXMiLCJNYXJrZG93bkxleGVyIiwiQkxPQ0tfTElTVElOR19UT0tFTl9UWVBFIiwidG9rZW5UeXBlcyIsImZvckVhY2giLCJlbnRyeSIsImtleXMiLCJPYmplY3QiLCJmaXJzdEtleSIsInRva2VuVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7eUJBRStCOytCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsVUFBWUMsOEJBQWEsQ0FBekJELFNBQ0YsQUFBRUUsMkJBQTZCQywyQkFBVSxDQUF2Q0Q7QUFFUkYsUUFBUUksT0FBTyxDQUFDLFNBQUNDO0lBQ2YsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRCxRQUNuQkcsV0FBV1YsTUFBTVEsT0FDakJHLFlBQVlELFVBQVUsR0FBRztJQUUvQixJQUFJQyxjQUFjUCwwQkFBMEI7UUFDMUNHLEtBQUssQ0FBQ0ksVUFBVSxHQUFHO0lBQ3JCO0FBQ0Y7QUFFZSxJQUFBLHVCQUFLLEFBQUw7Ozs7Ozs7O0VBQWNSLDhCQUFhO0FBQ3hDLHlCQUFPRCxXQUFVQSJ9