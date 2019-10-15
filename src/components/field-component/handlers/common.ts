import { FieldComponent } from "../field-component";
import { SUCCESS_MODIFIER, DANGER_MODIFIER } from "../../constants";

export function Common(component: FieldComponent, e: Event): boolean {
  const {
      clearClassnames,
      setModifier,
      getIsRequired,
      setIsValid,
      getValue,
      setHelperContent
    } = component,
    type = event ? event.type : "keyup",
    isValid: boolean = getValue().length >= 1,
    isRequired: boolean = getIsRequired();

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
