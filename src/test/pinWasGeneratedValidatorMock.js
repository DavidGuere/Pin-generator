export default function pinWasGeneratedValidator(pinToValidate, storage) {
  var firstKey = storage[0];

  if (firstKey === undefined) return false;

  for (let i = 1; i <= storage.length; i++) {
    var pin = parseInt(storage[i - 1].substring(0, 4));

    if (pin === pinToValidate) return true;
  }

  return false;
}
