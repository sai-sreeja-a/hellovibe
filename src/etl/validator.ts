import type { RawSale } from "./types.js";

export function isValidSale(value: unknown): value is RawSale {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const sale = value as Record<string, unknown>;

  return (
    typeof sale.order_id === "number" &&
    typeof sale.customer === "string" &&
    sale.customer.trim().length > 0 &&
    typeof sale.category === "string" &&
    typeof sale.amount === "string" &&
    Number.isFinite(Number(sale.amount)) &&
    Number(sale.amount) >= 0 &&
    typeof sale.status === "string" &&
    typeof sale.date === "string" &&
    !Number.isNaN(Date.parse(sale.date))
  );
}