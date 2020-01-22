export function uuid(): number {
  // @ts-ignore
  const cryptoObj = window.crypto || window.msCrypto,
    array = new Uint16Array(1)
  cryptoObj.getRandomValues(array)
  return array[0]
}
