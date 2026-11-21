
import { readFileSync } from "node:fs";

import { parseData } from "./parser.js";
import { isValidSale } from "./validator.js";
import { normalizeSale } from "./normalizer.js";
import { summarizeSales } from "./summary.js";

import type { CleanSale } from "./types.js";

export function runETL(json: string) {
  // STEP 1: Parse JSON
  const rawRows = parseData(json);

  const validRows: CleanSale[] = [];
  const rejectedRows: unknown[] = [];

  // STEP 2: Validate and normalize
  for (const row of rawRows) {
    if (isValidSale(row)) {
      validRows.push(normalizeSale(row));
    } else {
      rejectedRows.push(row);
    }
  }

  // STEP 3: Generate summaries
  const summaries = summarizeSales(validRows);

  // STEP 4: Return final result
  return {
    totalRows: rawRows.length,
    validRows: validRows.length,
    rejectedRows: rejectedRows.length,
    sales: validRows,
    summaries
  };
}

// STEP 5: Read dataset
const json = readFileSync(
  "data/messy-data.json",
  "utf-8"
);

// STEP 6: Execute ETL
const result = runETL(json);

// STEP 7: Display results
console.log("ETL PROCESS COMPLETED");

console.log("Total rows:", result.totalRows);
console.log("Valid rows:", result.validRows);
console.log("Rejected rows:", result.rejectedRows);

console.log("\nCategory summaries:");
console.table(result.summaries);
