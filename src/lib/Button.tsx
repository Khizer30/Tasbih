import { useState } from "react";
import { TouchableWithoutFeedback, Animated, type GestureResponderEvent } from "react-native";

// Props
interface Props
{
  children: JSX.Element;
  callPress: (() => void) | ((x: GestureResponderEvent) => void);
  style: object;
}

// Button
export default function Button({ children, callPress, style }: Props): JSX.Element
{
  const [ scaleValue ] = useState<Animated.Value>(new Animated.Value(1));

  // Animated Value
  const animatedStyle = { transform: [ { scale: scaleValue } ] };

  // Handle Press In
  function handlePressIn(): void
  {
    Animated.spring(scaleValue, { toValue: 0.9, useNativeDriver: true }).start();
  }

  // Handle Press Out
  function handlePressOut(): void
  {
    Animated.spring(scaleValue, { toValue: 1, friction: 3, tension: 10, useNativeDriver: true }).start();
  }

  return (
    <TouchableWithoutFeedback onPress={ callPress } onPressIn={ handlePressIn } onPressOut={ handlePressOut }>
      <Animated.View style={ [ style, animatedStyle ] }>
        { children }
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}