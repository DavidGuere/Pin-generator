/**
 * Generates a random integer of 4 digits
 * @returns {number} Returns a 4 digits integer
 */
function generatePinAsInteger() {
  var numberToString = "";

  for (let i = 0; i < 4; i++) {
    var randNumber = Math.floor(Math.random() * 10);

    while (randNumber === 0 && i === 0) {
      randNumber = Math.floor(Math.random() * 10);
    }
    numberToString = numberToString + randNumber.toString();
  }

  var stringToNumber = parseInt(numberToString);

  return stringToNumber;
}

export default generatePinAsInteger;
