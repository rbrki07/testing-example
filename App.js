// @ts-check
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { InputVariable } from "./components/InputVariable";
import { Operators } from "./components/Operators";
import { calculate } from "./helper/operators";

const App = () => {
  const [variables, setVariables] = useState({ a: NaN, b: NaN });
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState(NaN);

  useEffect(() => {
    setResult(
      // @ts-ignore
      calculate({ a: variables.a, b: variables.b, operator: operator })
    );
  }, [variables, operator]);

  return (
    <SafeAreaView style={styles.container}>
      <InputVariable
        onSubmitEditing={({ variable }) =>
          setVariables({ ...variables, a: variable })
        }
      />
      <Operators
        // @ts-ignore
        operator={operator}
        setOperator={({ operator }) => setOperator(operator)}
      />
      <InputVariable
        onSubmitEditing={({ variable }) =>
          setVariables({ ...variables, b: variable })
        }
      />
      <Text>{result}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default App;
