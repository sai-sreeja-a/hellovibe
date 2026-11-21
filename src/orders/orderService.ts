
import type { Order, OrderStatus, ApiResponse } from "./types.js";

let orders: Order[] = [];

export function createOrder(
  order: Order
): ApiResponse<Order> {
  orders.push(order);

  return {
    success: true,
    data: order,
    message: "Order created successfully"
  };
}

export function getOrders(): ApiResponse<Order[]> {
  return {
    success: true,
    data: orders,
    message: "Orders fetched successfully"
  };
}

export function updateOrderStatus(
  orderId: number,
  status: OrderStatus
): ApiResponse<Order | null> {
  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    return {
      success: false,
      data: null,
      message: "Order not found"
    };
  }

  order.status = status;

  return {
    success: true,
    data: order,
    message: "Order status updated successfully"
  };
}
