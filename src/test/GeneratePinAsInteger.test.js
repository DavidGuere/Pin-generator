import generatePinAsInteger from "../components/util/numberGenerators/GeneratePinAsInteger";

const number = generatePinAsInteger();

test("Generates a number", () => {
  expect(typeof number).toBe("number");
});

test("Has 4 digits", () => {
  expect(number.toString().split("").length).toBe(4);
});
