import { describe, expect, test } from "@jest/globals";
import capitalize from "../src/capitalize";

// Test data table
const testCases = [
  {
    caseName: 'Case 1',
    string: "hello",
    expected: "Hello"
  },
  {
    caseName: 'Case 2',
    string: "WORLD",
    expected: "World"
  },
  {
    caseName: 'Case 3',
    string: "hElLo",
    expected: "Hello"
  },
  {
    caseName: 'Case 4',
    string: "a",
    expected: "A"
  },
  {
    caseName: 'Case 5',
    string: "Z",
    expected: "Z"
  },
  {
    caseName: 'Case 6',
    string: "",
    expected: ""
  },
  {
    caseName: 'Case 7',
    string: 123,
    expected: "123"
  },
  {
    caseName: 'Case 8',
    string: " hello",
    expected: " hello"
  },
  {
    caseName: 'Case 9',
    string: "123abc",
    expected: "123abc"
  },
  {
    caseName: 'Case 10',
    string: "a".repeat(100),
    expected: "A" + "a".repeat(99)
  },
];

// Tests
describe('capitalize - Testing', () => {
  testCases.forEach(({ caseName, string, expected }) => {
    test(caseName, () => {
      const result = capitalize(string);
      expect(result).toEqual(expected);
    });
  });
});
