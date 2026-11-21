
import { writeFileSync } from "node:fs";

const categories = [
  "Electronics",
  "Clothing",
  "Food",
  "Furniture"
];

const data = Array.from({ length: 1000 }, (_, index) => ({
  order_id: index + 1,

  customer: ` Customer ${index + 1} `,

  category: categories[index % categories.length],

  amount: index % 10 === 0
    ? "invalid"
    : String((index + 1) * 10),

  status: index % 3 === 0
    ? " COMPLETED "
    : "pending",

  date: `2026-${String((index % 12) + 1).padStart(2, "0")}-15`
}));

// Introduce messy records
data[5].customer = "";
data[10].category = " electronics ";
data[15].amount = "-100";

writeFileSync(
  "data/messy-data.json",
  JSON.stringify(data, null, 2)
);

console.log("Successfully generated 1000 records!");
