import { View, Image, Text, Pressable, StyleSheet } from "react-native";
// ...
import { type RosaryScreenNavigationProp, RosaryScreenRouteProp } from "../lib/Interface";

// Props
interface Props
{
  navigation: RosaryScreenNavigationProp;
  route: RosaryScreenRouteProp;
}

// Rosary
export default function Rosary({ navigation, route }: Props): JSX.Element
{
  const { name } = route.params;

  return (
    <>
      <View style={ styles.container }>

      </View>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFCC"
  },
  logo:
  {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: "3%",
    marginBottom: "3%"
  },
  heading:
  {
    width: 250,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Epilogue-Medium",
    fontSize: 25,
    color: "#006400",
    marginTop: "-3%"
  }
}); 