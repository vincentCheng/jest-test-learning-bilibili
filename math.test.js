const sum = require("./math");

describe("Math module", () => {
  test("should return sum", () => {
    // given
    const number = 1;
    const anotherNumber = 2;

    // when
    const result = sum(number, anotherNumber);

    // then
    expect(result).toEqual(3);
  });
});
