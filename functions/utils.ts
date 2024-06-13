/**
 * Parses numbers from a comma-separated string.
 * @param numbers - A string containing numbers separated by commas.
 * @returns An array of numbers parsed from the input string.
 * @throws Error if any substring cannot be converted to a valid number.
 */
export function parseNumbers(numbers: string): number[] {
  return numbers.split(",").map((num) => {
    // Trim whitespace from each substring and convert to a number
    const parsedNumber = Number(num.trim());

    // Check if the conversion resulted in NaN (Not a Number)
    if (isNaN(parsedNumber)) {
      throw new Error(`Invalid number: ${num}`);
    }

    return parsedNumber;
  });
}

/**
 * Computes the sum of numbers in an array.
 * @param numbers - An array of numbers to sum.
 * @returns The sum of numbers in the input array.
 */
export function sumNumbers(numbers: number[]): number {
  // Use reduce to sum all numbers in the array, starting with an initial value of 0
  return numbers.reduce((sum, num) => sum + num, 0);
}
