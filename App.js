import React from "react";
import { StyleSheet, View } from "react-native";
import Feed from "./src/views/Feed";

export default function App() {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
