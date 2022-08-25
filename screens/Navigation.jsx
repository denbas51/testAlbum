import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import FullImage from "./FullImage"
import Home from "./Home"
import { store } from "../store"
import { Provider } from "react-redux"

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            option={{ title: "Albom" }}
          />
          <Stack.Screen
            name="FullImage"
            component={FullImage}
            option={{ title: "Image" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
