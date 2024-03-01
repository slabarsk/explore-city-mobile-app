import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  TextInput,
  VStack,
  Text,
  HStack,
  Button,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import Logo from "./components/logo";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {};

  return (
    <SafeAreaView>
      <Logo />
      <VStack spacing={4} style={{ padding: 16 }}>
        <VStack spacing={1}>
          <Text variant="h5">Login</Text>
          <Text variant="subtitle1">Continue to your adventure!</Text>
        </VStack>
        <VStack spacing={2}>
          <TextInput
            label="Email"
            variant="outlined"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            label="Password"
            variant="outlined"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </VStack>
        <HStack justify="between">
          <Button
            title="Register Instead"
            variant="text"
            compact
            onPress={handleRegister}
          />
          <Button
            style={buttonStyle.buttonColor}
            title="Login"
            onPress={handleLogin}
            loading={isLoading}
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

const buttonStyle = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#8B00FF",
    color: "#fff",
  },
});

export default Login;
