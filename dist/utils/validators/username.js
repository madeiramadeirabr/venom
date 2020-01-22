"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function usernameIsValid(username) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var username = username.replace(/[0-9]/g, '');
    return !regName.test(username) ? false : true;
}
exports.usernameIsValid = usernameIsValid;
exports.USERNAME_VALIDATOR_MESSAGES = {
    error: 'Informe nome e sobrenome',
    success: 'Nome informado é valido'
};
//# sourceMappingURL=username.js.map