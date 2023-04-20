import { type ImageSourcePropType } from "react-native/types";
import { type RouteProp } from "@react-navigation/native";
import { type StackNavigationProp } from "@react-navigation/stack";

interface Dhikr
{
  name: string;
  src: ImageSourcePropType;
}

type RootStackParamList =
  {
    Home: undefined;
    Menu: undefined;
    Saved: undefined;
    Rosary: { name: string; };
  };

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, "Menu">;
type MenuScreenRouteProp = RouteProp<RootStackParamList, "Menu">;

type SavedScreenNavigationProp = StackNavigationProp<RootStackParamList, "Saved">;
type SavedScreenRouteProp = RouteProp<RootStackParamList, "Saved">;

type RosaryScreenNavigationProp = StackNavigationProp<RootStackParamList, "Rosary">;
type RosaryScreenRouteProp = RouteProp<RootStackParamList, "Rosary">;

// Export
export type {
  Dhikr,
  RootStackParamList,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
  MenuScreenNavigationProp,
  MenuScreenRouteProp,
  SavedScreenNavigationProp,
  SavedScreenRouteProp,
  RosaryScreenNavigationProp,
  RosaryScreenRouteProp
};