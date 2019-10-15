var MAX_LENGTH = 72;
export function Username(component, e) {
    function parsed(value) {
        return value
            .toLowerCase()
            .replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function (letter) { return letter.toUpperCase(); })
            .replace(/[^A-Za-z0-9\s]/g, '');
    }
    function validate(value) {
        if (value === void 0) { value = ''; }
        var username = value.trim();
        return !(username.indexOf(' ') <= 0);
    }
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueLength = value.length, isValid = validate(value);
    setValue(parsed(value));
    if (valueLength >= MAX_LENGTH)
        setValue(value.substring(0, value.length - 1));
    setIsValid('username', type, isValid);
    setHelperContent('');
    if (valueLength <= 0) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Insira seu nome completo: nome e sobrenome');
        update();
    }
    return false;
}
//# sourceMappingURL=username.js.map