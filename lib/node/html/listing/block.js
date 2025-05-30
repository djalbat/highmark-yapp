"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHTMLNode;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _blockListing = /*#__PURE__*/ _interop_require_default(require("../../../blockListing"));
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
var BlockListingHTMLNode = /*#__PURE__*/ function(BlockListingHTMLNodeBase) {
    _inherits(BlockListingHTMLNode, BlockListingHTMLNodeBase);
    function BlockListingHTMLNode(outerNode, parentNode, childNodes, domElement, blockListing) {
        _class_call_check(this, BlockListingHTMLNode);
        var _this;
        _this = _call_super(this, BlockListingHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.blockListing = blockListing;
        return _this;
    }
    _create_class(BlockListingHTMLNode, [
        {
            key: "getBlockListing",
            value: function getBlockListing() {
                return this.blockListing;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.blockListing = this.createBlockListing(context);
                siblingDOMElement = this.blockListing.mount(parentDOMElement, siblingDOMElement, context);
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                this.blockListing.unmount(parentDOMElement, context);
                this.blockListing = null;
            }
        },
        {
            key: "createBlockListing",
            value: function createBlockListing(context) {
                var content = this.content(context), className = this.className(context), language = className, configuration = {
                    language: language
                }, blockListing = _blockListing.default.fromContentAndConfiguration(content, configuration);
                return blockListing;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var blockListing = null, blockListingHTMLNode = _highmarkmarkdown.BlockListingHTMLNode.fromNothing(BlockListingHTMLNode, blockListing);
                return blockListingHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                var blockListing = null, blockListingHTMLNode = _highmarkmarkdown.BlockListingHTMLNode.fromOuterNode(BlockListingHTMLNode, outerNode, blockListing);
                return blockListingHTMLNode;
            }
        }
    ]);
    return BlockListingHTMLNode;
}(_highmarkmarkdown.BlockListingHTMLNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQmxvY2tMaXN0aW5nSFRNTE5vZGUgYXMgQmxvY2tMaXN0aW5nSFRNTE5vZGVCYXNlIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCBCbG9ja0xpc3RpbmcgZnJvbSBcIi4uLy4uLy4uL2Jsb2NrTGlzdGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdIVE1MTm9kZSBleHRlbmRzIEJsb2NrTGlzdGluZ0hUTUxOb2RlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgYmxvY2tMaXN0aW5nKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuYmxvY2tMaXN0aW5nID0gYmxvY2tMaXN0aW5nO1xuICB9XG5cbiAgZ2V0QmxvY2tMaXN0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2NrTGlzdGluZztcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5ibG9ja0xpc3RpbmcgPSB0aGlzLmNyZWF0ZUJsb2NrTGlzdGluZyhjb250ZXh0KTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gdGhpcy5ibG9ja0xpc3RpbmcubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5ibG9ja0xpc3RpbmcudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYmxvY2tMaXN0aW5nID0gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZUJsb2NrTGlzdGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBsYW5ndWFnZSA9IGNsYXNzTmFtZSwgLy8vXG4gICAgICAgICAgY29uZmlndXJhdGlvbiA9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrTGlzdGluZyA9IEJsb2NrTGlzdGluZy5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbik7XG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJsb2NrTGlzdGluZyA9IG51bGwsXG4gICAgICAgICAgYmxvY2tMaXN0aW5nSFRNTE5vZGUgPSBCbG9ja0xpc3RpbmdIVE1MTm9kZUJhc2UuZnJvbU5vdGhpbmcoQmxvY2tMaXN0aW5nSFRNTE5vZGUsIGJsb2NrTGlzdGluZyk7XG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBibG9ja0xpc3RpbmcgPSBudWxsLFxuICAgICAgICAgIGJsb2NrTGlzdGluZ0hUTUxOb2RlID0gQmxvY2tMaXN0aW5nSFRNTE5vZGVCYXNlLmZyb21PdXRlck5vZGUoQmxvY2tMaXN0aW5nSFRNTE5vZGUsIG91dGVyTm9kZSwgYmxvY2tMaXN0aW5nKTtcblxuICAgIHJldHVybiBibG9ja0xpc3RpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiYmxvY2tMaXN0aW5nIiwiZ2V0QmxvY2tMaXN0aW5nIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiY3JlYXRlQmxvY2tMaXN0aW5nIiwidW5tb3VudCIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJsYW5ndWFnZSIsImNvbmZpZ3VyYXRpb24iLCJCbG9ja0xpc3RpbmciLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJmcm9tTm90aGluZyIsImJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiQmxvY2tMaXN0aW5nSFRNTE5vZGVCYXNlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7Z0NBSjRDO21FQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQ0FEcERMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQUpITDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ2hELElBQUksQ0FBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQ00sa0JBQWtCLENBQUNEO2dCQUU1Q0Qsb0JBQW9CLElBQUksQ0FBQ0osWUFBWSxDQUFDRSxLQUFLLENBQUNDLGtCQUFrQkMsbUJBQW1CQztnQkFFakYsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSixnQkFBZ0IsRUFBRUUsT0FBTztnQkFDL0IsSUFBSSxDQUFDTCxZQUFZLENBQUNPLE9BQU8sQ0FBQ0osa0JBQWtCRTtnQkFFNUMsSUFBSSxDQUFDTCxZQUFZLEdBQUc7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRCxPQUFPO2dCQUN4QixJQUFNRyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDSCxVQUN2QkksWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0osVUFDM0JLLFdBQVdELFdBQ1hFLGdCQUFlO29CQUNiRCxVQUFBQTtnQkFDRixHQUNBVixlQUFlWSxxQkFBWSxDQUFDQywyQkFBMkIsQ0FBQ0wsU0FBU0c7Z0JBRXZFLE9BQU9YO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTWQsZUFBZSxNQUNmZSx1QkFBdUJDLHNDQUF3QixDQUFDRixXQUFXLENBdkNoRG5CLHNCQXVDdUVLO2dCQUV4RixPQUFPZTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY3JCLFNBQVM7Z0JBQzVCLElBQU1JLGVBQWUsTUFDZmUsdUJBQXVCQyxzQ0FBd0IsQ0FBQ0MsYUFBYSxDQTlDbER0QixzQkE4Q3lFQyxXQUFXSTtnQkFFckcsT0FBT2U7WUFDVDs7O1dBakRtQnBCO0VBQTZCcUIsc0NBQXdCIn0=