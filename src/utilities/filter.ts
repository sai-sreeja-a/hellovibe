
export function customFilter<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => unknown
): T[] {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i in array && callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
