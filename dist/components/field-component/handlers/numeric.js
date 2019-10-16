"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Numeric(component, e) {
    var clearClassnames = component.clearClassnames, update = component.update, setIsValid = component.setIsValid, getValue = component.getValue, setHelperContent = component.setHelperContent, type = event.type, value = getValue(), valueLength = value.length, isValid = /^\d+$/.test(value);
    setIsValid('numeric', type, isValid);
    setHelperContent('');
    if (valueLength <= 0) {
        clearClassnames();
        return false;
    }
    var TRIGGER = 'blur', target = event.target, trigger = target.dataset.trigger, onlyValidateOnBlur = trigger === TRIGGER;
    if (!onlyValidateOnBlur || type === TRIGGER) {
        if (!isValid)
            setHelperContent('Apenas números');
        update();
    }
    return false;
}
exports.Numeric = Numeric;
//# sourceMappingURL=numeric.js.map