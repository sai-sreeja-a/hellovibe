
import { describe, it, expect } from "vitest";
import { customMap } from "../src/utilities/map.js";

describe("myMap function", () => {

 it("should double every number", () => {
  const numbers: number[] = [1, 2, 3, 4];

  const result = customMap(numbers, num => num * 2);

  expect(result).toEqual([2, 4, 6, 8]);
});

  it("should convert strings to uppercase", () => {
    const names = ["john", "jane", "alex"];

    const result = customMap(names, name => name.toUpperCase());

    expect(result).toEqual(["JOHN", "JANE", "ALEX"]);
  });

  it("should return an empty array for empty input", () => {
    const result = customMap([], num => num);

    expect(result).toEqual([]);
  });

  it("should provide the index to the callback", () => {
    const numbers = [10, 20, 30];

    const result = customMap(
      numbers,
      (num, index) => num + index
    );

    expect(result).toEqual([10, 21, 32]);
  });

  it("should not modify the original array", () => {
    const numbers = [1, 2, 3];

    customMap(numbers, num => num * 2);

    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should return a new array", () => {
    const numbers = [1, 2, 3];

    const result = customMap(numbers, num => num);

    expect(result).not.toBe(numbers);
  });

  


it("should preserve empty slots in sparse arrays", () => {
  const numbers: number[] = new Array(3);

  numbers[0] = 1;
  numbers[2] = 3;

  const result = customMap(
    numbers,
    (num: number) => num * 2
  );

  expect(result.length).toBe(3);
  expect(0 in result).toBe(true);
  expect(1 in result).toBe(false);
  expect(2 in result).toBe(true);

  expect(result[0]).toBe(2);
  expect(result[2]).toBe(6);
});

});
