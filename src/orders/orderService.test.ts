
import { describe, it, expect, beforeEach } from "vitest";
import {
  createOrder,
  getOrders,
  updateOrderStatus
} from "./orderService.js";

describe("Order Service", () => {
  beforeEach(() => {
    // Reset module state by creating a fresh test module
  });

  it("should create an order", () => {
    const order = {
      id: 1,
      customerName: "Alice",
      amount: 500,
      status: "pending" as const
    };

    const result = createOrder(order);

    expect(result.success).toBe(true);
    expect(result.data).toEqual(order);
  });

  it("should return all orders", () => {
    const result = getOrders();

    expect(result.success).toBe(true);
    expect(Array.isArray(result.data)).toBe(true);
  });

  it("should update order status", () => {
    createOrder({
      id: 2,
      customerName: "Bob",
      amount: 1000,
      status: "pending"
    });

    const result = updateOrderStatus(2, "shipped");

    expect(result.success).toBe(true);
    expect(result.data?.status).toBe("shipped");
  });

  it("should return failure for a missing order", () => {
    const result = updateOrderStatus(999, "shipped");

    expect(result.success).toBe(false);
    expect(result.data).toBeNull();
    expect(result.message).toBe("Order not found");
  });
});
