"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingMarkdownNode;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _necessary = require("necessary");
var _easy = require("easy");
var _blockListing = /*#__PURE__*/ _interop_require_default(require("../../blockListing"));
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, mountElement = _easy.elementUtilities.mountElement, unmountElement = _easy.elementUtilities.unmountElement;
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockListingMarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
        {
            key: "getElement",
            value: function getElement() {
                var domElement = this.getDOMElement(), element = domElement.__element__; ///
                return element;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var className = this.className(context), language = className, content = this.content(context), configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockListingStartMarkdownNode = firstChildNode, className = blockListingStartMarkdownNode.className(context);
                return className;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content;
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), blockTextMarkdownNode = secondChildNode; ///
                content = blockTextMarkdownNode.content(context);
                content = content.slice(0, -1);
                return content;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var element = this.getElement();
                mountElement(element);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var element = this.getElement();
                unmountElement(element);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _highmarkmarkdown.MarkdownNode.fromRuleNameChildNodesAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkmarkdown.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGVsZW1lbnRVdGlsaXRpZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nIGZyb20gXCIuLi8uLi9ibG9ja0xpc3RpbmdcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZ2V0RWxlbWVudCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICBlbGVtZW50ID0gZG9tRWxlbWVudC5fX2VsZW1lbnRfXzsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGxhbmd1YWdlID0gY2xhc3NOYW1lLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPXtcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBCbG9ja0xpc3RpbmcuZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBibG9ja0xpc3RpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBibG9ja1RleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGU7IC8vL1xuXG4gICAgY29udGVudCA9IGJsb2NrVGV4dE1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCk7XG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCk7XG5cbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsIm1vdW50RWxlbWVudCIsImVsZW1lbnRVdGlsaXRpZXMiLCJ1bm1vdW50RWxlbWVudCIsImdldEVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwiY2xhc3NOYW1lIiwibGFuZ3VhZ2UiLCJjb250ZW50IiwiY29uZmlndXJhdGlvbiIsImJsb2NrTGlzdGluZyIsIkJsb2NrTGlzdGluZyIsImZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsInNldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJibG9ja1RleHRNYXJrZG93bk5vZGUiLCJzbGljZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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