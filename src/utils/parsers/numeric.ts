export function parseNumeric(value: string): string {
  if (value === null || typeof value === 'undefined') return ''
  return value.replace(/\D/g, '')
}
