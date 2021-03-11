import pinWasGeneratedValidatorMock from "./pinWasGeneratedValidatorMock";
import generatePinAsInteger from "../components/util/numberGenerators/GeneratePinAsInteger";

var storage = [];
var numberToValidate = [];

test("Empty storage should return false", () => {
  for (let i = 0; i < storage.length; i++) {
    expect(pinWasGeneratedValidatorMock(storage[i - 1], storage)).toBeFalsy();
  }
});

for (let i = 0; i < 10; i++) {
  let number = generatePinAsInteger();
  storage[i] = number.toString() + "name";
  numberToValidate[i] = number;
}

test("Full storage and same generated pins as in storage should return true", () => {
  for (let i = 0; i < storage.length; i++) {
    expect(
      pinWasGeneratedValidatorMock(numberToValidate[i], storage)
    ).toBeTruthy();
  }
});

var difStorage = ["1234Name", "5678Name"];
var difNumberToValidate = [7895, 2365];

test("Different pins as in storage should return false", () => {
  for (let i = 0; i < storage.length; i++) {
    expect(
      pinWasGeneratedValidatorMock(difNumberToValidate[i], difStorage)
    ).toBeFalsy();
  }
});

const functionPointer = generatePinAsInteger;

var pointerStorage = [];
var pointerNumberToValidate = [];

for (let i = 0; i < 10; i++) {
  let number = functionPointer;
  pointerStorage[i] = number.toString() + "name";
  pointerNumberToValidate[i] = number;
}

test("Function pointer should return false", () => {
  for (let i = 0; i < storage.length; i++) {
    expect(
      pinWasGeneratedValidatorMock(pointerNumberToValidate[i], pointerStorage)
    ).toBeFalsy();
  }
});
