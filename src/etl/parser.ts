export function parseData(json: string): unknown[] {
  const parsed: unknown = JSON.parse(json);

  if (!Array.isArray(parsed)) {
    throw new Error("Dataset must be an array");
  }

  return parsed;
}