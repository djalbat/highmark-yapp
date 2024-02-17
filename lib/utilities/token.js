"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "tokenContentFromToken", {
    enumerable: true,
    get: function() {
        return tokenContentFromToken;
    }
});
var _tokenTypes = require("../tokenTypes");
function tokenContentFromToken(token) {
    var tokenContent = token.getContent();
    var type = token.getType();
    if (type === _tokenTypes.ESCAPED_TOKEN_TYPE) {
        var start = 1;
        tokenContent = tokenContent.substring(start);
    }
    return tokenContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVTQ0FQRURfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbkNvbnRlbnRGcm9tVG9rZW4odG9rZW4pIHtcbiAgbGV0IHRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICBjb25zdCB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpO1xuXG4gIGlmICh0eXBlID09PSBFU0NBUEVEX1RPS0VOX1RZUEUpIHtcbiAgICBjb25zdCBzdGFydCA9IDE7XG5cbiAgICB0b2tlbkNvbnRlbnQgPSB0b2tlbkNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbkNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsidG9rZW5Db250ZW50RnJvbVRva2VuIiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZSIsImdldFR5cGUiLCJFU0NBUEVEX1RPS0VOX1RZUEUiLCJzdGFydCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7MEJBRm1CO0FBRTVCLFNBQVNBLHNCQUFzQkMsS0FBSztJQUN6QyxJQUFJQyxlQUFlRCxNQUFNRSxVQUFVO0lBRW5DLElBQU1DLE9BQU9ILE1BQU1JLE9BQU87SUFFMUIsSUFBSUQsU0FBU0UsOEJBQWtCLEVBQUU7UUFDL0IsSUFBTUMsUUFBUTtRQUVkTCxlQUFlQSxhQUFhTSxTQUFTLENBQUNEO0lBQ3hDO0lBRUEsT0FBT0w7QUFDVCJ9