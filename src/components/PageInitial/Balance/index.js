import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";


export default function Balance(props) {
  const [balanceValue, setBalanceValue] = useState("******");
  const [booleanBalance, setBooleanBalance] = useState(false);

  async function viewBalance(showBalance) {
    if (showBalance) {
      try {
        setBalanceValue(props.balance)
        setBooleanBalance(true);
      } catch (error) {
        console.error(error);
      }
      return;
    }
    setBalanceValue("********");
    setBooleanBalance(false);
  }

  return (
    <View style={styles.boxBalance}>
      <Text style={styles.titleBalance}>Account</Text>
      <View style={styles.boxValueBalance}>
        <Text style={styles.valueBalance}>R$ {balanceValue}</Text>
        <Icon
          style={styles.iconBalance}
          name="eye-slash"
          onPress={() => viewBalance(!booleanBalance)}
        />
      </View>
    </View>
  );
}
