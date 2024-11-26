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
var _blockListing = /*#__PURE__*/ _interop_require_default(require("../../blockListing"));
var _constants = require("../../constants");
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
var first = _necessary.arrayUtilities.first;
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _call_super(this, BlockListingMarkdownNode, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
        {
            key: "getBlockListing",
            value: function getBlockListing() {
                var domElement = this.getDOMElement(), __element__ = domElement.__element__, blockListing = __element__; ///
                return blockListing;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length, firstIndex = 0, lastIndex = childNodesLength - 1;
                childNodes.forEach(function(childNode, index) {
                    if (index !== firstIndex && index !== lastIndex) {
                        var childNodeContent = childNode.content(context);
                        content = "".concat(content).concat(childNodeContent);
                    }
                });
                content = content.replace(/\n$/, _constants.EMPTY_STRING);
                return content;
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
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
                var blockListing = this.getBlockListing();
                blockListing.didMount();
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var domElement;
                var blockListing = this.getBlockListing();
                blockListing.willUnmount();
                domElement = this.getDOMElement();
                parentDOMElement.removeChild(domElement);
                domElement = null;
                this.setDOMElement(domElement);
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content = this.content(context), className = this.className(context), language = className, configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                return domElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZyBmcm9tIFwiLi4vLi4vYmxvY2tMaXN0aW5nXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBfX2VsZW1lbnRfXyB9ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gX19lbGVtZW50X187IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzTGVuZ3RoIC0gMTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKChpbmRleCAhPT0gZmlyc3RJbmRleCkgJiYgKGluZGV4ICE9PSBsYXN0SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUNvbnRlbnQgPSBjaGlsZE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke2NoaWxkTm9kZUNvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcbiQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSB0aGlzLmdldEJsb2NrTGlzdGluZygpO1xuXG4gICAgYmxvY2tMaXN0aW5nLmRpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCk7XG5cbiAgICBibG9ja0xpc3Rpbmcud2lsbFVubW91bnQoKTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBjbGFzc05hbWUsIC8vL1xuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPXtcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBibG9ja0xpc3RpbmcgPSBCbG9ja0xpc3RpbmcuZnJvbUNvbnRlbnRBbmRDb25maWd1cmF0aW9uKGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBibG9ja0xpc3RpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRCbG9ja0xpc3RpbmciLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiYmxvY2tMaXN0aW5nIiwiY29udGVudCIsImNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2RlQ29udGVudCIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJmaXJzdENoaWxkTm9kZSIsImJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImRpZE1vdW50IiwidW5tb3VudCIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJsYW5ndWFnZSIsImNvbmZpZ3VyYXRpb24iLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7Z0NBVFE7eUJBQ0U7bUVBRU47eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJB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