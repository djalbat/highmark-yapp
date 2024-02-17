"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _highmarkgrammar = require("highmark-grammar");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdown/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdown/parser"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/section/markdown"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./view/input/startRuleName"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, setNonTerminalNodes = _highmarkgrammar.nodeUtilities.setNonTerminalNodes, ruleMapFromRules = _occamparsers.rulesUtilities.ruleMapFromRules, startRuleFromRulesAndStartRuleName = _occamparsers.rulesUtilities.startRuleFromRulesAndStartRuleName;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            _this.update();
        });
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                var bnf = this.getBNF(), rules = rulesFromBNF(bnf), startRuleName = this.getStartRuleName(), lexicalEntries = this.getLexicalEntries();
                var markdownLexer = markdownLexerFromLexicalEntries(lexicalEntries), markdownParser = markdownParserFromRulesAndStartRuleName(rules, startRuleName);
                var content = this.getContent(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens);
                var parseTree = null;
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                this.updateMarkdownSection(node, tokens);
                this.setParseTree(parseTree);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule name"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                    onKeyUp: this.keyUpHandler
                }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_markdown.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var bnf = _parser.default.bnf, entries = _lexer.default.entries, _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialStartRuleName = _this_constructor.initialStartRuleName, content = initialContent, startRuleName = initialStartRuleName, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.setStartRuleName(startRuleName);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContent", '===json\n{\n  "hello": "world"\n}\n===\n');
_define_property(View, "initialStartRuleName", "");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function markdownLexerFromLexicalEntries(lexicalEntries) {
    var entries = lexicalEntries, markdownLexer = _lexer.default.fromEntries(entries);
    return markdownLexer;
}
function markdownParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), markdownParser = new _parser.default(startRule, ruleMap);
    setNonTerminalNodes(markdownParser);
    return markdownParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1ncmFtbWFyXCI7XG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcywgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgTWFya2Rvd25MZXhlciBmcm9tIFwiLi4vbWFya2Rvd24vbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd24vcGFyc2VyXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IE1hcmtkb3duU2VjdGlvbiBmcm9tIFwiLi92aWV3L3NlY3Rpb24vbWFya2Rvd25cIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi92aWV3L2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgc2V0Tm9uVGVybWluYWxOb2RlcyB9ID0gbm9kZVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG5cbiAgICBjb25zdCBtYXJrZG93bkxleGVyID0gbWFya2Rvd25MZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZXIgPSAgbWFya2Rvd25QYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TZWN0aW9uKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8TWFya2Rvd25TZWN0aW9uLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gTWFya2Rvd25QYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBNYXJrZG93bkxleGVyLFxuICAgICAgICAgIHsgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxTdGFydFJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGA9PT1qc29uXG57XG4gIFwiaGVsbG9cIjogXCJ3b3JsZFwiXG59XG49PT1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJcIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gbWFya2Rvd25MZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gbWFya2Rvd25MZXhlcjtcbn1cblxuZnVuY3Rpb24gbWFya2Rvd25QYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIG1hcmtkb3duUGFyc2VyID0gbmV3IE1hcmtkb3duUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlcyhtYXJrZG93blBhcnNlcik7XG5cbiAgcmV0dXJuIG1hcmtkb3duUGFyc2VyO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInNldE5vblRlcm1pbmFsTm9kZXMiLCJub2RlVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInJ1bGVzVXRpbGl0aWVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwia2V5VXBIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZXMiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJtYXJrZG93bkxleGVyIiwibWFya2Rvd25MZXhlckZyb21MZXhpY2FsRW50cmllcyIsIm1hcmtkb3duUGFyc2VyIiwibWFya2Rvd25QYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwidXBkYXRlTWFya2Rvd25TZWN0aW9uIiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiU3RhcnRSdWxlTmFtZUlucHV0Iiwib25LZXlVcCIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJNYXJrZG93blNlY3Rpb24iLCJQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiTWFya2Rvd25QYXJzZXIiLCJlbnRyaWVzIiwiTWFya2Rvd25MZXhlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInNldFN0YXJ0UnVsZU5hbWUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZnJvbUVudHJpZXMiLCJydWxlTWFwIiwic3RhcnRSdWxlIl0sIm1hcHBpbmdz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