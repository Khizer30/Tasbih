import { useState, useEffect } from "react";
import { View, Image, Text, Pressable, StyleSheet, type GestureResponderEvent } from "react-native";
// ...
import Button from "../lib/Button";
import { updateCounter, readCounter } from "../lib/db";
import { back, reset, save, dhikrs } from "../lib/Images";
import { type Dhikr, type RosaryScreenNavigationProp, type RosaryScreenRouteProp } from "../lib/Interface";

// Props
interface Props
{
  navigation: RosaryScreenNavigationProp;
  route: RosaryScreenRouteProp;
}

// Rosary
export default function Rosary({ navigation, route }: Props): JSX.Element
{
  const { name, old } = route.params;
  const dhikr: Dhikr | undefined = dhikrs.find((x: Dhikr) => x.name === name);
  const [count, setCount] = useState<number>(0);

  // On Mount
  useEffect(() =>
  {
    if (old)
    {
      setCounter();
    }
  }, []);

  // Save Counter
  async function saveCounter(): Promise<void>
  {
    await updateCounter(name, count);
  }

  // Set Counter
  async function setCounter(): Promise<void>
  {
    setCount(await readCounter(name));
  }

  // Reset Counter
  function resetCounter(x: GestureResponderEvent): void
  {
    setCount(0);
    x.stopPropagation();
  }

  // Add
  function add(): void
  {
    setCount(count + 1);
  }

  return (
    <>
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Button callPress={ () => navigation.navigate("Home") } style={ styles.back }>
            <Image
              source={ back }
            />
          </Button>

          <Button callPress={ saveCounter } style={ styles.save }>
            <Image
              source={ save }
            />
          </Button>
        </View>

        <Image
          source={ dhikr?.src || dhikrs[3].src }
          style={ styles.logo }
        />

        <Text style={ styles.heading }>
          { name }
        </Text>

        <Pressable onPress={ add } style={ styles.device }>
          <View>
            <View style={ styles.counter }>
              <Text style={ styles.count }>
                { count.toString().padStart(4, "0") }
              </Text>
            </View>
          </View>

          <View style={ styles.y2 }>
            <Button callPress={ resetCounter } style={ styles.reset }>
              <Image
                source={ reset }
                style={ styles.resetImg }
              />
            </Button>
          </View>

          <Button callPress={ add } style={ styles.tapBtn }>
            <Text style={ styles.tapTxt }>
              TAP
            </Text>
          </Button>
        </Pressable>

        <View style={ styles.circle } />
      </View>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container:
  {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFCC"
  },
  header:
  {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginLeft: 15
  },
  save:
  {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    marginRight: 15
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
  device:
  {
    flexDirection: "column",
    justifyContent: "space-evenly",
    zIndex: 1,
    alignItems: "center",
    width: 175,
    height: 225,
    borderColor: "#FFC300",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#006400",
    marginTop: "3%"
  },
  counter:
  {
    justifyContent: "center",
    alignItems: "center",
    width: 125,
    height: 40,
    borderColor: "#8C7300",
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: "#FFC300"
  },
  count:
  {
    width: 125,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Epilogue-Medium",
    fontSize: 23,
    color: "#FFFFCC",
    marginTop: -3
  },
  y2:
  {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginRight: "15%"
  },
  reset:
  {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderColor: "#8C7300",
    borderWidth: 1.5,
    borderRadius: 100,
    backgroundColor: "#FFC300"
  },
  resetImg:
  {
    width: 20,
    height: 20
  },
  tapBtn:
  {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 75,
    borderColor: "#8C7300",
    borderWidth: 1.5,
    borderRadius: 100,
    backgroundColor: "#FFC300"
  },
  tapTxt:
  {
    width: 75,
    height: 75,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Epilogue-Medium",
    fontSize: 30,
    color: "#FFFFCC",
    marginTop: -3
  },
  circle:
  {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    width: 500,
    height: 500,
    borderColor: "#FFC300",
    borderWidth: 15,
    borderRadius: 1000,
    backgroundColor: "#FFFFFF",
    marginTop: "-43%"
  }
});