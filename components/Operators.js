// @ts-check
import typedefs from "./../typedefs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * @param {Object} params
 * @param {typedefs.Operator} params.operator
 *
 * @returns {string}
 */
const renderOperator = ({ operator }) => {
  switch (operator) {
    case "add":
      return "+";
    case "substract":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
  }
};

/**
 * @param {Object} params
 * @param {typedefs.Operator} params.operator
 * @param {boolean} params.isSelected
 * @param {(operator: typedefs.OperatorObject) => void} params.setOperator
 * @param {string} [params.testID]
 *
 * @returns {Object}
 */
const Operator = ({ operator, isSelected, setOperator, testID }) => {
  return (
    <TouchableOpacity
      style={[
        styles.operator,
        isSelected
          ? { backgroundColor: "#f1faee" }
          : { backgroundColor: "#fff" },
      ]}
      onPress={() => setOperator({ operator })}
      testID={testID}
    >
      <Text>{renderOperator({ operator })}</Text>
    </TouchableOpacity>
  );
};

/**
 * @param {Object} params
 * @param {typedefs.Operator} params.operator
 * @param {(operator: typedefs.OperatorObject) => void} params.setOperator
 *
 * @returns {Object}
 */
const Operators = ({ operator, setOperator }) => {
  return (
    <View style={styles.container}>
      <Operator
        operator={"add"}
        isSelected={"add" === operator}
        setOperator={setOperator}
        testID={"addOperator"}
      />
      <Operator
        operator={"substract"}
        isSelected={"substract" === operator}
        setOperator={setOperator}
        testID={"substractOperator"}
      />
      <Operator
        operator={"multiply"}
        isSelected={"multiply" === operator}
        setOperator={setOperator}
        testID={"multiplyOperator"}
      />
      <Operator
        operator={"divide"}
        isSelected={"divide" === operator}
        setOperator={setOperator}
        testID={"divideOperator"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
  },
  operator: {
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 8,
    fontSize: 22,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.75,
    shadowRadius: 1,
  },
});

export { Operators };
