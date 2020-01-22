export function parseEmail(value: string): string {
  if (value === null || typeof value === 'undefined') return ''
  return value.replace(' ', '').replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '').toLowerCase()
}
