import AsyncStorage from "@react-native-async-storage/async-storage";

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

// Export
export { updateCounter, readCounter };