import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// ...
import Home from "./src/routes/Home";

// App
export default function App(): JSX.Element
{
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar
        animated
        style="auto"
      />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" detachInactiveScreens screenOptions={ { headerShown: false } }>
          <Stack.Screen name="Home" component={ Home } />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}