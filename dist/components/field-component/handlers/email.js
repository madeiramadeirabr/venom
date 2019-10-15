import { emailIsValid } from '../../../utils/validators/index';
var MIN_LENGTH = 5, MAX_LENGTH = 112;
export function Email(component, event) {
    function parsed(value) {
        return value.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '').toLowerCase();
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var email = parsed(value);
        return emailIsValid(email);
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, TRIGGER = 'blur', trigger = event.target.dataset.trigger, type = event.type, onlyValidateOnBlur = trigger === TRIGGER, valueParsed = parsed(getValue()), valueLength = valueParsed.length, isValid = validate(valueParsed);
    setValue(valueParsed);
    if (valueLength >= MAX_LENGTH)
        setValue(valueParsed.substring(0, valueParsed.length - 1));
    setIsValid('email', type, isValid);
    setHelperContent('');
    if (valueLength <= MIN_LENGTH) {
        clearClassnames();
        return false;
    }
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Insira um e-mail válido, ex.: seunome@email.com');
        update();
    }
    return false;
}
//# sourceMappingURL=email.js.map