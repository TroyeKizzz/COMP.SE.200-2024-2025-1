import { describe, expect, test } from "@jest/globals";
import filter from "../src/filter";

describe("filter", () => {
  const arrayValues = [
    ["T1", [1, 2, 3, 4, 5], (a) => a > 3, [4, 5]],
    ["T2", [null, undefined], () => true, [null, undefined]],
    ["T3", [], (a) => a > 3, []],
    [
      "T4",
      [1, 2, 3, 4, 5],
      () => {
        return;
      },
      [],
    ],
  ];
  describe("should filter an array", () => {
    test.each(arrayValues)("%s: %p with %p", (title, array, func, expected) => {
      const copy = [...array];
      expect(filter(array, func)).toStrictEqual(expected);
      expect(array).toStrictEqual(copy);
    });
  });

  const nonArrayValues = [
    ["T5", { a: 1, b: 2, c: 3 }, (a) => a > 3, []],
    ["T6", 3, (a) => a > 3, []],
    ["T7", "hello", (a) => a > 3, []],
    ["T8", null, (a) => a > 3, []],
    ["T9", undefined, (a) => a > 3, []],
  ];
  describe("should return an empty array when the input is not an array", () => {
    test.each(nonArrayValues)(
      "%s: %p with %p",
      (title, array, func, expected) => {
        expect(filter(array, func)).toStrictEqual(expected);
      }
    );
  });

  const nonFunctionValues = [
    ["T10", [1, 2, 3, 4, 5], true],
    ["T11", [1, 2, 3, 4, 5], "hello"],
    ["T12", [1, 2, 3, 4, 5], null],
    ["T13", [1, 2, 3, 4, 5], undefined],
  ];

  describe("should throw an error when the predicate is not a function", () => {
    test.each(nonFunctionValues)("%s: %p with %p", (title, array, func) => {
      expect(() => filter(array, func)).toThrow(TypeError);
    });
  });
});
