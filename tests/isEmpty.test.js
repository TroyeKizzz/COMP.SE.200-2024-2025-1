import { describe, expect, test } from "@jest/globals";
import isEmpty from "../src/isEmpty";

const testCases = [
  // Nullish values
  {
    caseName: 'Case 1',
    value: null,
    expected: true
  },
  {
    caseName: 'Case 2',
    value: undefined,
    expected: true
  },

  // Boolean values
  {
    caseName: 'Case 3',
    value: true,
    expected: true
  },
  {
    caseName: 'Case 4',
    value: false,
    expected: true
  },

  // Numeric values
  {
    caseName: 'Case 5',
    value: 0,
    expected: true
  },
  {
    caseName: 'Case 6',
    value: 1,
    expected: true
  },
  {
    caseName: 'Case 7',
    value: NaN,
    expected: true
  },

  // Strings
  {
    caseName: 'Case 8',
    value: "",
    expected: true
  },
  {
    caseName: 'Case 9',
    value: "abc",
    expected: false
  },

  // Arrays
  {
    caseName: 'Case 10',
    value: [],
    expected: true
  },
  {
    caseName: 'Case 11',
    value: [1, 2, 3],
    expected: false
  },

  // Buffers
  {
    caseName: 'Case 12',
    value: Buffer.alloc(0),
    expected: true
  },
  {
    caseName: 'Case 13',
    value: Buffer.alloc(10),
    expected: false
  },

  // Typed Arrays
  {
    caseName: 'Case 14',
    value: new Uint8Array(0),
    expected: true
  },
  {
    caseName: 'Case 15',
    value: new Uint8Array([1]),
    expected: false
  },

  // Plain Objects
  {
    caseName: 'Case 16',
    value: {},
    expected: true
  },
  {
    caseName: 'Case 17',
    value: { a: 1 },
    expected: false
  },

  // Maps
  {
    caseName: 'Case 18',
    value: new Map(),
    expected: true
  },
  {
    caseName: 'Case 19',
    value: new Map([['a', 1]]),
    expected: false
  },

  // Sets
  {
    caseName: 'Case 20',
    value: new Set(),
    expected: true
  },
  {
    caseName: 'Case 21',
    value: new Set([1]),
    expected: false
  },

  // Functions
  {
    caseName: 'Case 22',
    value: () => { },
    expected: true
  },

  // Prototype Objects
  {
    caseName: 'Case 23',
    value: Object.prototype,
    expected: true
  },

  // Arguments Object
  {
    caseName: 'Case 24',
    value: (function() { return arguments })(),
    expected: true
  },
  {
    caseName: 'Case 25',
    value: (function() { return arguments })(1, 2, 3),
    expected: false
  },

  // Splice-like Objects
  {
    caseName: 'Case 26',
    value: { length: 0, splice: Array.prototype.splice },
    expected: true
  },
  {
    caseName: 'Case 27',
    value: { length: 3, splice: Array.prototype.splice },
    expected: false
  },

  // Non-enumerable keys
  {
    caseName: 'Case 28',
    value: Object.create(null),
    expected: true
  },
  {
    caseName: 'Case 29',
    value: Object.create(null, { a: { value: 1, enumerable: true } }),
    expected: false
  },
  {
    caseName: 'Case 30',
    value: { __proto__: { a: 1 } }, // Prototype-inherited property (should not trigger `hasOwnProperty`)
    expected: true
  },
];


// Tests
describe('isEmpty - Testing', () => {
  testCases.forEach(({ caseName, value, expected }) => {
    test(caseName, () => {
      const result = isEmpty(value);
      expect(result).toEqual(expected);
    });
  });
});
