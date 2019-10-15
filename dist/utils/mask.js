import VMasker from 'vanilla-masker';
export function personDocumentMask(num) {
    return VMasker.toPattern(num, '999.999.999-99');
}
export function legalPersonDocumentMask(num) {
    return VMasker.toPattern(num, '99.999.999/9999-99');
}
export function mobileMask(num) {
    return VMasker.toPattern(num, '(99) 99999-9999');
}
export function phoneMask(num) {
    return VMasker.toPattern(num, '(99) 9999-9999');
}
export function zipcodeMask(num) {
    return VMasker.toPattern(num, '99.999-999');
}
//# sourceMappingURL=mask.js.map