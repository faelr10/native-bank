import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function WelcomeMessage(props) {
  return (
    <View style={styles.welcomeBox}>
      <Text style={styles.welcomeMessage}>Welcome {props.name}</Text>
    </View>
  );
}
