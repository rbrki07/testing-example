// @ts-check
import typedefs from "./../typedefs";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { isNumeric } from "../helper/variables";

/**
 * @param {Object} params
 * @param {(variable: typedefs.VariableObject) => void} params.onSubmitEditing
 *
 * @returns {Object}
 */
const InputVariable = ({ onSubmitEditing }) => {
  return (
    <View>
      <TextInput
        placeholder={"Numeric variable"}
        onSubmitEditing={({ nativeEvent: { text } }) => {
          if (isNumeric({ text })) {
            onSubmitEditing({ variable: parseFloat(text) });
          }
        }}
        keyboardType={"numeric"}
        returnKeyType={"done"}
        clearButtonMode={"while-editing"}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 192,
    backgroundColor: "#f1faee",
    margin: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    fontSize: 22,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.75,
    shadowRadius: 1,
    textAlign: "center",
  },
});

export { InputVariable };
