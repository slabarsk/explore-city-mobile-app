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
import Logo from "./components/Logo";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const [_, setUser] = useAuth();

  const handleLogin = () => {
    setIsLoading(true)
    axios({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
      params: {
        key: "AIzaSyCQG_URXefNRU5GPb29isou4E2ifu528l8",
      },
      data: {
        email,
        password,
      },
    }).then(res => {
      setUser(res.data);
    }).catch((e) => {})
    .finally(() => {
      setIsLoading(false);
    })
  };
  
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView>

      <Logo />
      <VStack spacing={16} style={{ padding: 36 }}>
        <VStack spacing={6}>
          <Text variant="h4">Login</Text>
          <Text variant="subtitle3">Continue to your adventure!</Text>
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
