import { Image, Text, StyleSheet, type ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
// ...
import Button from "./Button";

// Props
interface Props
{
  name: string;
  src: ImageSourcePropType;
  old: boolean;
}

// Dhikr Link
export default function DhikrLink({ name, src, old }: Props): JSX.Element
{
  const navigation = useNavigation();

  return (
    <>
      <Button callPress={ () => navigation.navigate("Rosary" as never, { name: name, old: old } as never) } style={ styles.btn }>
        <>
          <Text style={ styles.btnTxt }>
            { name }
          </Text>

          <Image
            source={ src }
            style={ styles.btnImg }
          />
        </>
      </Button>
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