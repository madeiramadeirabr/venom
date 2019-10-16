"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../utils/validators/index");
var mask_1 = require("../../../utils/mask");
function Zipcode(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent;
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var zipcode = parsed(value);
        return index_1.zipcodeIsValid(zipcode);
    }
    var type = e.type, TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(mask_1.zipcodeMask(valueParsed));
    if (valueLength < 8) {
        clearClassnames();
        return false;
    }
    else {
        setIsValid('zipcode', type, isValid);
        setHelperContent('');
    }
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Insira um CEP válido');
        update();
    }
    return false;
}
exports.Zipcode = Zipcode;
//# sourceMappingURL=zipcode.js.map