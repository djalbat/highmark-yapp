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
var _highmarkgrammar = require("highmark-grammar");
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
var BLOCK_LISTING_RULE_NAME = _highmarkgrammar.ruleNames.BLOCK_LISTING_RULE_NAME;
Object.assign(_highmarkgrammar.nodeMap, _define_property({}, BLOCK_LISTING_RULE_NAME, _blockListing.default));
var _class = /*#__PURE__*/ function(MarkdownParser) {
    _inherits(_class, MarkdownParser);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_highmarkgrammar.MarkdownParser);
_define_property(_class, "nodeMap", _highmarkgrammar.nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVNYXAsIHJ1bGVOYW1lcywgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiaGlnaG1hcmstZ3JhbW1hclwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZ1wiO1xuXG5jb25zdCB7IEJMT0NLX0xJU1RJTkdfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXM7XG5cbk9iamVjdC5hc3NpZ24obm9kZU1hcCwge1xuICBbQkxPQ0tfTElTVElOR19SVUxFX05BTUVdOiBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIE1hcmtkb3duUGFyc2VyIHtcbiAgc3RhdGljIG5vZGVNYXAgPSBub2RlTWFwO1xufVxuIl0sIm5hbWVzIjpbIkJMT0NLX0xJU1RJTkdfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibm9kZU1hcCIsIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsIk1hcmtkb3duUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OzsrQkFFbUQ7bUVBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVBLDBCQUE0QkMsMEJBQVMsQ0FBckNEO0FBRVJFLE9BQU9DLE1BQU0sQ0FBQ0Msd0JBQU8sRUFDbkIscUJBQUNKLHlCQUEwQksscUJBQXdCO0FBR3RDLElBQUEsdUJBQUssQUFBTDs7Ozs7Ozs7RUFBY0MsK0JBQWM7QUFDekMseUJBQU9GLFdBQVVBLHdCQUFPIn0=