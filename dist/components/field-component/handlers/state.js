export function State(component, e) {
    var getValue = component.getValue, setActive = component.setActive, type = e.type;
    if (type === 'focus')
        setActive(true);
    if (type === 'blur')
        setActive(getValue().length > 0);
    return false;
}
//# sourceMappingURL=state.js.map