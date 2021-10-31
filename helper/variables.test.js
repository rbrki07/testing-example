// @ts-check
import { isNumeric } from "./variables";

describe("Variables helper", () => {
  it("should detect a numeric string", () => {
    let result = isNumeric({ text: "123456" }); // 123456
    expect(result).toBe(true);
    result = isNumeric({ text: "47.11" }); // 47.11
    expect(result).toBe(true);
    result = isNumeric({ text: "47,11" }); // 47
    expect(result).toBe(true);
    result = isNumeric({ text: "0011" }); // 11
    expect(result).toBe(true);
  });

  it("should detect a non-numeric string", () => {
    let result = isNumeric({ text: "dhsh" });
    expect(result).toBe(false);
    result = isNumeric({ text: "a" });
    expect(result).toBe(false);
    result = isNumeric({ text: "b" });
    expect(result).toBe(false);
    result = isNumeric({ text: "x^2" });
    expect(result).toBe(false);
  });
});
