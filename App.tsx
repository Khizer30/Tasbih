import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// ...
import Home from "./src/routes/Home";
import Menu from "./src/routes/Menu";
import Saved from "./src/routes/Saved";
import Rosary from "./src/routes/Rosary";
import type { RootStackParamList } from "./src/lib/Interface";

// App
export default function App(): JSX.Element
{
  const Stack = createStackNavigator<RootStackParamList>();
  const [ fontsLoaded, setFontsLoaded ] = useState<boolean>(false);

  // On Mount
  useEffect(() =>
  {
    loadFonts();
  }, []);

  // Load Fonts
  async function loadFonts(): Promise<void>
  {
    await Font.loadAsync({ "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf") });
    await Font.loadAsync({ "Epilogue-Regular": require("./assets/fonts/Epilogue-Regular.ttf") });

    setFontsLoaded(true);
  }

  return (
    <>
      <StatusBar
        animated
        style="auto"
      />

      { fontsLoaded &&
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" detachInactiveScreens screenOptions={ { headerShown: false } }>
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="Menu" component={ Menu } />
            <Stack.Screen name="Saved" component={ Saved } />
            <Stack.Screen name="Rosary" component={ Rosary } initialParams={ { name: "" } } />
          </Stack.Navigator>
        </NavigationContainer>
      }
    </>
  );
}