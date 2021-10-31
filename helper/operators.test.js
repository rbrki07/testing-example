// @ts-check
import { calculate } from "./operators";

describe("Operators helper", () => {
  it("should calculate correctly", () => {
    let result = calculate({ a: 1, b: 2, operator: "add" });
    expect(result).toBe(3);
    result = calculate({ a: 1, b: 2, operator: "substract" });
    expect(result).toBe(-1);
    result = calculate({ a: 1, b: 2, operator: "multiply" });
    expect(result).toBe(2);
    result = calculate({ a: 1, b: 2, operator: "divide" });
    expect(result).toBe(0.5);
    // @ts-ignore
    result = calculate({ a: 1, b: 2, operator: "foo" });
    expect(result).toBe(NaN);
    // @ts-ignore
    result = calculate({ a: "a", b: 2, operator: "add" });
    expect(result).toBe(NaN);
    // @ts-ignore
    result = calculate({ a: 1, b: "b", operator: "add" });
    expect(result).toBe(NaN);
  });
});
