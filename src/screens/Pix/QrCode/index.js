import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { paymentQrCode } from "../../../api-back/paymentQrCode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import Pix from "..";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ScannerQrCode() {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState(null);

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
      await AsyncStorage.setItem("dataQrCode", data);
      setScanned(true);
      setModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  async function confirmationPassword() {
    try {
      const data = await AsyncStorage.getItem("dataQrCode");
      const idProfileLogged = await AsyncStorage.getItem("idProfileLogged");
      const newData = JSON.parse(data);
      await paymentQrCode(idProfileLogged, newData.idProfile, newData.balance, password);
      return;
    } catch (error) {
      console.log(error);
    }
  }

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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {modalVisible ? (
        <View>
          <Pix />
          <Modal
            animationType="slide" // tipo de animação do modal
            transparent={true} // torna o modal transparente
            visible={modalVisible} // estado que controla a visibilidade do modal
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.modalAll}>
              {/* <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Fechar modal</Text>
              </TouchableOpacity> */}

              <Text style={styles.confirmationTitle}>Confirmação de senha</Text>
              <View style={styles.boxInput}>
                <Icon name="lock" size={18} color="white" />
                <TextInput
                  left={7}
                  style={styles.inputText}
                  placeholder="Password"
                  keyboardType="text"
                  color="white"
                  placeholderTextColor="white"
                  secureTextEntry={hidePass}
                  onChangeText={setPassword}
                  value={password}
                />
                <Icon
                  name="eye-slash"
                  size={20}
                  color="white"
                  onPress={() => setHidePass(!hidePass)}
                />
              </View>
              <TouchableOpacity
                style={styles.ButtonCalculator}
                title="Entrar"
                onPress={() => confirmationPassword()}
              >
                <Text style={styles.textButtonCalculator}>Confirmar pagamento</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}
