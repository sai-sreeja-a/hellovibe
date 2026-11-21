
import { describe, it, expect } from "vitest";
import { customFilter } from "../src/utilities/filter.js";

describe("customFilter function", () => {

  it("should filter even numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    const result = customFilter(
      numbers,
      num => num % 2 === 0
    );

    expect(result).toEqual([2, 4, 6]);
  });

  it("should filter numbers greater than 10", () => {
    const numbers = [5, 10, 15, 20, 25];

    const result = customFilter(
      numbers,
      num => num > 10
    );

    expect(result).toEqual([15, 20, 25]);
  });

  it("should filter strings by length", () => {
    const names = ["John", "Alexander", "Sam", "Christopher"];

    const result = customFilter(
      names,
      name => name.length > 4
    );

    expect(result).toEqual(["Alexander", "Christopher"]);
  });

  it("should return an empty array for empty input", () => {
    const result = customFilter([], num => num > 0);

    expect(result).toEqual([]);
  });

  it("should return an empty array when no elements match", () => {
    const numbers = [1, 2, 3];

    const result = customFilter(
      numbers,
      num => num > 10
    );

    expect(result).toEqual([]);
  });

  it("should not modify the original array", () => {
    const numbers = [1, 2, 3, 4];

    customFilter(numbers, num => num > 2);

    expect(numbers).toEqual([1, 2, 3, 4]);
  });

  it("should return a new array", () => {
    const numbers = [1, 2, 3];

    const result = customFilter(numbers, num => num > 0);

    expect(result).not.toBe(numbers);
  });

  it("should provide the index to the callback", () => {
    const numbers = [10, 20, 30];

    const result = customFilter(
      numbers,
      (num, index) => index === 1
    );

    expect(result).toEqual([20]);
  });

  it("should preserve original values and skip sparse array holes", () => {
    const numbers: number[] = new Array(3);
    numbers[0] = 10;
    numbers[2] = 30;

    const result = customFilter(numbers, () => true);

    expect(result).toEqual([10, 30]);
  });

});
