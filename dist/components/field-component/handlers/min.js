export function Min(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setHelperContent = component.setHelperContent, type = event ? event.type : 'keyup', target = event.target, _a = target.dataset, trigger = _a.trigger, minLength = _a.minLength, value = getValue(), LENGTH_MIN = minLength || 0, valueLength = value.length, isValid = valueLength >= LENGTH_MIN, TRIGGER = 'blur', onlyValidateOnBlur = trigger === TRIGGER;
    setIsValid('min', type, isValid);
    setHelperContent('');
    if (!onlyValidateOnBlur || type === TRIGGER) {
        setHelperContent("Insira no m\u00EDnimo " + LENGTH_MIN + " caracteres");
        update();
        return false;
    }
    clearClassnames();
    return false;
}
//# sourceMappingURL=min.js.map