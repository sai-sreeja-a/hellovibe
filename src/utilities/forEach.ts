
export function customForEach<T>(
  array: T[],
  callback: (
    value: T,
    index: number,
    array: T[]
  ) => void
): void {
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      callback(array[i]!, i, array);
    }
  }
}
