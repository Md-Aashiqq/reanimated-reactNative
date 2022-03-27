import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item, { MAX_HEIGHT } from "./Item";
import { items } from "./Model";

const styles = StyleSheet.create({
  container: {
    height: items.length * MAX_HEIGHT,
    backgroundColor: "black",
  },
});

const Channel = () => {
  const y = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        contentContainerStyle={{ height: (items.length + 1) * MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        snapToInterval={MAX_HEIGHT}
        decelerationRate="fast"
      >
        {/* <Animated.View style={styles.container}> */}
        {items.map((item, index) => (
          <Item y={y} index={index} item={item} key={index} />
        ))}
        {/* </Animated.View> */}
      </Animated.ScrollView>
    </>
  );
};

export default Channel;
