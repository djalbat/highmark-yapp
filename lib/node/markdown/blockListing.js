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
var _highmarkgrammars = require("highmark-grammars");
var _easy = require("easy");
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, mountElement = _easy.elementMixins.mountElement, unmountElement = _easy.elementMixins.unmountElement;
var BlockListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockListingMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockListingMarkdownNode);
    function BlockListingMarkdownNode() {
        _class_call_check(this, BlockListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockListingMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var language = this.getLanguage(), content = this.getContent(context), configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration), domElement = blockListing.getDOMElement();
                this.setDOMElement(domElement);
                return domElement;
            }
        },
        {
            key: "getContent",
            value: function getContent(context) {
                var content;
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), blockTextMarkdownNode = secondChildNode; ///
                content = blockTextMarkdownNode.getContent(context);
                content = content.slice(0, -1);
                return content;
            }
        },
        {
            key: "getLanguage",
            value: function getLanguage() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), blockListingStartMarkdownNode = firstChildNode, language = blockListingStartMarkdownNode.getLanguage();
                return language;
            }
        },
        {
            key: "getBlockListing",
            value: function getBlockListing() {
                var domElement = this.getDOMElement(), element = domElement.__element__, blockListing = element; ///
                return blockListing;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var blockListing = this.getBlockListing(), element = blockListing; ///
                mountElement(element);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var blockListing = this.getBlockListing(), element = blockListing; ///
                unmountElement(element);
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _highmarkgrammars.MarkdownNode.fromRuleNameAndChildNodes(BlockListingMarkdownNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _highmarkgrammars.MarkdownNode.fromRuleNameChildNodesAndPrecedence(BlockListingMarkdownNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return BlockListingMarkdownNode;
}(_highmarkgrammars.MarkdownNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrTGlzdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTWFya2Rvd25Ob2RlIH0gZnJvbSBcImhpZ2htYXJrLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBlbGVtZW50TWl4aW5zIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgQmxvY2tMaXN0aW5nIGZyb20gXCIuLi8uLi9ibG9ja0xpc3RpbmdcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudE1peGlucztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjb25maWd1cmF0aW9uID17XG4gICAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gQmxvY2tMaXN0aW5nLmZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gYmxvY2tMaXN0aW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICBjb250ZW50ID0gYmxvY2tUZXh0TWFya2Rvd25Ob2RlLmdldENvbnRlbnQoY29udGV4dCk7XG5cbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgwLCAtMSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBibG9ja0xpc3RpbmdTdGFydE1hcmtkb3duTm9kZS5nZXRMYW5ndWFnZSgpO1xuXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xuICB9XG5cbiAgZ2V0QmxvY2tMaXN0aW5nKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBlbGVtZW50ID0gZG9tRWxlbWVudC5fX2VsZW1lbnRfXywgLy8vXG4gICAgICAgICAgYmxvY2tMaXN0aW5nID0gZWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgYmxvY2tMaXN0aW5nID0gdGhpcy5nZXRCbG9ja0xpc3RpbmcoKSxcbiAgICAgICAgICBlbGVtZW50ID0gYmxvY2tMaXN0aW5nOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IHRoaXMuZ2V0QmxvY2tMaXN0aW5nKCksXG4gICAgICAgICAgZWxlbWVudCA9IGJsb2NrTGlzdGluZzsgLy8vXG5cbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKEJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsIm1vdW50RWxlbWVudCIsImVsZW1lbnRNaXhpbnMiLCJ1bm1vdW50RWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZXh0IiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29uZmlndXJhdGlvbiIsImJsb2NrTGlzdGluZyIsIkJsb2NrTGlzdGluZyIsImZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwiYmxvY2tUZXh0TWFya2Rvd25Ob2RlIiwic2xpY2UiLCJmaXJzdENoaWxkTm9kZSIsImJsb2NrTGlzdGluZ1N0YXJ0TWFya2Rvd25Ob2RlIiwiZ2V0QmxvY2tMaXN0aW5nIiwiZWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7Z0NBVFE7b0JBQ0M7eUJBQ0M7bUVBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkMsUUFDUEMsZUFBaUNDLG1CQUFhLENBQTlDRCxjQUFjRSxpQkFBbUJELG1CQUFhLENBQWhDQztBQUVQLElBQUEsQUFBTU4seUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQk8sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNKLFVBQzFCSyxnQkFBZTtvQkFDYkosVUFBQUE7Z0JBQ0YsR0FDQUssZUFBZUMscUJBQVksQ0FBQ0MsMkJBQTJCLENBQUNMLFNBQVNFLGdCQUNqRUksYUFBYUgsYUFBYUksYUFBYTtnQkFFN0MsSUFBSSxDQUFDQyxhQUFhLENBQUNGO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdKLE9BQU87Z0JBQ2hCLElBQUlHO2dCQUVKLElBQU1TLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxrQkFBa0JuQixPQUFPaUIsYUFDekJHLHdCQUF3QkQsaUJBQWlCLEdBQUc7Z0JBRWxEWCxVQUFVWSxzQkFBc0JYLFVBQVUsQ0FBQ0o7Z0JBRTNDRyxVQUFVQSxRQUFRYSxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUU1QixPQUFPYjtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1VLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CSSxpQkFBaUJ4QixNQUFNbUIsYUFDdkJNLGdDQUFnQ0QsZ0JBQ2hDaEIsV0FBV2lCLDhCQUE4QmhCLFdBQVc7Z0JBRTFELE9BQU9EO1lBQ1Q7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CVSxVQUFVWCxXQUFXWSxXQUFXLEVBQ2hDZixlQUFlYyxTQUFTLEdBQUc7Z0JBRWpDLE9BQU9kO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1oQixlQUFlLElBQUksQ0FBQ2EsZUFBZSxJQUNuQ0MsVUFBVWQsY0FBYyxHQUFHO2dCQUVqQ1YsYUFBYXdCO1lBQ2Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpCLGVBQWUsSUFBSSxDQUFDYSxlQUFlLElBQ25DQyxVQUFVZCxjQUFjLEdBQUc7Z0JBRWpDUixlQUFlc0I7WUFDakI7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxRQUFRLEVBQUViLFVBQVU7Z0JBQUksT0FBT2MsOEJBQVksQ0FBQ0YseUJBQXlCLENBNURuRmhDLDBCQTREOEdpQyxVQUFVYjtZQUFhOzs7WUFFakplLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0YsUUFBUSxFQUFFYixVQUFVLEVBQUVnQixVQUFVO2dCQUFJLE9BQU9GLDhCQUFZLENBQUNDLG1DQUFtQyxDQTlEbkhuQywwQkE4RDhJaUMsVUFBVWIsWUFBWWdCO1lBQWE7OztXQTlEakxwQztFQUFpQ2tDLDhCQUFZIn0=