import { View, ActivityIndicator, Text } from "react-native"

function Loading() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Loading...</Text>
    </View>
  )
}

export default Loading
