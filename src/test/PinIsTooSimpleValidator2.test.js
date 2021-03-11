import pinIsTooSimpleValidator2 from "../components/util/numberValidators/PinIsTooSimpleValidator2";

const simplePins = [
  1111,
  22222,
  333333,
  4444444,
  55555555,
  666666666,
  7777777777,
  88888888888,
  999999999999,
];
const complexPins = [
  1234,
  42658,
  748271,
  3121545,
  25564675,
  757882926,
  1234145225,
  73457138853,
  782945686589,
];

test("should return true", () => {
  for (let i = 0; i < simplePins.length; i++) {
    expect(pinIsTooSimpleValidator2(simplePins[i])).toBeTruthy();
  }
});

test("should return false", () => {
  for (let i = 0; i < complexPins.length; i++) {
    expect(pinIsTooSimpleValidator2(complexPins[i])).toBeFalsy();
  }
});
