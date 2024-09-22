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
var BLOCK_LISTING_RULE_NAME = _highmarkmarkdown.ruleNames.BLOCK_LISTING_RULE_NAME;
var nodeMap = Object.assign({}, _highmarkmarkdown.nodeMap, _define_property({}, BLOCK_LISTING_RULE_NAME, _blockListing.default));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVNYXAgYXMgbm9kZU1hcEJhc2UsIHJ1bGVOYW1lcywgTWFya2Rvd25QYXJzZXIgYXMgTWFya2Rvd25QYXJzZXJCYXNlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vYmxvY2tMaXN0aW5nXCI7XG5cbmNvbnN0IHsgQkxPQ0tfTElTVElOR19SVUxFX05BTUUgfSA9IHJ1bGVOYW1lcztcblxuY29uc3Qgbm9kZU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGVNYXBCYXNlLCB7XG4gIFtCTE9DS19MSVNUSU5HX1JVTEVfTkFNRV06IEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duUGFyc2VyIGV4dGVuZHMgTWFya2Rvd25QYXJzZXJCYXNlIHtcbiAgc3RhdGljIG5vZGVNYXAgPSBub2RlTWFwO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tTm90aGluZyhNYXJrZG93blBhcnNlcik7IH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tQk5GKE1hcmtkb3duUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIE1hcmtkb3duUGFyc2VyQmFzZS5mcm9tRW50cmllcyhNYXJrZG93blBhcnNlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blBhcnNlciIsIkJMT0NLX0xJU1RJTkdfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwibm9kZU1hcCIsIk9iamVjdCIsImFzc2lnbiIsIm5vZGVNYXBCYXNlIiwiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZnJvbU5vdGhpbmciLCJNYXJrZG93blBhcnNlckJhc2UiLCJmcm9tQk5GIiwiYm5mIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztnQ0FWbUU7bUVBRW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVDLDBCQUE0QkMsMkJBQVMsQ0FBckNEO0FBRVIsSUFBTUUsVUFBVUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0MseUJBQVcsRUFDM0MscUJBQUNMLHlCQUEwQk0scUJBQXdCO0FBR3RDLElBQUEsQUFBTVAsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUdaUSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsZ0NBQWtCLENBQUNELFdBQVcsQ0FIekNSO1lBRzJEOzs7WUFFdkVVLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFDLEdBQUc7Z0JBQUksT0FBT0YsZ0NBQWtCLENBQUNDLE9BQU8sQ0FMcENWLGdCQUtxRFc7WUFBTTs7O1lBRXZFQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUFJLE9BQU9KLGdDQUFrQixDQUFDRyxXQUFXLENBUGhEWixnQkFPaUVhO1lBQVU7OztXQVAzRWI7RUFBdUJTLGdDQUFrQjtBQUM1RCxpQkFEbUJULGdCQUNaRyxXQUFVQSJ9