import { zipcodeIsValid } from '../../../utils/validators/index';
import { zipcodeMask } from '../../../utils/mask';
export function Zipcode(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent;
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var zipcode = parsed(value);
        return zipcodeIsValid(zipcode);
    }
    var type = e.type, TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(zipcodeMask(valueParsed));
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
//# sourceMappingURL=zipcode.js.map