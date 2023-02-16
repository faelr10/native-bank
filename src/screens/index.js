import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Logo from "../components/Logo";
import PageInitial from "./PageInitial";
import Pix from "./Pix";
import ScannerQrCode from "./Pix/QrCode";
import GenerateQrCode from "./GenerateQrCode";

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

      <Stack.Screen name="GenerateQrCode" options={{ headerShown: false }}>
        {(props) => <GenerateQrCode {...props} extraData={"someData"} />}
      </Stack.Screen>

      <Stack.Screen name="ScannerQrCode" options={{ headerShown: false }}>
        {(props) => <ScannerQrCode {...props} extraData={"someData"} />}
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
