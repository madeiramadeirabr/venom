"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mask_1 = require("../../../utils/mask");
var credit_card_1 = require("../../../utils/credit-card");
function CreditCard(component, e) {
    var brand = null;
    var max_lenght = 16;
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var v = parsed(value);
        brand = credit_card_1.getBrand(v);
        if (brand === null)
            return false;
        switch (brand) {
            case 'amex':
                max_lenght = 15;
                return v.match(/^(?:3[47][0-9]{13})$/) ? true : false;
            case 'visa':
                max_lenght = 13;
                return v.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/) ? true : false;
            case 'mastercard':
                max_lenght = 16;
                return v.match(/^(?:5[1-5][0-9]{14})$/) ? true : false;
            case 'discover':
                max_lenght = 15;
                return v.match(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/) ? true : false;
            case 'dinners':
                max_lenght = 14;
                return v.match(/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/) ? true : false;
            case 'elo':
                max_lenght = 16;
                return v.length === 16;
            case 'hiper':
                max_lenght = 16;
                return v.length === 16;
        }
        return false;
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(mask_1.creditCardMask(valueParsed));
    setIsValid('credit-card', type, isValid);
    setHelperContent('');
    if (valueLength < max_lenght) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Número inválido');
        update();
    }
    return false;
}
exports.CreditCard = CreditCard;
//# sourceMappingURL=credit-card.js.map