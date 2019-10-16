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
function emailIsValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
exports.emailIsValid = emailIsValid;
function usernameIsValid(username) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var username = username.replace(/[0-9]/g, '');
    return !regName.test(username) ? false : true;
}
exports.usernameIsValid = usernameIsValid;
function mobileIsValid(mobile) {
    mobile = mobile.replace(/\D/g, '');
    var ddd = "" + mobile[0] + mobile[1], third = mobile[2];
    if (third !== '9')
        return false;
    if (!DDD.includes(ddd))
        return false;
    return mobile.length === 11;
}
exports.mobileIsValid = mobileIsValid;
function phoneIsValid(phone) {
    phone = phone.replace(/\D/g, '');
    var ddd = "" + phone[0] + phone[1];
    if (!DDD.includes(ddd))
        return false;
    return phone.length === 10;
}
exports.phoneIsValid = phoneIsValid;
function zipcodeIsValid(zipcode) {
    zipcode = zipcode.replace(/\D/g, '');
    return zipcode.length === 8;
}
exports.zipcodeIsValid = zipcodeIsValid;
//# sourceMappingURL=common.js.map