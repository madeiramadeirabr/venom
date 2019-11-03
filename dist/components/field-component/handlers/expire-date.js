"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mask_1 = require("../../../utils/mask");
function ExpireDate(component, e) {
    function parsed(value) {
        return value.replace(/\D/g, '').replace('/', '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var expire = parsed(value);
        return expire.length === 6;
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length;
    var newValue = valueParsed;
    if (valueLength > 6) {
        newValue = valueParsed.substring(0, valueParsed.length - 1);
        setValue(mask_1.expireDateMask(newValue));
    }
    var month = parseInt("" + newValue.charAt(0) + newValue.charAt(1), 10), year = parseInt("" + newValue.charAt(2) + newValue.charAt(3) + newValue.charAt(4) + newValue.charAt(5), 10);
    var isValid = validate(newValue), message = 'A data de vencimento informada não é válida';
    if (month > 12) {
        isValid = false;
        message = 'O mês informado é inválido';
    }
    if (year < 2019) {
        isValid = false;
        message = 'O ano informado é inválido';
    }
    setValue(mask_1.expireDateMask(newValue));
    setIsValid('expire-date', type, isValid);
    setHelperContent('');
    if (valueLength < 6) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent(message);
        update();
    }
    return false;
}
exports.ExpireDate = ExpireDate;
//# sourceMappingURL=expire-date.js.map