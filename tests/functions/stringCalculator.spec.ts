import { add } from "@/functions";

describe('add function', () => {
  // Test case for valid input
  it('should return the correct sum for valid comma-separated numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  // Test case for empty input
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  // Test case for input with spaces
  it('should handle input with spaces around numbers', () => {
    expect(add("1 , 2 , 3")).toBe(6);
  });

  // Test case for input with floating point numbers
  it('should handle input with floating point numbers', () => {
    expect(add("1.5, 2.5")).toBe(4);
  });

  // Test case for invalid input
  it('should throw an error for input containing invalid characters', () => {
    expect(() => add("1, a, 3")).toThrow("Invalid number:  a");
  });
});