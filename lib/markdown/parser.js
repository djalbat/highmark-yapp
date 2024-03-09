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
var _highmarkgrammars = require("highmark-grammars");
var _blockListing = /*#__PURE__*/ _interop_require_default(require("../node/markdown/blockListing"));
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
var BLOCK_LISTING_MARKDOWN_RULE_NAME = _highmarkgrammars.markdownRuleNames.BLOCK_LISTING_MARKDOWN_RULE_NAME;
Object.assign(_highmarkgrammars.markdownNodeMap, _define_property({}, BLOCK_LISTING_MARKDOWN_RULE_NAME, _blockListing.default));
var nodeMap = _highmarkgrammars.markdownNodeMap; ///
var _class = /*#__PURE__*/ function(MarkdownParser) {
    _inherits(_class, MarkdownParser);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_highmarkgrammars.MarkdownParser);
_define_property(_class, "nodeMap", nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hcmtkb3duTm9kZU1hcCwgbWFya2Rvd25SdWxlTmFtZXMsIE1hcmtkb3duUGFyc2VyIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vYmxvY2tMaXN0aW5nXCI7XG5cbmNvbnN0IHsgQkxPQ0tfTElTVElOR19NQVJLRE9XTl9SVUxFX05BTUUgfSA9IG1hcmtkb3duUnVsZU5hbWVzO1xuXG5PYmplY3QuYXNzaWduKG1hcmtkb3duTm9kZU1hcCwge1xuICBbQkxPQ0tfTElTVElOR19NQVJLRE9XTl9SVUxFX05BTUVdOiBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGVcbn0pO1xuXG5jb25zdCBub2RlTWFwID0gbWFya2Rvd25Ob2RlTWFwOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTWFya2Rvd25QYXJzZXIge1xuICBzdGF0aWMgbm9kZU1hcCA9IG5vZGVNYXA7XG59XG4iXSwibmFtZXMiOlsiQkxPQ0tfTElTVElOR19NQVJLRE9XTl9SVUxFX05BTUUiLCJtYXJrZG93blJ1bGVOYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsIm1hcmtkb3duTm9kZU1hcCIsIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsIm5vZGVNYXAiLCJNYXJrZG93blBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Z0NBRW1FO21FQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUEsbUNBQXFDQyxtQ0FBaUIsQ0FBdEREO0FBRVJFLE9BQU9DLE1BQU0sQ0FBQ0MsaUNBQWUsRUFDM0IscUJBQUNKLGtDQUFtQ0sscUJBQXdCO0FBRzlELElBQU1DLFVBQVVGLGlDQUFlLEVBQUcsR0FBRztBQUV0QixJQUFBLHVCQUFLLEFBQUw7Ozs7Ozs7O0VBQWNHLGdDQUFjO0FBQ3pDLHlCQUFPRCxXQUFVQSJ9