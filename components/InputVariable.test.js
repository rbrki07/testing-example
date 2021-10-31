// @ts-check
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { InputVariable } from "./InputVariable";

describe("InputVariable component", () => {
  it("should call `onSubmitEditing` for numeric input", () => {
    const onSubmitEditing = jest.fn();
    const { getByPlaceholderText } = render(
      <InputVariable onSubmitEditing={onSubmitEditing} />
    );
    const input = getByPlaceholderText("Numeric variable");
    fireEvent(input, "submitEditing", { nativeEvent: { text: "4711" } });
    expect(onSubmitEditing).toBeCalledWith({ variable: 4711 });
  });

  it("should NOT call `onSubmitEditing` for nonnumeric input", () => {
    const onSubmitEditing = jest.fn();
    const { getByPlaceholderText } = render(
      <InputVariable onSubmitEditing={onSubmitEditing} />
    );
    const input = getByPlaceholderText("Numeric variable");
    fireEvent(input, "submitEditing", { nativeEvent: { text: "dhsh" } });
    expect(onSubmitEditing).not.toBeCalled();
  });
});
