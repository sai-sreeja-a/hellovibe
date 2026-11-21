
export interface RawSale {
  order_id: unknown;
  customer: unknown;
  category: unknown;
  amount: unknown;
  status: unknown;
  date: unknown;
}

export interface CleanSale {
  orderId: number;
  customer: string;
  category: string;
  amount: number;
  status: "COMPLETED" | "PENDING";
  date: string;
}

export interface CategorySummary {
  category: string;
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
}
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface CombinedResult {
  user: User;
  posts: Post[];
  todos: Todo[];
}