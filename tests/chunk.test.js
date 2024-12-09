import { describe, expect, test } from "@jest/globals";
import chunk from "../src/chunk";

describe("chunk function", () => {
  test.each([
    ["T1", [1, 2, 3, 4, 5, 6], -3, []],
    ["T2", [1, 2, 3, 4, 5, 6], 0, []],
    ["T3", [1, 2, 3, 4, 5, 6], 1, [[1], [2], [3], [4], [5], [6]]],
    [
      "T4",
      [1, 2, 3, 4, 5, 6],
      3,
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
    ],
    ["T5", ["h", "e", "l", "l", "o"], 2, [["h", "e"], ["l", "l"], ["o"]]],
    ["T6", [], 3, []],
    ["T7", [1, 2, 3, 4, 5, 6], Infinity, [[1, 2, 3, 4, 5, 6]]],
  ])(
    "should work when values are valid %s: chunk(%p, %p)",
    (title, array, size, expected) => {
      expect(chunk(array, size)).toEqual(expected);
    }
  );

  test.each([
    ["T8", null, 3, []],
    ["T9", undefined, 3, []],
    ["T10", { a: 1, b: 2, c: 3 }, 3, []],
    ["T11", 3, 3, []],
    ["T12", "hello", 3, []],
  ])(
    `should return an empty array %s: chunk(%p, %p)`,
    (title, array, size, expected) => {
      expect(chunk(array, size)).toEqual(expected);
    }
  );

  test.each([
    ["T13", [1, 2, 3, 4, 5, 6], null, [[1], [2], [3], [4], [5], [6]]],
    ["T14", [1, 2, 3, 4, 5, 6], undefined, [[1], [2], [3], [4], [5], [6]]],
    ["T15", [1, 2, 3, 4, 5, 6], "hello", [[1], [2], [3], [4], [5], [6]]],
    ["T16", [1, 2, 3, 4, 5, 6], 1.5, [[1], [2], [3], [4], [5], [6]]],
  ])(
    `should work with default size %s: chunk(%p, %p)`,
    (title, array, size, expected) => {
      expect(chunk(array, size)).toEqual(expected);
    }
  );
});
