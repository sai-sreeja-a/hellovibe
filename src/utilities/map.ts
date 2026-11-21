
export function customMap<T, U>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => U
): U[] {

  // Create an array with the same length
  const result: U[] = new Array(array.length);

  for (let i = 0; i < array.length; i++) {

    // Check whether this index exists
    if (i in array) {
      result[i] = callback(array[i]!, i, array);
    }

  }

  return result;
}
