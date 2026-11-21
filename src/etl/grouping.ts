
import type { CleanSale } from "./types.js";

export function groupByCategory(sales: CleanSale[]) {
  const groups = new Map<string, CleanSale[]>();

  for (const sale of sales) {
    const existing = groups.get(sale.category) ?? [];

    existing.push(sale);

    groups.set(sale.category, existing);
  }

  return groups;
}
