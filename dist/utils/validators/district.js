"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function districtCodeIsValid(districtCode) {
    districtCode = districtCode.toUpperCase();
    return (districtCode in exports.DISTRICTS);
}
exports.districtCodeIsValid = districtCodeIsValid;
exports.DISTRICT_VALIDATOR_MESSAGES = {
    error: 'UF inválido, tente outro',
    success: 'UF encontrado'
};
exports.DISTRICTS = ['RO',
    'AC',
    'AM',
    'RR',
    'PA',
    'AP',
    'TO',
    'MA',
    'PI',
    'CE',
    'RN',
    'PB',
    'PE',
    'AL',
    'SE',
    'BA',
    'MG',
    'ES',
    'RJ',
    'SP',
    'PR',
    'SC',
    'RS',
    'MS',
    'MT',
    'GO',
    'DF'
];
//# sourceMappingURL=district.js.map