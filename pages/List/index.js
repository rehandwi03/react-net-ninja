import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const List = () => {
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
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default List;

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
  },
});
