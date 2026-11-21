
import type { CleanSale, CategorySummary } from "./types.js";
import { groupByCategory } from "./grouping.js";

export function summarizeSales(
  sales: CleanSale[]
): CategorySummary[] {

  const groups = groupByCategory(sales);

  return Array.from(groups.entries()).map(
    ([category, records]) => {

      const totalRevenue = records.reduce(
        (sum, sale) => sum + sale.amount,
        0
      );

      return {
        category,
        totalOrders: records.length,
        totalRevenue,
        averageOrderValue: Number(
          (totalRevenue / records.length).toFixed(2)
        )
      };
    }
  );
}
