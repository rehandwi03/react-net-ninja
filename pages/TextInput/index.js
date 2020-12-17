import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TxtInput = () => {
  const [name, setName] = useState("shaun");
  const [age, setAge] = useState("30");
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="e.g 20"
        onChangeText={(val) => setAge(val)}
        keyboardType="numeric"
      />
      <TextInput>
        name: {name}, age: {age}
      </TextInput>
    </View>
  );
};

export default TxtInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
