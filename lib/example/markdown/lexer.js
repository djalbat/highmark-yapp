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
var _index = require("../../index");
var _tokenTypes = require("../../tokenTypes");
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
var first = _necessary.arrayUtilities.first, entries = _index.MarkdownLexer.entries;
entries.forEach(function(entry) {
    var keys = Object.keys(entry), firstKey = first(keys), tokenType = firstKey; ///
    if (tokenType === _tokenTypes.LISTING_TOKEN_TYPE) {
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
}(_index.MarkdownLexer);
_define_property(_class, "entries", entries);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL21hcmtkb3duL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25MZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuXG5pbXBvcnQgeyBMSVNUSU5HX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZW50cmllcyB9ID0gTWFya2Rvd25MZXhlcjtcblxuZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICBmaXJzdEtleSA9IGZpcnN0KGtleXMpLFxuICAgICAgICB0b2tlblR5cGUgPSBmaXJzdEtleTsgLy8vXG5cbiAgaWYgKHRva2VuVHlwZSA9PT0gTElTVElOR19UT0tFTl9UWVBFKSB7XG4gICAgZW50cnlbdG9rZW5UeXBlXSA9IFwiXj09PVwiO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBNYXJrZG93bkxleGVyIHtcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xufVxuXG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImVudHJpZXMiLCJNYXJrZG93bkxleGVyIiwiZm9yRWFjaCIsImVudHJ5Iiwia2V5cyIsIk9iamVjdCIsImZpcnN0S2V5IiwidG9rZW5UeXBlIiwiTElTVElOR19UT0tFTl9UWVBFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozt5QkFFK0I7cUJBRUQ7MEJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxVQUFZQyxvQkFBYSxDQUF6QkQ7QUFFUkEsUUFBUUUsT0FBTyxDQUFDLFNBQUNDO0lBQ2YsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRCxRQUNuQkcsV0FBV1IsTUFBTU0sT0FDakJHLFlBQVlELFVBQVUsR0FBRztJQUUvQixJQUFJQyxjQUFjQyw4QkFBa0IsRUFBRTtRQUNwQ0wsS0FBSyxDQUFDSSxVQUFVLEdBQUc7SUFDckI7QUFDRjtBQUVlLElBQUEsdUJBQUssQUFBTDs7Ozs7Ozs7RUFBY04sb0JBQWE7QUFDeEMseUJBQU9ELFdBQVVBIn0=