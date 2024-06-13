/**
 * Extracts the custom delimiter and cleans the input string.
 * @param numbers - A string that may contain a custom delimiter format.
 * @returns An object containing the delimiter and the cleaned numbers string.
 */
export function extractDelimiterAndClean(numbers: string): {
  delimiter: string;
  cleanedNumbers: string;
} {
  let delimiter = ",";
  let cleanedNumbers = numbers;

  // Check if the input string starts with "//"
  if (numbers.startsWith("//")) {
    // Find the position of the new line character after "//"
    const delimiterEndIndex = numbers.indexOf("\n");

    // Extract the delimiter substring between "//" and the new line character
    delimiter = numbers.substring(2, delimiterEndIndex);
    cleanedNumbers = numbers.substring(delimiterEndIndex + 1);
  }

  return { delimiter, cleanedNumbers };
}

/**
 * Parses numbers from a string separated by a given delimiter.
 * @param numbers - A string containing numbers separated by the delimiter.
 * @param delimiter - The delimiter used to separate numbers.
 * @returns An array of numbers parsed from the input string.
 * @throws Error if any substring cannot be converted to a valid number.
 */
export function parseNumbers(numbers: string, delimiter: string): number[] {
  // Split the input string by the provided delimiter
  const numberStrings = numbers.split(new RegExp(`[${delimiter}\n]`));

  return numberStrings.map((num) => {
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
