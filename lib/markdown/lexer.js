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
var _class = /*#__PURE__*/ function(MarkdownLexer) {
    _inherits(_class, MarkdownLexer);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_highmarkmarkdown.MarkdownLexer);
_define_property(_class, "entries", entries);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyB0b2tlblR5cGVzLCBNYXJrZG93bkxleGVyIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBlbnRyaWVzIH0gPSBNYXJrZG93bkxleGVyLFxuICAgICAgeyBCQUNLVElDS1NfVE9LRU5fVFlQRSB9ID0gdG9rZW5UeXBlcztcblxuZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICBmaXJzdEtleSA9IGZpcnN0KGtleXMpLFxuICAgICAgICB0b2tlblR5cGUgPSBmaXJzdEtleTsgLy8vXG5cbiAgaWYgKHRva2VuVHlwZSA9PT0gQkFDS1RJQ0tTX1RPS0VOX1RZUEUpIHtcbiAgICBlbnRyeVt0b2tlblR5cGVdID0gXCJeJycnXCI7ICAvLy9cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTWFya2Rvd25MZXhlciB7XG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcbn1cblxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJlbnRyaWVzIiwiTWFya2Rvd25MZXhlciIsIkJBQ0tUSUNLU19UT0tFTl9UWVBFIiwidG9rZW5UeXBlcyIsImZvckVhY2giLCJlbnRyeSIsImtleXMiLCJPYmplY3QiLCJmaXJzdEtleSIsInRva2VuVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7eUJBRStCO2dDQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsVUFBWUMsK0JBQWEsQ0FBekJELFNBQ0YsQUFBRUUsdUJBQXlCQyw0QkFBVSxDQUFuQ0Q7QUFFUkYsUUFBUUksT0FBTyxDQUFDLFNBQUNDO0lBQ2YsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRCxRQUNuQkcsV0FBV1YsTUFBTVEsT0FDakJHLFlBQVlELFVBQVUsR0FBRztJQUUvQixJQUFJQyxjQUFjUCxzQkFBc0I7UUFDdENHLEtBQUssQ0FBQ0ksVUFBVSxHQUFHLFFBQVMsR0FBRztJQUNqQztBQUNGO0FBRWUsSUFBQSx1QkFBSyxBQUFMOzs7Ozs7OztFQUFjUiwrQkFBYTtBQUN4Qyx5QkFBT0QsV0FBVUEifQ==