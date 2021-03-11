/**
 * Check if a 4 digit number is already in the localStorage of your browser.
 * @param {number} pinToValidate The PIN number to search for in the localStorage.
 * @returns {Boolean} Returns false if the localStorage is empty or the PIN number was not found in the localStorage.
 * Returns true if the PIN number was found in the localStorage of your browser.
 */
function pinWasGeneratedValidator(pinToValidate) {
  var firstKey = window.localStorage.getItem(1);

  if (firstKey === null) return false;

  for (let i = 1; i <= window.localStorage.length; i++) {
    var pin = parseInt(window.localStorage.getItem(i).substring(0, 4));

    if (pin === pinToValidate) return true;
  }

  return false;
}

export default pinWasGeneratedValidator;
