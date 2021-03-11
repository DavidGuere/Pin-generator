import pinIsTooSimpleValidator from "../components/util/numberValidators/PinIsTooSimpleValidator";

const simplePins = [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999];
const complexPins = [1234, 4658, 7827, 3215, 2545, 7526, 1225, 7853, 7896];

test("should return true", () => {
  for (let i = 0; i < simplePins.length; i++) {
    expect(pinIsTooSimpleValidator(simplePins[i])).toBeTruthy();
  }
});

test("should return false", () => {
  for (let i = 0; i < complexPins.length; i++) {
    expect(pinIsTooSimpleValidator(complexPins[i])).toBeFalsy();
  }
});
