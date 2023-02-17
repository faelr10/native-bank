import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function login(email, password) {
  try {
    const body = {
      email: email,
      password: password,
    };
    const respost = (
      await axios
        .post("https://api-bank-mobile-faelr10.vercel.app/auth/login", body)
        .then()
    ).data;
    await AsyncStorage.setItem("idProfileLogged", respost.id);
    return respost;
  } catch (error) {
    return error;
  }
}
