import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Color, Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> myApp </Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ Color: "blue" }}>
        Go to profile
      </Link>
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
