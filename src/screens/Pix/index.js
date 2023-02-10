import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { newPix } from "../../api-back/newPix";
import { getProfile } from "../../api-back/getProfile";

export default function Pix() {
  const [loading, setLoading] = useState(true);
  const [displayLoading, setDisplayLoading] = useState(null);
  const [fieldKeyPix, setFieldKeyPix] = useState(false);
  const [fieldQrCode, setFieldQrCode] = useState(false);
  const [displayKeyPix, setDisplayKeyPix] = useState("none");
  const [displayValueTransfer, setDisplayValueTransfer] = useState("none");
  const [displayDataConfirm, setDisplayDataConfirm] = useState("none");
  const [keyPix, setKeyPix] = useState(null);
  const [valuePix, setValuePix] = useState(null);
  const [nameProfileLogged, setNameProfileLogged] = useState(null);
  const [nameProfilePix, setNameProfilePix] = useState(null);

  async function pickedKeyPix(value) {
    if (value === false) {
      setDisplayKeyPix("none");
      setDisplayValueTransfer("none");
      setDisplayDataConfirm("none");
      setFieldKeyPix(value);
      return;
    }
    setFieldKeyPix(value);
    setFieldQrCode(false);
    setDisplayKeyPix("flex");
    setDisplayValueTransfer("none");
  }
  async function pickedQrCode(value) {
    setFieldQrCode(value);
    setFieldKeyPix(false);
    setDisplayKeyPix("none");
    setDisplayValueTransfer("none");
    setDisplayDataConfirm("none");
  }
  async function confirmKeyTransfer() {
    setDisplayValueTransfer("flex");
    setDisplayKeyPix("none");
    setDisplayDataConfirm("none");
  }

  async function confirmValueTransfer() {
    setDisplayLoading(true);
    setDisplayValueTransfer("none");
    setDisplayKeyPix("none");
    setDisplayDataConfirm("flex");
    const idProfileLogged = await AsyncStorage.getItem("idProfileLogged");
    const profile = await getProfile('id',idProfileLogged);
    const profilePix = await getProfile("keyPix", keyPix);
    setNameProfileLogged(profile.name);
    setNameProfilePix(profilePix.name);
    try {
      setTimeout(() => {
        setDisplayLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmPixTransfer() {
    const idProfileLogged = await AsyncStorage.getItem("idProfileLogged");
    console.log({ keyPix, valuePix, profileId: idProfileLogged });
    const pix = await newPix(keyPix, valuePix, idProfileLogged);
  }

  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
    <Pressable onPress={Keyboard.dismiss} style={styles.boxGeral}>
      <Pressable onPress={Keyboard.dismiss} style={styles.PageInitialAll}>
        <View style={styles.boxTitlePix}>
          <Text style={styles.textTitlePix}>Pix</Text>
        </View>

        <View style={styles.boxFieldSend}>
          <Text style={styles.titleFieldSend}>
            Escolha a forma de transferência:
          </Text>

          <View style={styles.boxActionsSend}>
            {fieldKeyPix ? (
              <TouchableOpacity
                style={styles.actionFieldSendPicked}
                onPress={() => pickedKeyPix(!fieldKeyPix)}
              >
                <Icon style={styles.iconAction} name="key" />
                <Text>Chave Pix</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.actionFieldSend}
                onPress={() => pickedKeyPix(!fieldKeyPix)}
              >
                <Icon style={styles.iconAction} name="key" />
                <Text>Chave Pix</Text>
              </TouchableOpacity>
            )}

            {fieldQrCode ? (
              <TouchableOpacity
                style={styles.actionFieldSendPicked}
                onPress={() => pickedQrCode(!fieldQrCode)}
              >
                <Icon style={styles.iconAction} name="qrcode" />
                <Text>QR Code</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.actionFieldSend}
                onPress={() => pickedQrCode(!fieldQrCode)}
              >
                <Icon style={styles.iconAction} name="qrcode" />
                <Text>QR Code</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View display={displayKeyPix} style={styles.boxKeyPix}>
          <Text style={styles.titleFieldSend}>
            Preencha a chave pix que receberá a transferência:
          </Text>
          <View style={styles.boxInput}>
            <TextInput
              style={styles.inputText}
              onChangeText={setKeyPix}
              placeholder="Ex: chavepix@chave.pix"
            />
            <TouchableOpacity
              style={styles.ButtonCalculator}
              title="Entrar"
              onPress={() => confirmKeyTransfer()}
            >
              <Text style={styles.textButtonCalculator}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View display={displayValueTransfer} style={styles.boxKeyPix}>
          <Text style={styles.titleFieldSend}>
            Preencha o valor que deseja transferir:
          </Text>
          <View style={styles.boxInput}>
            <TextInput
              style={styles.inputText}
              onChangeText={setValuePix}
              placeholder="R$180,00"
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.ButtonCalculator}
              title="Entrar"
              onPress={() => confirmValueTransfer()}
            >
              <Text style={styles.textButtonCalculator}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {displayLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size={100} />
          </View>
        ) : (
          <View
            display={displayDataConfirm}
            style={styles.boxConfirmDataTransaction}
          >
            <Text style={styles.titleConfirmDataTransaction}>
              Confirmação de dados
            </Text>

            <View style={styles.boxDataConfirm}>
              <Text style={styles.dataConfirm}>
                REMETENTE: {nameProfileLogged}
              </Text>
              <Text style={styles.dataConfirm}>
                NOME DO DESTINATÁRIO: {nameProfilePix}
              </Text>
              <Text style={styles.dataConfirm}>CHAVE PIX: {keyPix}</Text>
              <Text style={styles.dataConfirm}>
                VALOR DA TRANSFERÊNCIA: R$ {valuePix},00
              </Text>
            </View>
            <TouchableOpacity
              style={styles.ButtonCalculator}
              title="Entrar"
              onPress={() => confirmPixTransfer()}
            >
              <Text style={styles.textButtonCalculator}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
    </Pressable>
  );
}
