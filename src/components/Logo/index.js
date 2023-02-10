import React from "react";
import { View, Image, Button } from "react-native";
import styles from "./style";

export default function Logo({ navigation }) {
  return (
    <View>
      <Image source={require("../../image/logo.png")} style={styles.image} />
    </View>
  );
}
