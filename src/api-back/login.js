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
        .post("https://4409-177-128-29-66.ngrok.io/auth/login", body)
        .then()
    ).data;
    await AsyncStorage.setItem("idProfileLogged", respost.id);
    return respost;
  } catch (error) {
    return error;
  }
}
