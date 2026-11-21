
export function deepClone<T>(
  value: T,
  seen = new WeakMap<object, unknown>()
): T {
  if (value === null || typeof value !== "object") {
    return value;
  }

  const existing = seen.get(value);

  if (existing !== undefined) {
    return existing as T;
  }

  if (value instanceof Date) {
  const result = new Date(value.getTime());
  seen.set(value, result);
  return result as T;
}

if (value instanceof RegExp) {
  const result = new RegExp(value.source, value.flags);
  seen.set(value, result);
  return result as T;
}

  if (value instanceof Map) {
    const result = new Map();
    seen.set(value, result);

    for (const [key, item] of value) {
      result.set(deepClone(key, seen), deepClone(item, seen));
    }

    return result as T;
  }

  if (value instanceof Set) {
    const result = new Set();
    seen.set(value, result);

    for (const item of value) {
      result.add(deepClone(item, seen));
    }

    return result as T;
  }

  const result: object = Array.isArray(value)
    ? []
    : Object.create(Object.getPrototypeOf(value));

  seen.set(value, result);

  for (const key of Reflect.ownKeys(value)) {
    const descriptor = Object.getOwnPropertyDescriptor(value, key);

    if (descriptor) {
      if ("value" in descriptor) {
        descriptor.value = deepClone(descriptor.value, seen);
      }

      Object.defineProperty(result, key, descriptor);
    }
  }

  return result as T;
}
