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
var BLOCK_LISTING_RULE_NAME = _highmarkgrammars.ruleNames.BLOCK_LISTING_RULE_NAME;
Object.assign(_highmarkgrammars.nodeMap, _define_property({}, BLOCK_LISTING_RULE_NAME, _blockListing.default));
var _class = /*#__PURE__*/ function(MarkdownParser) {
    _inherits(_class, MarkdownParser);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_highmarkgrammars.MarkdownParser);
_define_property(_class, "nodeMap", _highmarkgrammars.nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVNYXAsIHJ1bGVOYW1lcywgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiaGlnaG1hcmstZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9ibG9ja0xpc3RpbmdcIjtcblxuY29uc3QgeyBCTE9DS19MSVNUSU5HX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzO1xuXG5PYmplY3QuYXNzaWduKG5vZGVNYXAsIHtcbiAgW0JMT0NLX0xJU1RJTkdfUlVMRV9OQU1FXTogQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBNYXJrZG93blBhcnNlciB7XG4gIHN0YXRpYyBub2RlTWFwID0gbm9kZU1hcDtcbn1cbiJdLCJuYW1lcyI6WyJCTE9DS19MSVNUSU5HX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsIm5vZGVNYXAiLCJCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUiLCJNYXJrZG93blBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Z0NBRW1EO21FQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQSwwQkFBNEJDLDJCQUFTLENBQXJDRDtBQUVSRSxPQUFPQyxNQUFNLENBQUNDLHlCQUFPLEVBQ25CLHFCQUFDSix5QkFBMEJLLHFCQUF3QjtBQUd0QyxJQUFBLHVCQUFLLEFBQUw7Ozs7Ozs7O0VBQWNDLGdDQUFjO0FBQ3pDLHlCQUFPRixXQUFVQSx5QkFBTyJ9