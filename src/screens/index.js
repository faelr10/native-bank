import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Logo from "../components/Logo";
import PageInitial from "./PageInitial";
import Pix from "./Pix";


const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <Login {...props} extraData={"someData"} />}
      </Stack.Screen>

      <Stack.Screen name="PageInitial" options={{ headerShown: false }}>
        {(props) => <PageInitial {...props} extraData={"someData"} />}
      </Stack.Screen>

      <Stack.Screen name="Pix" options={{ headerShown: false }}>
        {(props) => <Pix {...props} extraData={"someData"} />}
      </Stack.Screen>

      <Stack.Screen
        name="Logo"
        component={Logo}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
