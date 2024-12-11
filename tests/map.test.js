import { describe, expect, test } from "@jest/globals";
import map from "../src/map";

describe("map function", () => {
  test.each([
    // Valid arrays with various iteratees
    {
      title: "T1",
      array: [1, 2, 3, 4, 5, 6],
      iteratee: (a) => a > 3,
      expected: [false, false, false, true, true, true],
    },
    {
      title: "T2",
      array: ["h", "e", "l", "l", "o"],
      iteratee: (a) => a.toUpperCase(),
      expected: ["H", "E", "L", "L", "O"],
    },
    { title: "T3", array: [], iteratee: (a) => a, expected: [] },
  ])(
    "should work when values are valid $title: map($array, $iteratee)",
    ({ array, iteratee, expected }) => {
      const copy = [...array];
      expect(map(array, iteratee)).toEqual(expected);
      expect(array).toEqual(copy);
    }
  );

  test.each([
    // Non-array inputs
    { title: "T4", array: null, iteratee: (a) => a > 3, expected: [] },
    { title: "T5", array: undefined, iteratee: (a) => a > 3, expected: [] },
    {
      title: "T6",
      array: { a: 1, b: 2, c: 3 },
      iteratee: (a) => a > 3,
      expected: [],
    },
    { title: "T7", array: 3, iteratee: (a) => a > 3, expected: [] },
    {
      title: "T8",
      array: "hello",
      iteratee: (a) => a.toUpperCase(),
      expected: ["H", "E", "L", "L", "O"],
    },
    {
      title: "T9",
      array: [1, 2, 3, 4, 5, 6],
      iteratee: (a) => {
        return;
      },
      expected: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
  ])(
    "should return an empty array $title: map($array, $iteratee)",
    ({ array, iteratee, expected }) => {
      const copy = array;
      expect(map(array, iteratee)).toEqual(expected);
      expect(array).toEqual(copy);
    }
  );

  test.each([
    // Non-function iteratees
    {
      title: "T10",
      array: [1, 2, 3, 4, 5, 6],
      iteratee: true,
    },
    {
      title: "T11",
      array: [1, 2, 3, 4, 5, 6],
      iteratee: "hello",
    },

    // Omitted iteratees
    {
      title: "T12",
      array: [1, 2, 3, 4, 5, 6],
      iteratee: null,
    },
    {
      title: "T13",
      array: [1, 2, 3, 4, 5, 6],
      iteratee: undefined,
    },
  ])(
    "should throw an error when the iteratee is not a function $title: map($array, $iteratee)",
    ({ array, iteratee, expected }) => {
      expect(() => map(array, iteratee)).toThrow(TypeError);
    }
  );
});
