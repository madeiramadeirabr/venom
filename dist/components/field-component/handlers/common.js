"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
function Common(component, e) {
    var clearClassnames = component.clearClassnames, setModifier = component.setModifier, getIsRequired = component.getIsRequired, setIsValid = component.setIsValid, getValue = component.getValue, setHelperContent = component.setHelperContent, type = event ? event.type : 'keyup', isValid = getValue().length >= 1, isRequired = getIsRequired();
    clearClassnames();
    setIsValid('common', type, isValid);
    if (!isValid && isRequired) {
        setHelperContent('Esse campo é obrigatório');
        setModifier(constants_1.DANGER_MODIFIER);
    }
    if (isValid && isRequired) {
        setModifier(constants_1.SUCCESS_MODIFIER);
        setHelperContent('');
    }
    return false;
}
exports.Common = Common;
//# sourceMappingURL=common.js.map