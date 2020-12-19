import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import List from "./pages/List";
import State from "./pages/State";
import TxtInput from "./pages/TextInput";
import FlatListComponent from "./pages/FlatList";

const App = () => {
  return (
    <View style={style.container}>
      {/* <State /> */}
      {/* <TxtInput /> */}
      {/* <List /> */}
      <FlatListComponent />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
