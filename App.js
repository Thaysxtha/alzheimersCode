import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Frame from "./sreens/Frame.js";
import Frame1 from "./sreens/Frame1.js";
import Frame2 from "./sreens/Frame2.js";
import Frame3 from "./sreens/Frame3.js";
import Frame4 from "./sreens/Frame4.js";
import Frame5 from "./sreens/Frame5.js";
import Frame6 from "./sreens/Frame6.js";
import Frame7 from "./sreens/Frame7.js";

//teste
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Frame" component={Frame} />
        <Stack.Screen name="Frame1" component={Frame1} />
        <Stack.Screen name="Frame2" component={Frame2} />
        <Stack.Screen name="Frame3" component={Frame3} />
        <Stack.Screen name="Frame4" component={Frame4} />
        <Stack.Screen name="Frame5" component={Frame5} />
        <Stack.Screen name="Frame6" component={Frame6} />
        <Stack.Screen name="Frame7" component={Frame7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;