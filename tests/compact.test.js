import { describe, expect, test } from "@jest/globals";
import compact from "../src/compact";

describe("compact function", () => {
  const truthyValues = [
    ["T1", [1, 2, 3, 4, 5]],
    ["T2", ["h", "e", "l", "l", "o"]],
    ["T3", ["false", "null", "0", '""', "undefined", "NaN"]],
    ["T4", []],
  ];
  describe("should not remove anything", () => {
    test.each(truthyValues)("%s: %p", (title, array) => {
      const copy = [...array];
      expect(compact(array)).toStrictEqual(array);
      expect(array).toStrictEqual(copy);
    });
  });

  const falseyValues = [
    ["T5", [false, null, 0, "", undefined, NaN], []],
    ["T6", [1, false], [1]],
  ];
  describe("should remove all falsey values", () => {
    test.each(falseyValues)("%s: %p", (title, array, expected) => {
      const copy = [...array];
      expect(compact(array)).toStrictEqual(expected);
      expect(array).toStrictEqual(copy);
    });
  });

  const nonArrayValues = [
    ["T", null],
    ["T", undefined],
    ["T", { a: 1, b: 2, c: 3 }],
    ["T", 3],
    ["T", "hello"],
  ];
  describe("should throw an error when the input is not an array", () => {
    test.each(nonArrayValues)("%s: %p", (title, array) => {
      expect(() => compact(array)).toThrow(TypeError);
    });
  });
});
