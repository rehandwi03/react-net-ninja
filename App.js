import React from "react";
import { View, Text, StyleSheet } from "react-native";
import State from "./pages/State";
import TxtInput from "./pages/TextInput";

const App = () => {
  return (
    <View style={style.container}>
      {/* <State /> */}
      <TxtInput />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
