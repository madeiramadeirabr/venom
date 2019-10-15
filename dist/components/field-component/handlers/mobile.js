import { mobileIsValid } from '../../../utils/validators/index';
import { mobileMask } from '../../../utils/mask';
var LENGTH_MAX = 11;
export function Mobile(component, e) {
    function parsed(value) {
        return value.replace(/\D/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var mobile = parsed(value);
        return mobileIsValid(mobile);
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(mobileMask(valueParsed));
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
//# sourceMappingURL=mobile.js.map