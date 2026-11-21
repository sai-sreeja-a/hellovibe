
import { describe, it, expect, vi } from "vitest";
import { customForEach } from "../src/utilities/forEach.js";

describe("customForEach", () => {
  it("should iterate over every element", () => {
    const callback = vi.fn();

    customForEach([1, 2, 3], callback);

    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("should pass the correct value", () => {
    const values: number[] = [];

    customForEach([10, 20, 30], (value) => {
      values.push(value);
    });

    expect(values).toEqual([10, 20, 30]);
  });

  it("should pass the correct index", () => {
    const indexes: number[] = [];

    customForEach([10, 20, 30], (_, index) => {
      indexes.push(index);
    });

    expect(indexes).toEqual([0, 1, 2]);
  });

  it("should pass the original array", () => {
    const numbers = [1, 2, 3];
    const callback = vi.fn();

    customForEach(numbers, callback);

    expect(callback.mock.calls[0][2]).toBe(numbers);
  });

  it("should handle an empty array", () => {
    const callback = vi.fn();

    customForEach([], callback);

    expect(callback).not.toHaveBeenCalled();
  });

  it("should not return a value", () => {
    const result = customForEach([1, 2, 3], () => {});

    expect(result).toBeUndefined();
  });

  it("should skip empty slots in sparse arrays", () => {
    const numbers: number[] = new Array(3);
    numbers[0] = 10;
    numbers[2] = 30;

    const values: number[] = [];

    customForEach(numbers, (value) => {
      values.push(value);
    });

    expect(values).toEqual([10, 30]);
  });

  it("should not modify the original array", () => {
    const numbers = [1, 2, 3];

    customForEach(numbers, () => {});

    expect(numbers).toEqual([1, 2, 3]);
  });
});
