import { mergeClasses } from "./mergeClasses";

describe("mergeClasses", () => {
  it("should return a single class string when one string is provided", () => {
    expect(mergeClasses("class1")).toBe("class1");
  });

  it("should merge multiple class strings into one string separated by spaces", () => {
    expect(mergeClasses("class1", "class2", "class3")).toBe("class1 class2 class3");
  });

  it("should include classes from an object where the value is true", () => {
    expect(mergeClasses({ class1: true, class2: false, class3: true })).toBe("class1 class3");
  });

  it("should handle a mix of strings and objects", () => {
    expect(mergeClasses("class1", { class2: true, class3: false }, "class4")).toBe("class1 class2 class4");
  });

  it("should ignore undefined values", () => {
    expect(mergeClasses("class1", undefined, { class2: true })).toBe("class1 class2");
  });

  it("should return an empty string if no classes are provided", () => {
    expect(mergeClasses()).toBe("");
  });

  it("should handle an empty object gracefully", () => {
    expect(mergeClasses({})).toBe("");
  });

  it("should handle an object with all false values gracefully", () => {
    expect(mergeClasses({ class1: false, class2: false })).toBe("");
  });
});