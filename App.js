import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Basic from "./Basic/Index";

export default function App() {
  return (
    <View style={styles.container}>
      <Basic />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
