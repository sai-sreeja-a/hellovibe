
export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  id: number;
  customerName: string;
  amount: number;
  status: OrderStatus;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
