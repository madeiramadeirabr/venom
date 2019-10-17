"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
function User(component, e) {
    var clearClassnames = component.clearClassnames, setModifier = component.setModifier, setIsValid = component.setIsValid, getValue = component.getValue, setHelperContent = component.setHelperContent, type = event ? event.type : 'keyup', isValid = getValue().length >= 1;
    clearClassnames();
    setIsValid('user', type, isValid);
    setHelperContent('');
    setModifier(isValid ? constants_1.SUCCESS_MODIFIER : constants_1.DANGER_MODIFIER);
    return false;
}
exports.User = User;
//# sourceMappingURL=user.js.map