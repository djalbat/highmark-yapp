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
var _index = require("../index");
var _easylayout = require("easy-layout");
var _column = /*#__PURE__*/ _interop_require_default(require("./view/div/column"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var tokensFromMarkdown = _index.grammarUtilities.tokensFromMarkdown, markdownNodeFromTokens = _index.grammarUtilities.markdownNodeFromTokens;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                var content = this.getContent(), markdown = content, tokens = tokensFromMarkdown(markdown), markdownNode = markdownNodeFromTokens(tokens);
                this.clearMarkdownDiv();
                this.updateMarkdownDiv(markdownNode, tokens);
                this.focusContentTextarea();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.update();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                    onKeyUp: this.keyUpHandler
                }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_markdown.default, null)));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialContent = this.constructor.initialContent, content = initialContent; ///
                this.setContent(content);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "initialContent", '```json\n{\n  "foo": "bah"\n}\n```\n');
_define_property(View, "_initialContent", '\n### JavaScript\n  \n\'\'\'javascript\n"use strict";\n\nimport "juxtapose";\n\nimport withStyle from "easy-with-style"; ///\n\nimport { Body } from "easy";\n\nfunction simpleApplication(selector) {\n  const body = new Body(selector);\n\n  body.mount(\n\n    <p>\n      A simple application.\n    </p>\n\n  );\n}\n\nexport default withStyle(simpleApplication)`\n\n  color: \\#333;\n\n`;\n\'\'\'\n\n### JSON\n\n\'\'\'json\n{  \n  "type": "book",\n  "title": "Look to Windward",\n  "author": "Look to Windward",\n  "stores" : [{\n    "identifier": 123\n  }],\n  "details" : {\n    "in-print": true,\n    "stock-count": 123\n  }\n}\n\'\'\'\n\n### XML\n\n\'\'\'xml\n<?xml version="1.0" encoding="UTF-8"?>\n<!-- Look to Windward by Iain M. Banks -->\n<book>\n  <name>\n    Look to Windward\n  </name>\n  <author>\n    Iain M. Banks\n  </author>\n  <language>\n    English\n  </language>\n  <genre>\n    Science fiction\n  </genre>\n</book>\n\'\'\'\n');
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgTWFya2Rvd25EaXYgZnJvbSBcIi4vdmlldy9kaXYvbWFya2Rvd25cIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5cbmNvbnN0IHsgdG9rZW5zRnJvbU1hcmtkb3duLCBtYXJrZG93bk5vZGVGcm9tVG9rZW5zIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hcmtkb3duID0gY29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duKG1hcmtkb3duKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICB0aGlzLmNsZWFyTWFya2Rvd25EaXYoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25EaXYobWFya2Rvd25Ob2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mb2N1c0NvbnRlbnRUZXh0YXJlYSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPE1hcmtkb3duRGl2Lz5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50OyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBcXGBcXGBcXGBqc29uXG57XG4gIFwiZm9vXCI6IFwiYmFoXCJcbn1cblxcYFxcYFxcYFxuYDtcblxuICBzdGF0aWMgX2luaXRpYWxDb250ZW50ID0gYFxuIyMjIEphdmFTY3JpcHRcbiAgXG4nJydqYXZhc2NyaXB0XG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmZ1bmN0aW9uIHNpbXBsZUFwcGxpY2F0aW9uKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keShzZWxlY3Rvcik7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShzaW1wbGVBcHBsaWNhdGlvbilcXGBcblxuICBjb2xvcjogXFxcXCMzMzM7XG5cblxcYDtcbicnJ1xuXG4jIyMgSlNPTlxuXG4nJydqc29uXG57ICBcbiAgXCJ0eXBlXCI6IFwiYm9va1wiLFxuICBcInRpdGxlXCI6IFwiTG9vayB0byBXaW5kd2FyZFwiLFxuICBcImF1dGhvclwiOiBcIkxvb2sgdG8gV2luZHdhcmRcIixcbiAgXCJzdG9yZXNcIiA6IFt7XG4gICAgXCJpZGVudGlmaWVyXCI6IDEyM1xuICB9XSxcbiAgXCJkZXRhaWxzXCIgOiB7XG4gICAgXCJpbi1wcmludFwiOiB0cnVlLFxuICAgIFwic3RvY2stY291bnRcIjogMTIzXG4gIH1cbn1cbicnJ1xuXG4jIyMgWE1MXG5cbicnJ3htbFxuPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48IS0tIExvb2sgdG8gV2luZHdhcmQgYnkgSWFpbiBNLiBCYW5rcyAtLT5cbjxib29rPlxuICA8bmFtZT5cbiAgICBMb29rIHRvIFdpbmR3YXJkXG4gIDwvbmFtZT5cbiAgPGF1dGhvcj5cbiAgICBJYWluIE0uIEJhbmtzXG4gIDwvYXV0aG9yPlxuICA8bGFuZ3VhZ2U+XG4gICAgRW5nbGlzaFxuICA8L2xhbmd1YWdlPlxuICA8Z2VucmU+XG4gICAgU2NpZW5jZSBmaWN0aW9uXG4gIDwvZ2VucmU+XG48L2Jvb2s+XG4nJydcbmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsidG9rZW5zRnJvbU1hcmtkb3duIiwiZ3JhbW1hclV0aWxpdGllcyIsIm1hcmtkb3duTm9kZUZyb21Ub2tlbnMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtYXJrZG93biIsInRva2VucyIsIm1hcmtkb3duTm9kZSIsImNsZWFyTWFya2Rvd25EaXYiLCJ1cGRhdGVNYXJrZG93bkRpdiIsImZvY3VzQ29udGVudFRleHRhcmVhIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkNvbnRlbnRUZXh0YXJlYSIsIm9uS2V5VXAiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiTWFya2Rvd25EaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiY29uc3RydWN0b3IiLCJzZXRDb250ZW50IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIl9pbml0aWFsQ29udGVudCIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEpBOzs7ZUFBQTs7O29FQTFKc0I7b0JBRUU7cUJBQ1M7MEJBQ3dCOzZEQUVuQztpRUFDQzsrREFDQzsrREFDQTs4REFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFRQSxxQkFBK0NDLHVCQUFnQixDQUEvREQsb0JBQW9CRSx5QkFBMkJELHVCQUFnQixDQUEzQ0M7QUFFNUIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLE1BQUtDLE1BQU07UUFDYjs7O2tCQUhJSjs7WUFLSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxXQUFXRixTQUNYRyxTQUFTWCxtQkFBbUJVLFdBQzVCRSxlQUFlVix1QkFBdUJTO2dCQUU1QyxJQUFJLENBQUNFLGdCQUFnQjtnQkFFckIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0YsY0FBY0Q7Z0JBRXJDLElBQUksQ0FBQ0ksb0JBQW9CO1lBQzNCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ1QsTUFBTTtZQUNiOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsaUJBQVcsc0JBQ1Ysb0JBQUNDLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDBCQUdaLG9CQUFDQyxnQkFBZTtvQkFBQ0MsU0FBUyxJQUFJLENBQUNwQixZQUFZO29DQUcvQyxvQkFBQ3FCLCtCQUFtQix1QkFDcEIsb0JBQUNDLGVBQVMsc0JBQ1Isb0JBQUNDLGlCQUFXO1lBS3BCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBTSxBQUFFQyxpQkFBbUIsSUFBSSxDQUFDQyxXQUFXLENBQW5DRCxnQkFDRnRCLFVBQVVzQixnQkFBZ0IsR0FBRztnQkFFbkMsSUFBSSxDQUFDRSxVQUFVLENBQUN4QjtZQUNsQjs7O1dBdERJTDtxQkFBYThCLGFBQU87QUF3RHhCLGlCQXhESTlCLE1Bd0RHK0IsV0FBVTtBQUVqQixpQkExREkvQixNQTBER2dDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBRUEsaUJBOURJakMsTUE4REcyQixrQkFBa0I7QUFPekIsaUJBckVJM0IsTUFxRUdrQyxtQkFBbUI7SUF1RTVCLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNuQyJ9