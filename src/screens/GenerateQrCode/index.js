import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "./style";

export default function GenerateQrCode() {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [displayQrCode, setDisplayQrCode] = useState("none");

  const handleClick = async () => {
    Keyboard.dismiss();
    setDisplayQrCode("flex");

    const idProfileLogged = await AsyncStorage.getItem("idProfileLogged");
    setQrValue(inputText);
    setQrValue(
      JSON.stringify({ balance: inputText, idProfile: idProfileLogged })
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable onPress={Keyboard.dismiss} style={styles.PageInitialAll}>
        <View style={styles.boxTitlePix}>
          <Text style={styles.textTitlePix}>Receber por QrCode</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Insira o valor que deseja receber:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(inputText) => setInputText(inputText)}
            value={inputText}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.buttonGenerate} onPress={handleClick}>
            <Text style={styles.textButton}>Gerar QrCode</Text>
          </TouchableOpacity>
        </View>

        <View display={displayQrCode} style={styles.containerQr}>
          <QRCode
            level="H"
            style={{ width: 256 }}
            value={qrValue ? qrValue : "NA"}
            size={260}
            color="black"
            backgroundColor="white"
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
