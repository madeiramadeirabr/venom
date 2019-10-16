"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../utils/validators/index");
var mask_1 = require("../../../utils/mask");
var LENGTH_MAX = 11;
function Mobile(component, e) {
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var mobile = parsed(value);
        return index_1.mobileIsValid(mobile);
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(mask_1.mobileMask(valueParsed));
    setIsValid('mobile', type, isValid);
    setHelperContent('');
    if (valueLength < LENGTH_MAX) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Informe um número de celular válido');
        update();
    }
    return false;
}
exports.Mobile = Mobile;
//# sourceMappingURL=mobile.js.map