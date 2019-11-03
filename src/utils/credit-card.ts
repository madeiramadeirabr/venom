export function getBrand(number: string): string | null {
  var re = new RegExp("^4")
  if (number.match(re) != null)
    return "visa"

  re = new RegExp("^(34|37)")
  if (number.match(re) != null)
    return "amex"

  re = new RegExp("^5[1-5]")
  if (number.match(re) != null)
    return "mastercard"

  re = new RegExp("^6(?:011|5[0-9]{2})[0-9]{3,}$")
  if (number.match(re) != null)
    return "dinners"

  re = new RegExp("^6011");
  if (number.match(re) != null)
    return "discover"

  return null
}