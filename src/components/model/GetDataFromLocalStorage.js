/**
 * Retrieves the data from the localStorage of your browser.
 *
 * @returns {array} Returns a two dimensional array containing the pins and the usernames
 */
function getDataFromLocalStorage() {
  var result = [[], []];

  for (let i = 1; i <= window.localStorage.length; i++) {
    let pin = parseInt(window.localStorage.getItem(i).substring(0, 4));
    let username = window.localStorage.getItem(i).substring(4);

    result[0][i - 1] = pin;
    result[1][i - 1] = username;
  }

  return result;
}

export default getDataFromLocalStorage;
