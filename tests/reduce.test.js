import { describe, expect, test } from "@jest/globals";
import reduce from "../src/reduce";

// Test data table
const testCases = [
  {
    caseName: 'Case 1',
    collection: [1, 2, 3],
    accumulator: 0,
    iteratee: (sum, n) => sum + n,
    expected: 6,
  },
  {
    caseName: 'Case 2',
    collection: [1],
    accumulator: {},
    iteratee: (sum, n) => sum + n,
    expected: {} + 1,
  },
  {
    caseName: 'Case 3',
    collection: [],
    accumulator: undefined,
    iteratee: (sum, n) => sum + n,
    expected: undefined,
  },
  {
    caseName: 'Case 4',
    collection: { a: 1, b: 2 },
    accumulator: undefined,
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    error: TypeError,
  },
  {
    caseName: 'Case 5',
    collection: {},
    accumulator: {},
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    expected: {},
  },
  {
    caseName: 'Case 6',
    collection: null,
    accumulator: 0,
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    expected: 0,
  },
  {
    caseName: 'Case 7',
    collection: undefined,
    accumulator: 0,
    iteratee: () => undefined,
    expected: 0,
  },
  {
    caseName: 'Case 8',
    collection: Array(1000).fill(1),
    accumulator: {},
    iteratee: () => undefined,
    expected: undefined,
  },
  {
    caseName: 'Case 9',
    collection: Array(1000).fill(1),
    accumulator: undefined,
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    error: TypeError,
  },
  {
    caseName: 'Case 10',
    collection: undefined,
    accumulator: undefined,
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    expected: undefined,
  },
  {
    caseName: 'Case 11',
    collection: null,
    accumulator: undefined,
    iteratee: () => undefined,
    expected: undefined,
  },
  {
    caseName: 'Case 12',
    collection: {},
    accumulator: undefined,
    iteratee: () => undefined,
    expected: undefined,
  },
  {
    caseName: 'Case 13',
    collection: { a: 1, b: 2 },
    accumulator: 0,
    iteratee: () => undefined,
    expected: undefined,
  },
  {
    caseName: 'Case 14',
    collection: [],
    accumulator: 0,
    iteratee: () => 0,
    expected: 0,
  },
  {
    caseName: 'Case 15',
    collection: [1],
    accumulator: undefined,
    iteratee: () => undefined,
    expected: undefined,
  },
  {
    caseName: 'Case 16',
    collection: [1, 2, 3],
    accumulator: undefined,
    iteratee: () => undefined,
    expected: undefined,
  },
  {
    caseName: 'Case 17',
    collection: [1, 2, 3],
    accumulator: {},
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    expected: { 1: [0], 2: [1], 3: [2] },
  },
  {
    caseName: 'Case 18',
    collection: [1],
    accumulator: 0,
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    error: TypeError,
  },
  {
    caseName: 'Case 19',
    collection: [],
    accumulator: {},
    iteratee: (res, val, key) => {
      res[val] = res[val] || [];
      res[val].push(key);
      return res;
    },
    expected: {},
  },
  {
    caseName: 'Case 20',
    collection: { a: 1, b: 2 },
    accumulator: {},
    iteratee: (sum, n) => sum + n,
    expected: {} + 1 + 2,
  },
  {
    caseName: 'Case 21',
    collection: {},
    accumulator: 0,
    iteratee: (sum, n) => sum + n,
    expected: 0,
  },
  {
    caseName: 'Case 22',
    collection: null,
    accumulator: {},
    iteratee: (sum, n) => sum + n,
    expected: {},
  },
  {
    caseName: 'Case 23',
    collection: undefined,
    accumulator: {},
    iteratee: (sum, n) => sum + n,
    expected: {},
  },
  {
    caseName: 'Case 24',
    collection: Array(1000).fill(1),
    accumulator: 0,
    iteratee: (sum, n) => sum + n,
    expected: 1000,
  },

];

// Tests
describe('reduce - Pairwise Testing', () => {
  testCases.forEach(({ caseName, collection, accumulator, iteratee, expected, error }) => {
    test(caseName, () => {
      if (error !== undefined) {
        expect(() => reduce(collection, iteratee, accumulator)).toThrow(error)
      }
      else {
        const result = reduce(collection, iteratee, accumulator);
        expect(result).toEqual(expected);
      }
    });
  });
});



