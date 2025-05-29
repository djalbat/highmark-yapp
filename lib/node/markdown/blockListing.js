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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmcgZnJvbSBcIi4uLy4uL2Jsb2NrTGlzdGluZ1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldEJsb2NrTGlzdGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBfX2VsZW1lbnRfXyB9ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gX19lbGVtZW50X187IC8vL1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBtdWx0aXBsaWNpdHkgLSAxO1xuXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoKGluZGV4ICE9PSBmaXJzdEluZGV4KSAmJiAoaW5kZXggIT09IGxhc3RJbmRleCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlQ29udGVudCA9IGNoaWxkTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7Y2hpbGROb2RlQ29udGVudH1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFxuJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGNsYXNzTmFtZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZTtcblxuICAgICAgICBjbGFzc05hbWUgPSBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCk7XG5cbiAgICBibG9ja0xpc3RpbmcuZGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKTtcblxuICAgIGJsb2NrTGlzdGluZy53aWxsVW5tb3VudCgpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGNsYXNzTmFtZSwgLy8vXG4gICAgICAgICAgY29uZmlndXJhdGlvbiA9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IEJsb2NrTGlzdGluZy5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGJsb2NrTGlzdGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZ2V0QmxvY2tMaXN0aW5nIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImJsb2NrTGlzdGluZyIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsImNoaWxkTm9kZUNvbnRlbnQiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwic29tZUNoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiYmxvY2tMaXN0aW5nU3RhcnRNYXJrZG93bk5vZGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZGlkTW91bnQiLCJ1bm1vdW50Iiwid2lsbFVubW91bnQiLCJyZW1vdmVDaGlsZCIsImxhbmd1YWdlIiwiY29uZmlndXJhdGlvbiIsIkJsb2NrTGlzdGluZyIsImZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7Z0NBTlE7bUVBRUo7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CLEFBQUVDLGNBQWdCRixXQUFoQkUsYUFDRkMsZUFBZUQsYUFBYSxHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUQsVUFBVUUsdUJBQVk7Z0JBRTFCLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxhQUFhLEdBQ2JDLFlBQVlILGVBQWU7Z0JBRWpDLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsU0FBQ0MsV0FBV0M7b0JBQ2hDLElBQUksQUFBQ0EsVUFBVUosY0FBZ0JJLFVBQVVILFdBQVk7d0JBQ25ELElBQU1JLG1CQUFtQkYsVUFBVVIsT0FBTyxDQUFDQzt3QkFFM0NELFVBQVUsQUFBQyxHQUFZVSxPQUFWVixTQUEyQixPQUFqQlU7b0JBQ3pCO2dCQUNGO2dCQUVBVixVQUFVQSxRQUFRVyxPQUFPLENBQUMsT0FBT1QsdUJBQVk7Z0JBRTdDLE9BQU9GO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVgsT0FBTztnQkFDZixJQUFJVztnQkFFSixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDTCxXQUFXQztvQkFDN0IsSUFBSUEsVUFBVSxHQUFHO3dCQUNmLElBQU1LLGlCQUFpQk4sV0FDakJPLGdDQUFnQ0Q7d0JBRXRDRixZQUFZRyw4QkFBOEJILFNBQVMsQ0FBQ1g7d0JBRXBELE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1c7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVqQixPQUFPO2dCQUNoRCxJQUFJTDtnQkFFSkEsYUFBYSxJQUFJLENBQUN1QixnQkFBZ0IsQ0FBQ2xCO2dCQUVuQyxJQUFJLENBQUNtQixhQUFhLENBQUN4QjtnQkFFbkJxQixpQkFBaUJJLFlBQVksQ0FBQ3pCLFlBQVlzQjtnQkFFMUMsSUFBTW5CLGVBQWUsSUFBSSxDQUFDSixlQUFlO2dCQUV6Q0ksYUFBYXVCLFFBQVE7WUFDdkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sZ0JBQWdCLEVBQUVoQixPQUFPO2dCQUMvQixJQUFJTDtnQkFFSixJQUFNRyxlQUFlLElBQUksQ0FBQ0osZUFBZTtnQkFFekNJLGFBQWF5QixXQUFXO2dCQUV4QjVCLGFBQWEsSUFBSSxDQUFDQyxhQUFhO2dCQUUvQm9CLGlCQUFpQlEsV0FBVyxDQUFDN0I7Z0JBRTdCQSxhQUFhO2dCQUViLElBQUksQ0FBQ3dCLGFBQWEsQ0FBQ3hCO1lBQ3JCOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJsQixPQUFPO2dCQUN0QixJQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QlcsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ1gsVUFDM0J5QixXQUFXZCxXQUNYZSxnQkFBZTtvQkFDYkQsVUFBQUE7Z0JBQ0YsR0FDQTNCLGVBQWU2QixxQkFBWSxDQUFDQywyQkFBMkIsQ0FBQzdCLFNBQVMyQixnQkFDakUvQixhQUFhRyxhQUFhRixhQUFhO2dCQUU3QyxPQUFPRDtZQUNUOzs7O1lBRU9rQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLDhCQUFZLENBQUNKLGdDQUFnQyxDQXpGMUdwQywwQkF5RnFJcUMsVUFBVUMsWUFBWUM7WUFBVTs7O1dBekZyS3ZDO0VBQWlDd0MsOEJBQVkifQ==