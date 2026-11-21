
import { describe, it, expect, vi } from "vitest";

import { customMap } from "../src/utilities/map.js";
import { customFilter } from "../src/utilities/filter.js";
import { customReduce } from "../src/utilities/reduce.js";
import { debounce } from "../src/utilities/debounce.js";
import { deepClone } from "../src/utilities/deepClone.js";

describe("Custom Map", () => {
  it("transforms array elements", () => {
    expect(customMap([1, 2, 3], n => n * 2))
      .toEqual([2, 4, 6]);
  });
});

describe("Custom Filter", () => {
  it("filters matching elements", () => {
    expect(customFilter([1, 2, 3, 4], n => n > 2))
      .toEqual([3, 4]);
  });
});

describe("Custom Reduce", () => {
  it("calculates sum", () => {
    expect(
      customReduce([1, 2, 3, 4], (sum, n) => sum + n, 0)
    ).toBe(10);
  });
});

describe("Debounce", () => {
  it("executes only the last call", () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const search = debounce(callback, 500);

    search("J");
    search("Ja");
    search("JavaScript");

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("JavaScript");

    vi.useRealTimers();
  });
});

describe("Deep Clone", () => {
  it("creates an independent nested object", () => {
    const original = {
      name: "Alex",
      address: {
        city: "Hyderabad"
      }
    };

    const copy = deepClone(original);

    copy.address.city = "Mumbai";

    expect(original.address.city).toBe("Hyderabad");
  });

  it("supports circular references", () => {
    const original: { self?: unknown } = {};
    original.self = original;

    const copy = deepClone(original);

    expect(copy.self).toBe(copy);
  });
});
