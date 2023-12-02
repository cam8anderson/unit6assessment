const shuffle = require("../src/shuffle");

//make sample data to test with first.
testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("shuffle should...", () => {
  // CODE HERE
  test("returns array", () => {
    expect(Array.isArray(testArr)).toBe(true);
  });

  test("shuffles the array", () => {
    const shuffledArr = shuffle(testArr);

    expect(shuffledArr).not.toEqual(testArr);
  });
});
