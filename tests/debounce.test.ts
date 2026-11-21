
import { describe, it, expect, vi, afterEach } from "vitest";
import { debounce } from "../src/utilities/debounce.js";

describe("debounce", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should call the function after the delay", () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(500);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should reset the timer when called again", () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();

    vi.advanceTimersByTime(300);

    debounced();

    vi.advanceTimersByTime(300);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments to the callback", () => {
    vi.useFakeTimers();

    const callback = vi.fn((name: string) => name);
    const debounced = debounce(callback, 300);

    debounced("Hello");

    vi.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledWith("Hello");
  });

  it("should use the latest arguments", () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debounced = debounce(callback, 300);

    debounced("First");
    debounced("Second");

    vi.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("Second");
  });
});
