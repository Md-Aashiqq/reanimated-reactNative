import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Animated from "react-native-reanimated";

import Channel from "./Chanel";

export default function App() {
  return (
    <View style={styles.container}>
      <Channel />
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
