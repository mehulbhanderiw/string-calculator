import { parseNumbers, sumNumbers } from "./utils";

/**
 * Sums up numbers provided in a string separated by commas or new lines.
 * @param numbers - A string containing numbers separated by commas or new lines.
 * @returns The sum of the numbers. Returns 0 if the input string is empty.
 */
export function add(numbers: string): number {
  // If the input string is empty or contains only whitespace, return 0
  if (numbers.trim() === "") {
    return 0;
  }

  // Split the string by commas or new lines and convert each substring to a number
  const numberArray = parseNumbers(numbers);

  // Sum the numbers in the array
  return sumNumbers(numberArray);
}
