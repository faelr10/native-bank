import axios from "axios";

export async function paymentQrCode(idUserLogged, idUserQrCode, value) {
  try {
    const body = {
      idUserLogged: idUserLogged,
      idUserQrCode: idUserQrCode,
      value: value,
    };
    console.log(body);
    const respost = (
      await axios
        .post(`https://api-bank-mobile-faelr10.vercel.app/qrCode`, body)
        .then()
    ).data;

    return respost;
  } catch (error) {
    console.log(error);
    return error;
  }
}
