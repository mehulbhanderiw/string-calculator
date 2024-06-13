import { extractDelimiterAndClean, parseNumbers, sumNumbers } from "./utils";

/**
 * Sums up numbers provided in a string with support for custom delimiters.
 * @param numbers - A string containing numbers and optionally a custom delimiter.
 * @returns The sum of the numbers. Returns 0 if the input string is empty.
 */
export function add(numbers: string): number {
  // If the input string is empty or contains only whitespace, return 0
  if (numbers.trim() === "") {
    return 0;
  }

  // Replace escaped newlines with actual newlines
  numbers = numbers.replace(/\\n/g, "\n");

  // Extract the delimiter and adjust the numbers string
  const { delimiter, cleanedNumbers } = extractDelimiterAndClean(numbers);

  // Split the string by the custom delimiter or default to comma and new line
  const numberArray = parseNumbers(cleanedNumbers, delimiter);

  // Sum the numbers in the array
  return sumNumbers(numberArray);
}
