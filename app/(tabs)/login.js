import { View, Text } from "react-native";

function Login({ darkMode }) {


  return (
    <View>
      <Text style={{ color: darkMode ? "#fff" : "#000" }}>
        Login Screen
      </Text>
    </View>
  );
}
export default Login;
