import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from "./components/Logo";
import {
  TextInput,
  VStack,
  Text,
  HStack,
  Button,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [_, setUser] = useAuth();


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
    }).then(res => {
      setUser(res.data);}
    )
    .finally(() => {
    })
      .then(() => {
        setIsLoading(false);
      }).finally(() => {
        setIsLoading(false);
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
      <VStack spacing={16} style={{ padding: 36 }}>
        <VStack spacing={6}>
          <Text variant="h4">Register</Text>
          <Text variant="subtitle3">Create an account & Begin the journey</Text>
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
}});


export default Register;
