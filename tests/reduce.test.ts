
import { describe, it, expect } from "vitest";
import { customReduce } from "../src/utilities/reduce.js";

describe("customReduce", () => {
  it("should calculate the sum of numbers", () => {
    const result = customReduce(
      [1, 2, 3, 4],
      (acc, current) => acc + current,
      0
    );

    expect(result).toBe(10);
  });

  it("should calculate the product of numbers", () => {
    const result = customReduce(
      [1, 2, 3, 4],
      (acc, current) => acc * current,
      1
    );

    expect(result).toBe(24);
  });

  it("should work with strings", () => {
    const result = customReduce(
      ["Hello", " ", "World"],
      (acc, current) => acc + current,
      ""
    );

    expect(result).toBe("Hello World");
  });

  it("should return initial value for an empty array", () => {
    const result = customReduce(
      [] as number[],
      (acc, current) => acc + current,
      100
    );

    expect(result).toBe(100);
  });

  it("should pass the correct index to callback", () => {
    const indexes: number[] = [];

    customReduce(
      [10, 20, 30],
      (acc, current, index) => {
        indexes.push(index);
        return acc + current;
      },
      0
    );

    expect(indexes).toEqual([0, 1, 2]);
  });

  it("should not modify the original array", () => {
    const numbers = [1, 2, 3];

    customReduce(numbers, (acc, current) => acc + current, 0);

    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should handle sparse arrays", () => {
    const numbers: number[] = new Array(3);
    numbers[0] = 1;
    numbers[2] = 3;

    const result = customReduce(
      numbers,
      (acc, current) => acc + current,
      0
    );

    expect(result).toBe(4);
  });

  it("should support a different accumulator type", () => {
    const result = customReduce(
      [1, 2, 3],
      (acc, current) => [...acc, String(current)],
      [] as string[]
    );

    expect(result).toEqual(["1", "2", "3"]);
  });
});
