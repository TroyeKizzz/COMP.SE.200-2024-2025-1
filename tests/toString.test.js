import { describe, expect, test } from "@jest/globals";
import toString from "../src/toString";

// Test data table
const testCases = [
  {
    caseName: 'Case 1',
    string: null,
    expected: ""
  },
  {
    caseName: 'Case 2',
    string: true,
    expected: "true"
  },
  {
    caseName: 'Case 3',
    string: false,
    expected: "false"
  },
  {
    caseName: 'Case 4',
    string: 0,
    expected: "0"
  },
  {
    caseName: 'Case 5',
    string: -0,
    expected: "-0"
  },
  {
    caseName: 'Case 6',
    string: 1.2,
    expected: "1.2"
  },
  {
    caseName: 'Case 7',
    string: -1,
    expected: "-1"
  },
  {
    caseName: 'Case 8',
    string: Infinity,
    expected: "Infinity"
  },
  {
    caseName: 'Case 9',
    string: -Infinity,
    expected: "-Infinity"
  },
  {
    caseName: 'Case 10',
    string: "",
    expected: ""
  },
  {
    caseName: 'Case 11',
    string: "abc",
    expected: "abc"
  },
  {
    caseName: 'Case 12',
    string: [],
    expected: ""
  },
  {
    caseName: 'Case 13',
    string: [1, 2, 3],
    expected: "1,2,3"
  },
  {
    caseName: 'Case 14',
    string: [[1, 2], [3, 4]],
    expected: "1,2,3,4"
  },
  {
    caseName: 'Case 15',
    string: [[1, 2], [null, 4]],
    expected: "1,2,,4"
  },
  {
    caseName: 'Case 16',
    string: Buffer.alloc(0),
    expected: ""
  },
  {
    caseName: 'Case 17',
    string: Buffer.alloc(10),
    expected: ""
  },
  {
    caseName: 'Case 18',
    string: new Uint8Array(0),
    expected: ""
  },
  {
    caseName: 'Case 19',
    string: new Uint8Array([1]),
    expected: "1"
  },
  {
    caseName: 'Case 20',
    string: {},
    expected: "{}"
  },
  {
    caseName: 'Case 21',
    string: { a: 1 },
    expected: "{a: 1}"
  },
  {
    caseName: 'Case 22',
    string: new Map(),
    expected: ""
  },
  {
    caseName: 'Case 23',
    string: new Map([['a', 1]]),
    expected: "{a: 1}"
  },
  {
    caseName: 'Case 24',
    string: new Set(),
    expected: ""
  },
  {
    caseName: 'Case 25',
    string: new Set([1]),
    expected: "1"
  },
  {
    caseName: 'Case 26',
    string: () => { },
    expected: "() => {}"
  },
  {
    caseName: 'Case 27',
    string: new Date('2025-01-01'),
    expected: new Date('2025-01-01').toString()
  },
  {
    caseName: 'Case 28',
    string: Symbol("foo"),
    expected: "Symbol(foo)"
  },
];

// Tests
describe('toString - Testing', () => {
  testCases.forEach(({ caseName, string, expected }) => {
    test(caseName, () => {
      const result = toString(string);
      expect(result).toEqual(expected);
    });
  });
});
