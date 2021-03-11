/**
 *Saves the input parameter to the localStorage of your browser
 *
 * @param {number} pin The PIN of the user
 * @param {string} username The name of the user
 */
function saveToLocalStorage(pin, username) {
  var firstKey = window.localStorage.getItem(1);
  if (firstKey === null) {
    window.localStorage.setItem(1, pin + username);
  } else {
    var nextKey = localStorage.length + 1;
    window.localStorage.setItem(nextKey, pin + username);
  }
}

export default saveToLocalStorage;
