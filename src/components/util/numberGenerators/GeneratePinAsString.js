/**
 * Generates a random number of 4 digits as a String. A String number can have 0 as its initial digit
 * @returns {String} Returns a 4 digit number as a String
 */
function generatePinAsString() {
  var numberToString = "";

  for (let i = 0; i < 4; i++) {
    let randNumber = Math.floor(Math.random() * 10);
    numberToString = numberToString + randNumber.toString();
  }

  return numberToString;
}

export default generatePinAsString;
