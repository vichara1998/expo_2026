import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import Login from "./login";
import { router } from "expo-router";
import { Button, Card } from 'react-native-paper';

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
<Card>
        <Card.Content>
          <Text >Paper Working </Text>
          <Button mode="contained" onPress={() => console.log('Clicked')}>
            Click Me
          </Button>
        </Card.Content>
      </Card>



      <Text
        style={{
          color: darkMode ? "#ffffff" : "#000",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>

      <View
        style={[
          styles.buttonRow,
          {
            backgroundColor: darkMode ? "#000" : "#fff",
            borderColor: darkMode ? "#fff" : "#000",
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
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{ marginTop: 20, padding: 10, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white" }}>Go to Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/register")}
        style={{ marginTop: 20, padding: 10, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white" }}>Go to Register</Text>
      </TouchableOpacity>
      <View >
        {/* <Login darkMode={ darkMode } /> */}
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
  tinyLogo: {
    margin: 5,
    width: 100,
    height: 100,
    borderWidth: 2 ,
    borderColor: '#1765f5',
    borderRadius: 50
  },
  login: {
    color: '#fff'
  },
});
