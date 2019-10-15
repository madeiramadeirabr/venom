import { phoneIsValid } from '../../../utils/validators/index';
import { phoneMask } from '../../../utils/mask';
var LENGTH_MAX = 11;
export function Phone(component, e) {
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var mobile = parsed(value);
        return phoneIsValid(mobile);
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(phoneMask(valueParsed));
    setIsValid('mobile', type, isValid);
    setHelperContent('');
    if (valueLength < LENGTH_MAX) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Informe um número de telefone válido');
        update();
    }
    return false;
}
//# sourceMappingURL=phone.js.map