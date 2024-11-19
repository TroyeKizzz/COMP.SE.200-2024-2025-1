import { describe, expect, test } from "@jest/globals";
import add from "../src/add";

describe("add", () => {
  const validNumbers = [
    ["T1", -9007199254740991, -9007199254740991, -18014398509481982],
    ["T2", -9007199254740990, 0, -9007199254740990],
    ["T3", 9007199254740990, 9007199254740991, 18014398509481981],
    ["T4", 0, 0, 0],
    ["T5", -9007199254740991, 9007199254740991, 0],
    ["T6", 9007199254740991, 0, 9007199254740991],
  ];

  describe("should add two valid numbers", () => {
    test.each(validNumbers)("%s: %p and %p", (title, a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    });
  });

  const stringsNumbers = [
    ["T7", -9007199254740991, "b", -9007199254740991],
    ["T8", "a", -9007199254740990, -9007199254740990],
    ["T9", "3", "4", 7],
    ["T10", 9007199254740991, "4", 9007199254740995],
  ];

  describe("should add strings and numbers", () => {
    test.each(stringsNumbers)("%s: %p and %p", (title, a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    });
  });

  const undefinedNumbers = [
    ["T11", undefined, 9007199254740990, 9007199254740990],
    ["T12", "a", undefined, 0],
    ["T13", undefined, undefined, 0],
    ["T14", undefined, "b", 0],
  ];

  describe("should add undefined and numbers", () => {
    test.each(undefinedNumbers)("%s: %p and %p", (title, a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    });
  });
});
