/**
 * Check wether a 4 digit number is comprised of the same digits.
 * @returns {Boolean} Returns true if the number is too simple (all the 4 digits are the same), otherwise returns false.
 */
function pinIsTooSimpleValidator(pin) {
  var pinDigits = pin.toString().split("");

  if (
    pinDigits[0] === pinDigits[1] &&
    pinDigits[0] === pinDigits[2] &&
    pinDigits[0] === pinDigits[3]
  )
    return true;
  return false;
}

export default pinIsTooSimpleValidator;
