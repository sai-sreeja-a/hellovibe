
import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, mkdirSync } from "node:fs";

describe("ETL Data Generation Tests", () => {
  let data: any[];

  beforeAll(async () => {
    // Ensure data folder exists
    mkdirSync("data", { recursive: true });

    // Run the data generation script
    await import("../src/etl/generateData.js");

    // Read generated JSON file
    const file = readFileSync("data/messy-data.json", "utf-8");

    data = JSON.parse(file);
  });

  it("should generate 1000 records", () => {
    expect(data).toHaveLength(1000);
  });

  it("should contain order IDs", () => {
    expect(data[0].order_id).toBe(1);
    expect(data[999].order_id).toBe(1000);
  });

  it("should contain customer names", () => {
    expect(data[0].customer).toBe(" Customer 1 ");
  });

  it("should contain all four categories", () => {
    const categories = [
      "Electronics",
      "Clothing",
      "Food",
      "Furniture"
    ];

    expect(categories).toContain(data[0].category);
    expect(categories).toContain(data[1].category);
    expect(categories).toContain(data[2].category);
    expect(categories).toContain(data[3].category);
  });

  it("should contain invalid amounts", () => {
    expect(data[0].amount).toBe("invalid");
  });

  it("should contain intentionally messy customer data", () => {
    expect(data[5].customer).toBe("");
    expect(data[10].category).toBe(" electronics ");
    expect(data[15].amount).toBe("-100");
  });

  it("should contain order statuses", () => {
    expect(data[0].status).toBe(" COMPLETED ");
    expect(data[1].status).toBe("pending");
  });
});
