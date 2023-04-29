import AsyncStorage from "@react-native-async-storage/async-storage";
// ...
import { dhikrs } from "./Images";
import { type Dhikr } from "./Interface";

// Update Counter
async function updateCounter(name: string, count: number): Promise<void>
{
  try
  {
    await AsyncStorage.setItem(name, count.toString());
  }
  catch (err: unknown)
  {
    console.log(err);
  }
}

// Read Counter
async function readCounter(name: string): Promise<number>
{
  let num: number = 0;

  try
  {
    const temp: string | null = await AsyncStorage.getItem(name);

    if (temp)
    {
      num = +temp;
    }
  }
  catch (err: unknown)
  {
    console.log(err);
  }

  return num;
}

// Get Saved
async function getSaved(): Promise<Dhikr[]>
{
  let saved: Dhikr[] = [];

  try
  {
    const keys: readonly string[] = await AsyncStorage.getAllKeys();

    saved = dhikrs.filter((x: Dhikr) => keys.includes(x.name));
  }
  catch (err: unknown)
  {
    console.log(err);
  }

  return saved;
}

// Export
export { updateCounter, readCounter, getSaved };