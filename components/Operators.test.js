// @ts-check
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Operators } from "./Operators";

describe("Operators component", () => {
  it("should set `isSelected` correctly", () => {
    const setOperator = jest.fn();
    let operator = "add";

    const { getByText } = render(
      // @ts-ignore
      <Operators operator={operator} setOperator={setOperator} />
    );

    let component = getByText("+");
    expect(component.parent?.props.style).toMatchObject({
      backgroundColor: "#f1faee",
    });

    fireEvent.press(component);
    expect(setOperator).toHaveBeenCalledWith({ operator });

    component = getByText("-");
    expect(component.parent?.props.style).toMatchObject({
      backgroundColor: "#fff",
    });
  });

  it("should render correctly", () => {
    const setOperator = jest.fn();
    const operator = "add";
    expect(
      render(
        <Operators operator={operator} setOperator={setOperator} />
      ).toJSON()
    ).toMatchSnapshot();
  });
});
