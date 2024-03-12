import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Homepage from "./screens/Homepage";
import AuthProvider, { useAuth } from "./screens/AuthContext"

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [user] = useAuth()

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
};



export default App;
