"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownParser;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
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
var BLOCK_LISTING_RULE_NAME = _highmarkmarkdown.ruleNames.BLOCK_LISTING_RULE_NAME;
Object.assign(_highmarkmarkdown.nodeMap, _define_property({}, BLOCK_LISTING_RULE_NAME, _blockListing.default));
var MarkdownParser = /*#__PURE__*/ function(MarkdownParserBase) {
    _inherits(MarkdownParser, MarkdownParserBase);
    var _super = _create_super(MarkdownParser);
    function MarkdownParser() {
        _class_call_check(this, MarkdownParser);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _highmarkmarkdown.MarkdownParser.fromNothing(MarkdownParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _highmarkmarkdown.MarkdownParser.fromBNF(MarkdownParser, bnf);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _highmarkmarkdown.MarkdownParser.fromEntries(MarkdownParser, entries);
            }
        }
    ]);
    return MarkdownParser;
}(_highmarkmarkdown.MarkdownParser);
_define_property(MarkdownParser, "nodeMap", _highmarkmarkdown.nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVNYXAsIHJ1bGVOYW1lcywgTWFya2Rvd25QYXJzZXIgYXMgTWFya2Rvd25QYXJzZXJCYXNlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vYmxvY2tMaXN0aW5nXCI7XG5cbmNvbnN0IHsgQkxPQ0tfTElTVElOR19SVUxFX05BTUUgfSA9IHJ1bGVOYW1lcztcblxuT2JqZWN0LmFzc2lnbihub2RlTWFwLCB7XG4gIFtCTE9DS19MSVNUSU5HX1JVTEVfTkFNRV06IEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duUGFyc2VyIGV4dGVuZHMgTWFya2Rvd25QYXJzZXJCYXNlIHtcbiAgc3RhdGljIG5vZGVNYXAgPSBub2RlTWFwO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tTm90aGluZyhNYXJrZG93blBhcnNlcik7IH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tQk5GKE1hcmtkb3duUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tRW50cmllcyhNYXJrZG93blBhcnNlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlciIsIkJMT0NLX0xJU1RJTkdfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibm9kZU1hcCIsIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZyb21Ob3RoaW5nIiwiTWFya2Rvd25QYXJzZXJCYXNlIiwiZnJvbUJORiIsImJuZiIsImZyb21FbnRyaWVzIiwiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7Z0NBVm9EO21FQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQywwQkFBNEJDLDJCQUFTLENBQXJDRDtBQUVSRSxPQUFPQyxNQUFNLENBQUNDLHlCQUFPLEVBQ25CLHFCQUFDSix5QkFBMEJLLHFCQUF3QjtBQUd0QyxJQUFBLEFBQU1OLCtCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFHWk8sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGdDQUFrQixDQUFDRCxXQUFXLENBSHpDUDtZQUcyRDs7O1lBRXZFUyxLQUFBQTttQkFBUCxTQUFPQSxRQUFRQyxHQUFHO2dCQUFJLE9BQU9GLGdDQUFrQixDQUFDQyxPQUFPLENBTHBDVCxnQkFLcURVO1lBQU07OztZQUV2RUMsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsT0FBTztnQkFBSSxPQUFPSixnQ0FBa0IsQ0FBQ0csV0FBVyxDQVBoRFgsZ0JBT2lFWTtZQUFVOzs7V0FQM0VaO0VBQXVCUSxnQ0FBa0I7QUFDNUQsaUJBRG1CUixnQkFDWkssV0FBVUEseUJBQU8ifQ==