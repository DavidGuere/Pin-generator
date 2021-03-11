/**
 * Check wether a number of at least 2 digits is comprised of the same digits. Does not have an upper limit on the number of digits.
 * @returns {Boolean} Returns true if the number is too simple (all the digits are the same), otherwise returns false.
 */
function pinIsTooSimpleValidator2(pin) {
  var pinDigits = pin.toString().split("");
  var firstDigit = pinDigits[0];
  var numberOfOccurrences = 0;

  pinDigits.map((digit) => {
    if (digit === firstDigit) {
      numberOfOccurrences++;
    }
  });

  return numberOfOccurrences === pinDigits.length ? true : false;
}

export default pinIsTooSimpleValidator2;
