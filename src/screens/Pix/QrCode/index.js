import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { paymentQrCode } from "../../../api-back/paymentQrCode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ScannerQrCode() {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      const idProfileLogged = await AsyncStorage.getItem("idProfileLogged");
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      const newData = JSON.parse(data);
      await paymentQrCode(idProfileLogged, newData.idProfile, newData.balance);
    } catch (error) {
      console.log(error);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={100} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
