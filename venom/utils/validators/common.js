/*
 * Pure javascript functions for validate input value
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom\Utils\Validators
 * @version 1.0.0
 */

export function emailIsValid(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function usernameIsValid(username) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var username = username.replace(/[0-9]/g, '');
  return !regName.test(username) ? false : true;
}

export function mobileIsValid(mobile) {
  mobile = mobile.replace(/\D/g, "")
  let third = mobile[2]
  if (third !== "9") return false
  return mobile.length === 11
}

export function phoneIsValid(mobile) {
  mobile = mobile.replace(/\D/g, "")
  return mobile.length === 10
}

export function zipcodeIsValid(zipcode) {
  zipcode = zipcode.replace(/\D/g, "")
  return zipcode.length === 8
}
