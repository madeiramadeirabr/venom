"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function State(component, e) {
    var getValue = component.getValue, setActive = component.setActive, type = e.type;
    if (type === 'focus')
        setActive(true);
    if (type === 'blur')
        setActive(getValue().length > 0);
    return false;
}
exports.State = State;
//# sourceMappingURL=state.js.map