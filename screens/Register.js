import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from "./components/logo";
import {
  TextInput,
  VStack,
  Text,
  HStack,
  Button,
  Image,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp",
      params: {
        key: "AIzaSyCQG_URXefNRU5GPb29isou4E2ifu528l8",
      },
      data: {
        email,
        password,
      },
    })
      .then(() => {
        setIsLoading(false);
        window.location.href = "/";
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <Logo />
      <VStack spacing={4} style={{ padding: 16 }}>
        <VStack spacing={1}>
          <Text variant="h5">Register</Text>
          <Text variant="subtitle1">Create an account & Begin the journey</Text>
        </VStack>
        <VStack spacing={2}>
          <TextInput
            label="Name"
            variant="outlined"
            value={name}
            onChangeText={setName}
          />
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
            title="Login Instead"
            variant="text"
            compact
            onPress={handleLogin}
          />
          <Button
            style={buttonStyle.buttonColor}
            title="Register"
            onPress={handleRegister}
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

export default Register;
