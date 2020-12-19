import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FlatListComponent = () => {
  const [people, setPeople] = useState([
    { name: "shaun", key: 1 },
    { name: "yoshi", key: 2 },
    { name: "mario", key: 3 },
    { name: "julgi", key: 4 },
    { name: "garou", key: 5 },
    { name: "garoux", key: 6 },
    { name: "dkoe", key: 7 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 24,
  },
});
