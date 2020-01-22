"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DDD = [
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '21',
    '22',
    '24',
    '27',
    '28',
    '31',
    '32',
    '33',
    '34',
    '35',
    '37',
    '38',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '51',
    '53',
    '54',
    '55',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '71',
    '73',
    '74',
    '75',
    '77',
    '79',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99'
];
function phoneIsValid(value, isMobile) {
    if (isMobile === void 0) { isMobile = false; }
    this.value = value.replace(/\D/g, '');
    this.isMobile = isMobile;
    this.isValid = false;
    this.message = "O " + (isMobile ? 'celular' : 'telfone') + " informado \u00E9 v\u00E1lido";
    this.getMessage = function () {
        return this.message;
    };
    var ddd = "" + this.value[0] + this.value[1], third = this.value[2].toString();
    if (!DDD.includes(ddd)) {
        this.message = "O DDD " + ddd + " n\u00E3o \u00E9 v\u00E1lido, tente outro";
        this.isValid = false;
    }
    if (third !== '9' && isMobile) {
        this.message = "Deve conter 9 ap\u00F3s o DDD";
        this.isValid = false;
    }
    this.isValid = this.isMobile ? this.value.length === 11 : this.value.length === 10 || this.value.length === 11;
    return this.isValid;
}
exports.phoneIsValid = phoneIsValid;
exports.PHONE_VALIDATOR_MESSAGES = {
    error: 'O número de telefone informado é inválido',
    success: 'O número de telefone informado é válido'
};
exports.MOBILE_VALIDATOR_MESSAGES = {
    error: 'O número de celular informado é inválido',
    success: 'O número de celular informado é válido'
};
//# sourceMappingURL=phone.js.map