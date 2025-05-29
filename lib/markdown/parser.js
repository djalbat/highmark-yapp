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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BLOCK_LISTING_MARKDOWN_RULE_NAME = _highmarkmarkdown.markdownRuleNames.BLOCK_LISTING_MARKDOWN_RULE_NAME;
var nodeMap = Object.assign({}, _highmarkmarkdown.markdownNodeMap, _define_property({}, BLOCK_LISTING_MARKDOWN_RULE_NAME, _blockListing.default));
var MarkdownParser = /*#__PURE__*/ function(MarkdownParserBase) {
    _inherits(MarkdownParser, MarkdownParserBase);
    function MarkdownParser() {
        _class_call_check(this, MarkdownParser);
        return _call_super(this, MarkdownParser, arguments);
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
_define_property(MarkdownParser, "nodeMap", nodeMap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hcmtkb3duTm9kZU1hcCBhcyBub2RlTWFwQmFzZSwgTWFya2Rvd25QYXJzZXIgYXMgTWFya2Rvd25QYXJzZXJCYXNlLCBtYXJrZG93blJ1bGVOYW1lcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZ1wiO1xuXG5jb25zdCB7IEJMT0NLX0xJU1RJTkdfTUFSS0RPV05fUlVMRV9OQU1FIH0gPSBtYXJrZG93blJ1bGVOYW1lcztcblxuY29uc3Qgbm9kZU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGVNYXBCYXNlLCB7XG4gIFtCTE9DS19MSVNUSU5HX01BUktET1dOX1JVTEVfTkFNRV06IEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duUGFyc2VyIGV4dGVuZHMgTWFya2Rvd25QYXJzZXJCYXNlIHtcbiAgc3RhdGljIG5vZGVNYXAgPSBub2RlTWFwO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tTm90aGluZyhNYXJrZG93blBhcnNlcik7IH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tQk5GKE1hcmtkb3duUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tRW50cmllcyhNYXJrZG93blBhcnNlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlciIsIkJMT0NLX0xJU1RJTkdfTUFSS0RPV05fUlVMRV9OQU1FIiwibWFya2Rvd25SdWxlTmFtZXMiLCJub2RlTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwibm9kZU1hcEJhc2UiLCJCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUiLCJmcm9tTm90aGluZyIsIk1hcmtkb3duUGFyc2VyQmFzZSIsImZyb21CTkYiLCJibmYiLCJmcm9tRW50cmllcyIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O2dDQVZtRjttRUFFbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsbUNBQXFDQyxtQ0FBaUIsQ0FBdEREO0FBRVIsSUFBTUUsVUFBVUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0MsaUNBQVcsRUFDM0MscUJBQUNMLGtDQUFtQ00scUJBQXdCO0FBRy9DLElBQUEsQUFBTVAsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBR1pRLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxnQ0FBa0IsQ0FBQ0QsV0FBVyxDQUh6Q1I7WUFHMkQ7OztZQUV2RVUsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUUMsR0FBRztnQkFBSSxPQUFPRixnQ0FBa0IsQ0FBQ0MsT0FBTyxDQUxwQ1YsZ0JBS3FEVztZQUFNOzs7WUFFdkVDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLE9BQU87Z0JBQUksT0FBT0osZ0NBQWtCLENBQUNHLFdBQVcsQ0FQaERaLGdCQU9pRWE7WUFBVTs7O1dBUDNFYjtFQUF1QlMsZ0NBQWtCO0FBQzVELGlCQURtQlQsZ0JBQ1pHLFdBQVVBIn0=