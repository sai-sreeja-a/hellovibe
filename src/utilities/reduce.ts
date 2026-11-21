
export function customReduce<T, U>(
  array: T[],
  callback: (
    accumulator: U,
    currentValue: T,
    index: number,
    array: T[]
  ) => U,
  initialValue: U
): U {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      accumulator = callback(
        accumulator,
        array[i],
        i,
        array
      );
    }
  }

  return accumulator;
}
