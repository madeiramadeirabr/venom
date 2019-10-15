export function Monetary(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setValue = component.setValue, setHelperContent = component.setHelperContent;
    function parsed(value) {
        var money = parseFloat(value.replace(/\D/g, '')) / 100;
        return money
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    var type = e.type, TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER, value = getValue(), valueParsed = parsed(value), valueLength = valueParsed.length, isValid = true;
    setValue(valueParsed);
    if (valueLength < 8) {
        clearClassnames();
        return false;
    }
    else {
        setIsValid('monetary', type, isValid);
        setHelperContent('');
    }
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Insira um valor válido, ex.: 99,00');
        update();
    }
    return false;
}
//# sourceMappingURL=monetary.js.map