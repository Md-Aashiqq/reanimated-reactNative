import { View, Text } from "react-native";
import React from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { useEffect } from "react";

const SIZE = 100;

const Basic = () => {
  const process = useSharedValue(1);
  const scale = useSharedValue(2);

  const style = useAnimatedStyle(() => ({
    opacity: process.value,
    transform: [
      { scale: scale.value },
      { rotate: `${process.value * 2 * Math.PI}rad` },
    ],
  }));

  useEffect(() => {
    process.value = withRepeat(withTiming(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <Animated.View
      style={[{ width: SIZE, height: SIZE, backgroundColor: "hotpink" }, style]}
    />
  );
};

export default Basic;
