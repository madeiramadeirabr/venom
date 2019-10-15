import { SUCCESS_MODIFIER, DANGER_MODIFIER } from "../../constants";
export function User(component, e) {
    var clearClassnames = component.clearClassnames, setModifier = component.setModifier, setIsValid = component.setIsValid, getValue = component.getValue, setHelperContent = component.setHelperContent, type = event ? event.type : "keyup", isValid = getValue().length >= 1;
    clearClassnames();
    setIsValid("user", type, isValid);
    setHelperContent("");
    setModifier(isValid ? SUCCESS_MODIFIER : DANGER_MODIFIER);
    return false;
}
//# sourceMappingURL=user.js.map