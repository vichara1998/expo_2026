import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

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
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>


      <View style={[
        styles.buttonRow,
        {
          backgroundColor: darkMode ? "#000" : "#fff",
          borderColor: darkMode ? "#fff" :  "#000",
        },
      ]}
      >
      {/* <LinearGradient
        colors={[
          "rgba(0,150,255,0.2)",
          "rgba(255,0,150,0.2)",
          "rgba(255,255,255,0.9)",
        ]}
        style={styles.buttonRow}
      > */}

      
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#c2b9b9" }]}
          onPress={() => setDarkMode(false)}
        >
          <Ionicons name="sunny-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setDarkMode(true)}
        >
          <Ionicons name="moon-outline" size={20} color="white" />
        </TouchableOpacity>
      {/* </LinearGradient> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: 1,
    backgroundColor: "#3b82f6",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonRow: {
    flexDirection: "row-reverse",
    gap: 5,
    borderRadius: 30,
    borderWidth: 2,
    
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
