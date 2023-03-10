import React, { useEffect, useState } from "react";
import {
  Pressable,
  Keyboard,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import Balance from "../../components/Balance";
import styles from "./style";
import TopBar from "../../components/TopBar";
import WelcomeMessage from "../../components/WelcomeMessage";
import FooterBar from "../../components/FooterBar";
import ActionBar from "../../components/ActionBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfile } from "../../api-back/getProfile";

export default function PageInitial() {
  const [loading, setLoading] = useState(true);
  const [valueBalance, setBalanceValue] = useState(null);
  const [profileName, setProfileName] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const idProfileLogged = await AsyncStorage.getItem("idProfileLogged");
        const profile = await getProfile("id", idProfileLogged);
        setBalanceValue(profile.Account[0].balance);
        setProfileName(profile.name);
      };
      fetchData();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={100} />
      </View>
    );
  }
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.PageInitialAll}>
      <TopBar />
      <WelcomeMessage name={profileName} />
      <Balance balance={valueBalance} />
      <ActionBar />
      <FooterBar />
    </Pressable>
  );
}
