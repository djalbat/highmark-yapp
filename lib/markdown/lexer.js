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
var _highmarkgrammars = require("highmark-grammars");
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
var first = _necessary.arrayUtilities.first, entries = _highmarkgrammars.MarkdownLexer.entries, BACKTICKS_MARKDOWN_TOKEN_TYPE = _highmarkgrammars.markdownTokenTypes.BACKTICKS_MARKDOWN_TOKEN_TYPE;
entries.forEach(function(entry) {
    var keys = Object.keys(entry), firstKey = first(keys), tokenType = firstKey; ///
    if (tokenType === BACKTICKS_MARKDOWN_TOKEN_TYPE) {
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
}(_highmarkgrammars.MarkdownLexer);
_define_property(_class, "entries", entries);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBtYXJrZG93blRva2VuVHlwZXMgfSBmcm9tIFwiaGlnaG1hcmstZ3JhbW1hcnNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGVudHJpZXMgfSA9IE1hcmtkb3duTGV4ZXIsXG4gICAgICB7IEJBQ0tUSUNLU19NQVJLRE9XTl9UT0tFTl9UWVBFIH0gPSBtYXJrZG93blRva2VuVHlwZXM7XG5cbmVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgZmlyc3RLZXkgPSBmaXJzdChrZXlzKSxcbiAgICAgICAgdG9rZW5UeXBlID0gZmlyc3RLZXk7IC8vL1xuXG4gIGlmICh0b2tlblR5cGUgPT09IEJBQ0tUSUNLU19NQVJLRE9XTl9UT0tFTl9UWVBFKSB7XG4gICAgZW50cnlbdG9rZW5UeXBlXSA9IFwiXicnJ1wiOyAgLy8vXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIE1hcmtkb3duTGV4ZXIge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZW50cmllcyIsIk1hcmtkb3duTGV4ZXIiLCJCQUNLVElDS1NfTUFSS0RPV05fVE9LRU5fVFlQRSIsIm1hcmtkb3duVG9rZW5UeXBlcyIsImZvckVhY2giLCJlbnRyeSIsImtleXMiLCJPYmplY3QiLCJmaXJzdEtleSIsInRva2VuVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7eUJBRStCO2dDQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNGLEFBQUVFLFVBQVlDLCtCQUFhLENBQXpCRCxTQUNGLEFBQUVFLGdDQUFrQ0Msb0NBQWtCLENBQXBERDtBQUVSRixRQUFRSSxPQUFPLENBQUMsU0FBQ0M7SUFDZixJQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNELFFBQ25CRyxXQUFXVixNQUFNUSxPQUNqQkcsWUFBWUQsVUFBVSxHQUFHO0lBRS9CLElBQUlDLGNBQWNQLCtCQUErQjtRQUMvQ0csS0FBSyxDQUFDSSxVQUFVLEdBQUcsUUFBUyxHQUFHO0lBQ2pDO0FBQ0Y7QUFFZSxJQUFBLHVCQUFLLEFBQUw7Ozs7Ozs7O0VBQWNSLCtCQUFhO0FBQ3hDLHlCQUFPRCxXQUFVQSJ9