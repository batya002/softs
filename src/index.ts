declare global {
  interface Array<T> {
    averageRating(round?: boolean): number;
  }
}

Array.prototype.averageRating = function (
  this: Array<string | number>,
  round: boolean = false
): number {
  let numbers: number[] = this
    .map((item: string | number) =>
      typeof item === "string" && !isNaN(Number(item)) ? Number(item) : item
    )
    .filter((item: string | number): item is number => typeof item === "number");

  if (numbers.length === 0) return 0;

  let total = numbers.reduce((a, b) => a + b, 0);
  let average = total / numbers.length;

  return round ? Math.round(average) : average;
};

export {};
