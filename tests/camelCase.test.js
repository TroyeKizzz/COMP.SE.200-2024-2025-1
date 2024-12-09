import { describe, expect, test } from "@jest/globals";
import camelCase from "../src/camelCase";

// Test data table
const testCases = [
  {
    caseName: 'Case 1',
    string: "Foo Bar",
    expected: "fooBar"
  },
  {
    caseName: 'Case 2',
    string: "--foo-bar--",
    expected: "fooBar"
  },
  {
    caseName: 'Case 3',
    string: "__FOO_BAR__",
    expected: "fooBar"
  },
  {
    caseName: 'Case 4',
    string: "hello",
    expected: "hello"
  },
  {
    caseName: 'Case 5',
    string: "WORLD",
    expected: "world"
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
    string: "foo_bar--baz",
    expected: "fooBarBaz"
  },
  {
    caseName: 'Case 9',
    string: "foo'bar",
    expected: "fooBar"
  },
  {
    caseName: 'Case 10',
    string: "a".repeat(100),
    expected: "a".repeat(100)
  },
];

// Tests
describe('camelCase - Testing', () => {
  testCases.forEach(({ caseName, string, expected }) => {
    test(caseName, () => {
      const result = camelCase(string);
      expect(result).toEqual(expected);
    });
  });
});
