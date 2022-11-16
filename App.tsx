import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dex } from "./src/Dex";
import { Login } from "./src/Login";

const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Dex" component={Dex} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App