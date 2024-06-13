import { add } from "@/functions";

describe("add function", () => {
  // Test case for valid input
  it("should return the correct sum for valid comma-separated numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  // Test case for empty input
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  // Test case for input with spaces
  it("should handle input with spaces around numbers", () => {
    expect(add("1 , 2 , 3")).toBe(6);
  });

  // Test case for input with floating point numbers
  it("should handle input with floating point numbers", () => {
    expect(add("1.5, 2.5")).toBe(4);
  });

  // Test case for invalid input
  it("should throw an error for input containing invalid characters", () => {
    expect(() => add("1, a, 3")).toThrow("Invalid number:  a");
  });

  // Test case for valid input with new lines and commas
  it("should handle numbers separated by new lines and commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Test case for multiple new lines and commas
  it("should handle multiple new lines and commas", () => {
    expect(add("1\n2\n3,4\n5")).toBe(15);
  });

  // Test case for new lines and no commas
  it("should handle numbers separated by new lines only", () => {
    expect(add("1\n2\n3")).toBe(6);
  });

  // Test case for mixed new lines and commas with spaces
  it("should handle numbers with spaces between new lines and commas", () => {
    expect(add("1\n 2 , 3\n4")).toBe(10);
  });

  // Test case for custom delimiter
  it("should handle custom delimiter specified at the beginning of the string", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Test case for custom delimiter with multiple numbers
  it("should handle custom delimiter with multiple numbers", () => {
    expect(add("//|\n1|2|3")).toBe(6);
  });

  // Test case for custom delimiter with newline
  it("should handle custom delimiter with newline in numbers", () => {
    expect(add("//;\n1;2\n3")).toBe(6);
  });

  // Test case for custom delimiter with spaces
  it("should handle custom delimiter with spaces around numbers", () => {
    expect(add("//;\n1 ; 2 ; 3")).toBe(6);
  });

  // Test case for invalid custom delimiter input
  it("should throw an error for input with invalid custom delimiter characters", () => {
    expect(() => add("//;\n1; a ;3")).toThrow("Invalid number:  a ");
  });
});
