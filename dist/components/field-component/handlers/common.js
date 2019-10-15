import { SUCCESS_MODIFIER, DANGER_MODIFIER } from "../../constants";
export function Common(component, e) {
    var clearClassnames = component.clearClassnames, setModifier = component.setModifier, getIsRequired = component.getIsRequired, setIsValid = component.setIsValid, getValue = component.getValue, setHelperContent = component.setHelperContent, type = event ? event.type : "keyup", isValid = getValue().length >= 1, isRequired = getIsRequired();
    clearClassnames();
    setIsValid("common", type, isValid);
    if (!isValid && isRequired) {
        setHelperContent("Esse campo é obrigatório");
        setModifier(DANGER_MODIFIER);
    }
    if (isValid && isRequired) {
        setModifier(SUCCESS_MODIFIER);
        setHelperContent("");
    }
    return false;
}
//# sourceMappingURL=common.js.map