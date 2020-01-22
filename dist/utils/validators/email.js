"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function emailIsValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
exports.emailIsValid = emailIsValid;
exports.EMAIL_VALIDATOR_MESSAGES = {
    error: 'Informe um e-mail válido',
    success: 'E-mail válido'
};
//# sourceMappingURL=email.js.map