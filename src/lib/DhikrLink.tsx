import { Image, Text, Pressable, StyleSheet } from "react-native";
// ...
import { type Dhikr } from "./Images";

// Dhikr Link
export default function DhikrLink({ name, src }: Dhikr): JSX.Element
{
  return (
    <>
      <Pressable style={ styles.btn }>
        <Text style={ styles.btnTxt }>
          { name }
        </Text>

        <Image
          source={ src }
          style={ styles.btnImg }
        />
      </Pressable>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  btn:
  {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 275,
    height: 75,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginTop: "3%",
    marginBottom: "3%"
  },
  btnTxt:
  {
    width: 125,
    height: 50,
    textAlign: "left",
    textAlignVertical: "center",
    fontFamily: "Epilogue-Medium",
    fontSize: 15,
    color: "#006400"
  },
  btnImg:
  {
    width: 50,
    height: 50,
    resizeMode: "contain"
  }
}); 