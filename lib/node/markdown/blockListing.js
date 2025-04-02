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
                var multiplicity = this.getMultiplicity(), firstIndex = 0, lastIndex = multiplicity - 1;
                this.forEachChildNode(function(childNode, index) {
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
                var className;
                this.someChildNode(function(childNode, index) {
                    if (index === 0) {
                        var firstChildNode = childNode, blockListingStartMarkdownNode = firstChildNode;
                        className = blockListingStartMarkdownNode.className(context);
                        return true;
                    }
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEJsb2NrTGlzdGluZyBmcm9tIFwiLi4vLi4vYmxvY2tMaXN0aW5nXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBfX2VsZW1lbnRfXyB9ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gX19lbGVtZW50X187IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoKGluZGV4ICE9PSBmaXJzdEluZGV4KSAmJiAoaW5kZXggIT09IGxhc3RJbmRleCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlQ29udGVudCA9IGNoaWxkTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7Y2hpbGROb2RlQ29udGVudH1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFxuJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGNsYXNzTmFtZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZTtcblxuICAgICAgICBjbGFzc05hbWUgPSBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCk7XG5cbiAgICBibG9ja0xpc3RpbmcuZGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIGJsb2NrTGlzdGluZy53aWxsVW5tb3VudCgpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGNsYXNzTmFtZSwgLy8vXG4gICAgICAgICAgY29uZmlndXJhdGlvbiA9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IEJsb2NrTGlzdGluZy5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGJsb2NrTGlzdGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImdldEJsb2NrTGlzdGluZyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiX19lbGVtZW50X18iLCJibG9ja0xpc3RpbmciLCJjb250ZW50IiwiY29udGV4dCIsIkVNUFRZX1NUUklORyIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVDb250ZW50IiwicmVwbGFjZSIsImNsYXNzTmFtZSIsInNvbWVDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImRpZE1vdW50IiwidW5tb3VudCIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJsYW5ndWFnZSIsImNvbmZpZ3VyYXRpb24iLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O2dDQVRRO3lCQUNFO21FQUVOO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQixBQUFFQyxjQUFnQkYsV0FBaEJFLGFBQ0ZDLGVBQWVELGFBQWEsR0FBRztnQkFFckMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlELFVBQVVFLHVCQUFZO2dCQUUxQixJQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsYUFBYSxHQUNiQyxZQUFZSCxlQUFlO2dCQUVqQyxJQUFJLENBQUNJLGdCQUFnQixDQUFDLFNBQUNDLFdBQVdDO29CQUNoQyxJQUFJLEFBQUNBLFVBQVVKLGNBQWdCSSxVQUFVSCxXQUFZO3dCQUNuRCxJQUFNSSxtQkFBbUJGLFVBQVVSLE9BQU8sQ0FBQ0M7d0JBRTNDRCxVQUFVLEFBQUMsR0FBWVUsT0FBVlYsU0FBMkIsT0FBakJVO29CQUN6QjtnQkFDRjtnQkFFQVYsVUFBVUEsUUFBUVcsT0FBTyxDQUFDLE9BQU9ULHVCQUFZO2dCQUU3QyxPQUFPRjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVYLE9BQU87Z0JBQ2YsSUFBSVc7Z0JBRUosSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0wsV0FBV0M7b0JBQzdCLElBQUlBLFVBQVUsR0FBRzt3QkFDZixJQUFNSyxpQkFBaUJOLFdBQ2pCTyxnQ0FBZ0NEO3dCQUV0Q0YsWUFBWUcsOEJBQThCSCxTQUFTLENBQUNYO3dCQUVwRCxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9XO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFakIsT0FBTztnQkFDaEQsSUFBSUw7Z0JBRUpBLGFBQWEsSUFBSSxDQUFDdUIsZ0JBQWdCLENBQUNsQjtnQkFFbkMsSUFBSSxDQUFDbUIsYUFBYSxDQUFDeEI7Z0JBRW5CcUIsaUJBQWlCSSxZQUFZLENBQUN6QixZQUFZc0I7Z0JBRTFDLElBQU1uQixlQUFlLElBQUksQ0FBQ0osZUFBZTtnQkFFekNJLGFBQWF1QixRQUFRO1lBQ3ZCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLGdCQUFnQixFQUFFaEIsT0FBTztnQkFDL0IsSUFBSUw7Z0JBRUosSUFBTUcsZUFBZSxJQUFJLENBQUNKLGVBQWU7Z0JBRXpDSSxhQUFheUIsV0FBVztnQkFFeEI1QixhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFL0JvQixpQkFBaUJRLFdBQVcsQ0FBQzdCO2dCQUU3QkEsYUFBYTtnQkFFYixJQUFJLENBQUN3QixhQUFhLENBQUN4QjtZQUNyQjs7O1lBRUF1QixLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCbEIsT0FBTztnQkFDdEIsSUFBTUQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsVUFDdkJXLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNYLFVBQzNCeUIsV0FBV2QsV0FDWGUsZ0JBQWU7b0JBQ2JELFVBQUFBO2dCQUNGLEdBQ0EzQixlQUFlNkIscUJBQVksQ0FBQ0MsMkJBQTJCLENBQUM3QixTQUFTMkIsZ0JBQ2pFL0IsYUFBYUcsYUFBYUYsYUFBYTtnQkFFN0MsT0FBT0Q7WUFDVDs7OztZQUVPa0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyw4QkFBWSxDQUFDSixnQ0FBZ0MsQ0F6RjFHdEMsMEJBeUZxSXVDLFVBQVVDLFlBQVlDO1lBQVU7OztXQXpGckt6QztFQUFpQzBDLDhCQUFZIn0=