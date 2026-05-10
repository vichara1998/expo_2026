import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#000" : "#fff",
        },
      ]}
    >
      <Text
        style={{
          color: darkMode ? "#ffffff" : "#000",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>
      <Button
        onPress={() => {
          setDarkMode(false);
        }}
        title="Light"
        color="#c2b9b9"
      />
      <TouchableOpacity style={styles.button} onPress={() => setDarkMode(true)}>
        <Text style={styles.buttonText}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: "#2b2929",
    fontSize: 18,
    fontWeight: "bold",
  },
});
