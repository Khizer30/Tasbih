import { ScrollView, View, Image, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// ...
import { logo, back, dhikrs, type Dhikr } from "../lib/Images";
import DhikrLink from "../lib/DhikrLink";

// Menu
export default function Menu(): JSX.Element
{
  const navigation = useNavigation();

  // Dhikr Mapper
  function dhikrMapper(x: Dhikr): JSX.Element
  {
    return (
      <DhikrLink key={ x.name } name={ x.name } src={ x.src } />
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={ styles.container }>
        <View style={ styles.view }>
          <View style={ styles.header }>
            <Pressable onPress={ () => navigation.navigate("Home" as never) } style={ styles.back }>
              <Image
                source={ back }
              />
            </Pressable>
          </View>

          <Image
            source={ logo }
            style={ styles.logo }
          />

          <Text style={ styles.heading }>
            Select a Dhikr
          </Text>

          { dhikrs.map(dhikrMapper) }
        </View>
      </ScrollView>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container:
  {
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFCC"
  },
  view:
  {
    justifyContent: "flex-start",
    alignItems: "center"
  },
  header:
  {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 70,
    paddingTop: 20,
    backgroundColor: "#006400"
  },
  back:
  {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    marginLeft: 10
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