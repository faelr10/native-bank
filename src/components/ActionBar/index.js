import React, { useRef } from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Modalize, useModalize } from "react-native-modalize";

export default function ActionBar() {
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.boxActions}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pix")}
        style={styles.fieldIconAction}
      >
        <Icon style={styles.iconAction} name="money" />
        <Text>Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("GenerateQrCode")}
        style={styles.fieldIconAction}
      >
        <Icon style={styles.iconAction} name="handshake-o" />
        <Text>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onOpen} style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="exchange" />
        <Text>Transactions</Text>
      </TouchableOpacity>
      <View style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="barcode" />
        <Text>Pay</Text>
      </View>
      <View style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="mobile" />
        <Text>Cell phone</Text>
      </View>
      <View style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="cc-visa" />
        <Text>Card</Text>
      </View>
      <View style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="bank" />
        <Text>Investment</Text>
      </View>
      <View style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="bitcoin" />
        <Text>Bitcoin</Text>
      </View>
      <View style={styles.fieldIconAction}>
        <Icon style={styles.iconAction} name="dollar" />
        <Text>Dolar</Text>
      </View>
      <Modalize ref={modalizeRef}>
        <Text>...your content: ;</Text>
      </Modalize>
    </View>
  );
}
