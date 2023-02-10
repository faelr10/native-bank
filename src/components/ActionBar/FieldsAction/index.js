import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FieldAction(props,{navigation}) {
  return (
    <TouchableOpacity  style={styles.fieldIconAction}>
      <Icon style={styles.iconAction} name={props.iconField} />
      <Text>{props.nameField}</Text>
    </TouchableOpacity>
  );
}
