// @ts-check
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("App integration tests", () => {
  it("should show the correct result", () => {
    const { getAllByPlaceholderText, getByText, queryByText } = render(<App />);
    const inputs = getAllByPlaceholderText("Numeric variable");
    const operator = getByText("+");
    fireEvent(inputs[0], "submitEditing", { nativeEvent: { text: "40" } });
    fireEvent.press(operator);
    fireEvent(inputs[1], "submitEditing", { nativeEvent: { text: "2" } });
    const result = queryByText("42");
    expect(result).not.toBe(null);
  });

  it("should show `NaN` for wrong input", () => {
    const { getAllByPlaceholderText, getByText, queryByText } = render(<App />);
    const inputs = getAllByPlaceholderText("Numeric variable");
    const operator = getByText("+");
    fireEvent(inputs[0], "submitEditing", { nativeEvent: { text: "forty" } });
    fireEvent.press(operator);
    fireEvent(inputs[1], "submitEditing", { nativeEvent: { text: "two" } });
    const result = queryByText("NaN");
    expect(result).not.toBe(null);
  });

  it("should render correctly", () => {
    expect(render(<App />).toJSON()).toMatchSnapshot();
  });
});
