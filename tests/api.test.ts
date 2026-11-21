
import { describe, it, expect, vi, beforeEach } from "vitest";

import { getDataWithAsyncAwait } from "../src/api/asyncAwait.js";
import { getDataWithPromises } from "../src/api/promises.js";

const mockFetch = vi.fn();

vi.stubGlobal("fetch", mockFetch);

const mockResponse = (data: unknown) => ({
  ok: true,
  json: async () => data
});

beforeEach(() => {
  mockFetch.mockReset();
});

describe("API tests", () => {

  it("should fetch data using async/await", async () => {
    mockFetch
      .mockResolvedValueOnce(mockResponse([{ id: 1, name: "John", email: "john@example.com" }]))
      .mockResolvedValueOnce(mockResponse([{ id: 1, userId: 1, title: "Test", body: "Hello" }]))
      .mockResolvedValueOnce(mockResponse([{ id: 1, userId: 1, title: "Task", completed: false }]));

    const result = await getDataWithAsyncAwait();

    expect(result.user).toHaveLength(1);
    expect(result.posts).toHaveLength(1);
    expect(result.todos).toHaveLength(1);
    expect(result.errors).toHaveLength(0);
  });

  it("should fetch data using promises", async () => {
    mockFetch
      .mockResolvedValueOnce(mockResponse([{ id: 1, name: "John", email: "john@example.com" }]))
      .mockResolvedValueOnce(mockResponse([{ id: 1, userId: 1, title: "Test", body: "Hello" }]))
      .mockResolvedValueOnce(mockResponse([{ id: 1, userId: 1, title: "Task", completed: false }]));

    const result = await getDataWithPromises();

    expect(result.user).toHaveLength(1);
    expect(result.posts).toHaveLength(1);
    expect(result.todos).toHaveLength(1);
    expect(result.errors).toHaveLength(0);
  });

});
