/*
 * Pure javascript functions to handle input values
 * @author  William Novak <https://github.com/williamnvk>
 * @package Venom\Utils
 * @version 1.0.0
 */

export function stringToBoolean(string) {
  switch (string.toLowerCase().trim()) {
    case "true": case "yes": case "1": return true;
    case "false": case "no": case "0": case null: return false;
    default: return Boolean(string);
  }
}