import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a lowercase word", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("should not change the first letter if it is already capitalized", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should handle single-character strings", () => {
    expect(capitalizeFirstLetter("a")).toBe("A");
    expect(capitalizeFirstLetter("A")).toBe("A");
  });

  it("should return an empty string if input is an empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should not modify the rest of the string", () => {
    expect(capitalizeFirstLetter("hELLO")).toBe("HELLO");
  });

  it("should handle strings with special characters", () => {
    expect(capitalizeFirstLetter("!hello")).toBe("!hello");
    expect(capitalizeFirstLetter("123abc")).toBe("123abc");
  });
});
