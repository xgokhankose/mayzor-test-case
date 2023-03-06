import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthPage" component={Auth} />
        <Stack.Screen name="ProductDetailPage" component={ProductDetail} />
        <Stack.Screen name="HomePage" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
