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
var remove = _highmarkmarkdown.domUtilities.remove, insertAfter = _highmarkmarkdown.domUtilities.insertAfter, insertBeforehand = _highmarkmarkdown.domUtilities.insertBeforehand;
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
                this.didMount();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja0xpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCJ5YXBwXCI7XG5cbmltcG9ydCB7IGRvbVV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5jb25zdCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSA9IGRvbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nIGV4dGVuZHMgWWFwcCB7XG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICBpbnNlcnRBZnRlcihkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaWRNb3VudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgZWRpdGFibGU6IGZhbHNlLFxuICAgIGZpcmFDb2RlOiB0cnVlLFxuICAgIGhpZGRlbkd1dHRlcjogdHJ1ZSxcbiAgICBoaWRkZW5TY3JvbGxiYXJzOiB0cnVlXG4gIH07XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihjb250ZW50LCBjb25maWd1cmF0aW9uKSB7IHJldHVybiBZYXBwLmZyb21Db250ZW50QW5kQ29uZmlndXJhdGlvbihCbG9ja0xpc3RpbmcsIGNvbnRlbnQsIGNvbmZpZ3VyYXRpb24pOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nIiwicmVtb3ZlIiwiZG9tVXRpbGl0aWVzIiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJkaWRNb3VudCIsInVubW91bnQiLCJmcm9tQ29udGVudEFuZENvbmZpZ3VyYXRpb24iLCJjb250ZW50IiwiY29uZmlndXJhdGlvbiIsIllhcHAiLCJkZWZhdWx0UHJvcGVydGllcyIsImVkaXRhYmxlIiwiZmlyYUNvZGUiLCJoaWRkZW5HdXR0ZXIiLCJoaWRkZW5TY3JvbGxiYXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjtnQ0FFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsU0FBMENDLDhCQUFZLENBQXRERCxRQUFRRSxjQUFrQ0QsOEJBQVksQ0FBOUNDLGFBQWFDLG1CQUFxQkYsOEJBQVksQ0FBakNFO0FBRWQsSUFBQSxBQUFNSiw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDaEQsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXBDSCxzQkFBc0IsT0FDckJKLFlBQVlNLFlBQVlILGtCQUFrQkMscUJBQ3hDSCxpQkFBaUJLLFlBQVlIO2dCQUVqQyxJQUFJLENBQUNLLFFBQVE7Z0JBRWJKLG9CQUFvQkUsWUFBYSxHQUFHO2dCQUVwQyxPQUFPRjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLGdCQUFnQixFQUFFRSxPQUFPO2dCQUMvQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNULE9BQU9RLFlBQVlIO1lBQ3JCOzs7O1lBU09PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsT0FBTyxFQUFFQyxhQUFhO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0gsMkJBQTJCLENBNUJqRmIsY0E0QmdHYyxTQUFTQztZQUFnQjs7O1dBNUJ6SGY7RUFBcUJnQixhQUFJO0FBcUI1QyxpQkFyQm1CaEIsY0FxQlppQixxQkFBb0I7SUFDekJDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxjQUFjO0lBQ2RDLGtCQUFrQjtBQUNwQiJ9