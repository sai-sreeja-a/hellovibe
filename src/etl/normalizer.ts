
import type { RawSale, CleanSale } from "./types.js";

export function normalizeSale(sale: RawSale): CleanSale {
  const status = String(sale.status).trim().toUpperCase();

  return {
    orderId: Number(sale.order_id),
    customer: String(sale.customer).trim(),
    category: String(sale.category).trim().toUpperCase(),
    amount: Number(sale.amount),
    status: status === "COMPLETED" ? "COMPLETED" : "PENDING",
    date: new Date(String(sale.date)).toISOString().slice(0, 10)
  };
}
