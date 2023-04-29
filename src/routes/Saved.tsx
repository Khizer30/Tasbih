import { useState, useEffect } from "react";
import { ScrollView, View, Image, Text, Pressable, StyleSheet } from "react-native";
// ...
import DhikrLink from "../lib/DhikrLink";
import { getSaved } from "../lib/db";
import { logo, back } from "../lib/Images";
import { type Dhikr, type SavedScreenNavigationProp } from "../lib/Interface";

// Props
interface Props
{
  navigation: SavedScreenNavigationProp;
}

// Saved
export default function Saved({ navigation }: Props): JSX.Element
{
  const [ saved, setSaved ] = useState<Dhikr[]>([]);

  // On Mount
  useEffect(() =>
  {
    setUp();
  }, []);

  // Set Up
  async function setUp(): Promise<void>
  {
    setSaved(await getSaved());
  }

  // Dhikr Mapper
  function dhikrMapper(x: Dhikr): JSX.Element
  {
    return (
      <DhikrLink key={ x.name } name={ x.name } src={ x.src } old={ true } />
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={ styles.container }>
        <View style={ styles.view }>
          <View style={ styles.header }>
            <Pressable onPress={ () => navigation.navigate("Home") } style={ styles.back }>
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
            Select Your Dhikr
          </Text>

          { saved.map(dhikrMapper) }
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