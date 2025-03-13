Array.prototype.averageRating = function (round = false) {
    let numbers = this
        .map((item) => typeof item === "string" && !isNaN(Number(item)) ? Number(item) : item)
        .filter((item) => typeof item === "number");
    if (numbers.length === 0)
        return 0;
    let total = numbers.reduce((a, b) => a + b, 0);
    let average = total / numbers.length;
    return round ? Math.round(average) : average;
};
export {};
