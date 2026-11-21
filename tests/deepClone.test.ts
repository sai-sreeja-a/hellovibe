
import { describe, it, expect } from "vitest";
import { deepClone } from "../src/utilities/deepClone.js";

describe("deepClone", () => {
  it("should clone primitive values", () => {
    expect(deepClone(10)).toBe(10);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
  });

  it("should clone nested objects", () => {
    const original = {
      name: "Alice",
      address: {
        city: "Hyderabad"
      }
    };

    const copy = deepClone(original);

    copy.address.city = "Mumbai";

    expect(original.address.city).toBe("Hyderabad");
    expect(copy.address.city).toBe("Mumbai");
  });

  
it("should clone arrays", () => {
  const original: (number | { value: number })[] = [
    1,
    2,
    { value: 3 }
  ];

  const copy = deepClone(original);

  const originalObject = original[2] as { value: number };
  const copiedObject = copy[2] as { value: number };

  copiedObject.value = 100;

  expect(originalObject.value).toBe(3);
  expect(copiedObject.value).toBe(100);
});


  it("should clone Date objects", () => {
    const original = new Date("2026-01-01");
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  it("should clone RegExp objects", () => {
    const original = /hello/gi;
    const copy = deepClone(original);

    expect(copy.source).toBe(original.source);
    expect(copy.flags).toBe(original.flags);
    expect(copy).not.toBe(original);
  });

  it("should clone Map objects", () => {
    const original = new Map([
      ["name", { value: "Alice" }]
    ]);

    const copy = deepClone(original);
    copy.get("name")!.value = "Bob";

    expect(original.get("name")!.value).toBe("Alice");
  });

  it("should clone Set objects", () => {
    const original = new Set([{ value: 10 }]);
    const copy = deepClone(original);

    const copiedItem = [...copy][0];
    copiedItem.value = 20;

    expect([...original][0].value).toBe(10);
  });

  it("should handle circular references", () => {
    const original: { name: string; self?: unknown } = {
      name: "Alice"
    };

    original.self = original;

    const copy = deepClone(original);

    expect(copy).not.toBe(original);
    expect(copy.self).toBe(copy);
  });

  it("should preserve shared references", () => {
    const shared = { value: 10 };

    const original = {
      first: shared,
      second: shared
    };

    const copy = deepClone(original);

    expect(copy.first).toBe(copy.second);
    expect(copy.first).not.toBe(shared);
  });

  it("should preserve symbol properties", () => {
    const key = Symbol("secret");
    const original = { [key]: { value: 10 } };

    const copy = deepClone(original);

    expect(copy[key]).toEqual({ value: 10 });
    expect(copy[key]).not.toBe(original[key]);
  });
});
