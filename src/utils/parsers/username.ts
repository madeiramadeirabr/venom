export function parseUsername(value: string): string {
  if (value === null || typeof value === 'undefined') return ''
  return value
    .toLowerCase()
    .replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, (letter) => letter.toUpperCase())
}