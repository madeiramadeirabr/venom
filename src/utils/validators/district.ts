export function districtCodeIsValid(districtCode: string): boolean {
  districtCode = districtCode.toUpperCase()
  return (districtCode in DISTRICTS)
}

export const DISTRICT_VALIDATOR_MESSAGES = {
  error: 'UF inválido, tente outro',
  success: 'UF encontrado'
}

export const DISTRICTS = ['RO',
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
]