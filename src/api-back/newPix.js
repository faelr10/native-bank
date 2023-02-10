import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function newPix(keyPix, valuePix, idProfile) {
  try {
    const body = {
      keyPix: keyPix,
      valuePix: valuePix,
    };
    const respost = (
      await axios
        .post(`https://api-bank-mobile-faelr10.vercel.app/pix/${idProfile}`, body)
        .then()
    ).data;
    console.log(respost)
    return respost;
  } catch (error) {
    return error;
  }
}
