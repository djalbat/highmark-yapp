"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListing;
    }
});
var _yapp = /*#__PURE__*/ _interop_require_default(require("yapp"));
var _highmarkmarkdown = require("highmark-markdown");
var _easy = require("easy");
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
var mountElement = _easy.elementUtilities.mountElement, unmountElement = _easy.elementUtilities.unmountElement, remove = _highmarkmarkdown.domUtilities.remove, insertAfter = _highmarkmarkdown.domUtilities.insertAfter, insertBeforehand = _highmarkmarkdown.domUtilities.insertBeforehand;
var BlockListing = /*#__PURE__*/ function(Yapp) {
    _inherits(BlockListing, Yapp);
    function BlockListing() {
        _class_call_check(this, BlockListing);
        return _call_super(this, BlockListing, arguments);
    }
    _create_class(BlockListing, [
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement = this.getDOMElement();
                siblingDOMElement !== null ? insertAfter(domElement, parentDOMElement, siblingDOMElement) : insertBeforehand(domElement, parentDOMElement);
                var element = this; ///
                mountElement(element);
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var element = this; ///
                unmountElement(element);
                var domElement = this.getDOMElement();
                remove(domElement, parentDOMElement);
            }
        }
    ], [
        {
            key: "fromContentAndConfiguration",
            value: function fromContentAndConfiguration(content, configuration) {
                return _yapp.default.fromContentAndConfiguration(BlockListing, content, configuration);
            }
        }
    ]);
    return BlockListing;
}(_yapp.default);
_define_property(BlockListing, "defaultProperties", {
    editable: false,
    firaCode: true,
    hiddenGutter: true,
    hiddenScrollbars: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja0xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCJ5YXBwXCI7XG5cbmltcG9ydCB7IGRvbVV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuaW1wb3J0IHsgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QmVmb3JlaGFuZCB9ID0gZG9tVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmcgZXh0ZW5kcyBZYXBwIHtcbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICBmaXJhQ29kZTogdHJ1ZSxcbiAgICBoaWRkZW5HdXR0ZXI6IHRydWUsXG4gICAgaGlkZGVuU2Nyb2xsYmFyczogdHJ1ZVxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oY29udGVudCwgY29uZmlndXJhdGlvbikgeyByZXR1cm4gWWFwcC5mcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24oQmxvY2tMaXN0aW5nLCBjb250ZW50LCBjb25maWd1cmF0aW9uKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZyIsIm1vdW50RWxlbWVudCIsImVsZW1lbnRVdGlsaXRpZXMiLCJ1bm1vdW50RWxlbWVudCIsInJlbW92ZSIsImRvbVV0aWxpdGllcyIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZWxlbWVudCIsInVubW91bnQiLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJjb250ZW50IiwiY29uZmlndXJhdGlvbiIsIllhcHAiLCJkZWZhdWx0UHJvcGVydGllcyIsImVkaXRhYmxlIiwiZmlyYUNvZGUiLCJoaWRkZW5HdXR0ZXIiLCJoaWRkZW5TY3JvbGxiYXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjtnQ0FFWTtvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBUUMsZUFBaUNDLHNCQUFnQixDQUFqREQsY0FBY0UsaUJBQW1CRCxzQkFBZ0IsQ0FBbkNDLGdCQUNkQyxTQUEwQ0MsOEJBQVksQ0FBdERELFFBQVFFLGNBQWtDRCw4QkFBWSxDQUE5Q0MsYUFBYUMsbUJBQXFCRiw4QkFBWSxDQUFqQ0U7QUFFZCxJQUFBLEFBQU1QLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CUSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFcENILHNCQUFzQixPQUNyQkosWUFBWU0sWUFBWUgsa0JBQWtCQyxxQkFDeENILGlCQUFpQkssWUFBWUg7Z0JBRWpDLElBQU1LLFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCYixhQUFhYTtnQkFFYkosb0JBQW9CRSxZQUFhLEdBQUc7Z0JBRXBDLE9BQU9GO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sZ0JBQWdCLEVBQUVFLE9BQU87Z0JBQy9CLElBQU1HLFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCWCxlQUFlVztnQkFFZixJQUFNRixhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNULE9BQU9RLFlBQVlIO1lBQ3JCOzs7O1lBU09PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsT0FBTyxFQUFFQyxhQUFhO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0gsMkJBQTJCLENBbENqRmhCLGNBa0NnR2lCLFNBQVNDO1lBQWdCOzs7V0FsQ3pIbEI7RUFBcUJtQixhQUFJO0FBMkI1QyxpQkEzQm1CbkIsY0EyQlpvQixxQkFBb0I7SUFDekJDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLGtCQUFrQjtBQUNwQiJ9