import { StyleSheet, View, TouchableWithoutFeedback } from "react-native"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { useRandomColor } from "@/hooks/useRandomColor"

export function HomeScreen() {
  const scale = useSharedValue(1)

  const { backgroundColor, handleChangeColor } = useRandomColor()

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  const handleScaleTextAndChangeColor = () => {
    scale.value = withTiming(1.3, { duration: 200 }, () => {
      scale.value = withTiming(1, { duration: 200 })
    })

    handleChangeColor()
  }

  return (
    <TouchableWithoutFeedback onPress={handleScaleTextAndChangeColor}>
      <View style={[styles.container, { backgroundColor }]}>
        <Animated.Text style={[styles.text, animatedTextStyle]}>
          Hello there
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 56,
    fontWeight: "bold",
  },
})
