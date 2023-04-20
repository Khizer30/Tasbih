import { View, Image, Text, Pressable, StyleSheet } from "react-native";
// ...
import { logo, links } from "../lib/Images";
import { type HomeScreenNavigationProp } from "../lib/Interface";

// Props
interface Props
{
  navigation: HomeScreenNavigationProp;
}

// Home
export default function Home({ navigation }: Props): JSX.Element
{
  return (
    <>
      <View style={ styles.container }>
        <Image
          source={ logo }
          style={ styles.logo }
        />

        <Text style={ styles.heading }>
          Tasbih Counter
        </Text>

        <Pressable onPress={ () => navigation.navigate("Saved") }>
          <Image
            source={ links[ 1 ] }
            style={ styles.dhikrImg }
          />
        </Pressable>

        <Pressable onPress={ () => navigation.navigate("Menu") }>
          <Image
            source={ links[ 0 ] }
            style={ styles.tasbihImg }
          />
        </Pressable>
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
  },
  tasbihImg:
  {
    width: 275,
    height: 150,
    marginTop: "5%",
    marginBottom: "5%"
  },
  dhikrImg:
  {
    width: 275,
    height: 150,
    marginTop: "5%",
    marginBottom: "5%"
  }
}); 