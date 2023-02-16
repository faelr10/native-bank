import React from "react";
import { Pressable, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./style";

export default function FormOfPayment({ pickedKeyPix, pickedQrCode }) {
  return (
    <View style={styles.boxFieldSend}>
      <Text style={styles.titleFieldSend}>Escolha a forma de transferência:</Text>

      <View style={styles.boxActionsSend}>
        <Pressable
          style={[
            styles.actionFieldSend,
            selectedOption === "keyPix" && styles.actionFieldSendPicked,
          ]}
          onPress={() => pickedKeyPix("keyPix")}
        >
          <Icon style={styles.iconAction} name="key" />
          <Text>Chave Pix</Text>
        </Pressable>

        <Pressable
          style={[
            styles.actionFieldSend,
            selectedOption === "qrCode" && styles.actionFieldSendPicked,
          ]}
          onPress={() => onPick("qrCode")}
        >
          <Icon style={styles.iconAction} name="qrcode" />
          <Text>QR Code</Text>
        </Pressable>
      </View>
    </View>
  );
}
