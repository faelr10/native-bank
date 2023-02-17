import axios from "axios";

export async function paymentQrCode(
  idUserLogged,
  idUserQrCode,
  value,
  password
) {
  try {
    const body = {
      idUserLogged: idUserLogged,
      idUserQrCode: idUserQrCode,
      value: value,
      passwordConfirmPayment:password
    };
    const respost = (
      await axios
        .post(`https://api-bank-mobile-faelr10.vercel.app/qrCode`, body)
        .then()
    ).data;
    console.log(respost);
    return respost;
  } catch (error) {
    console.log(error);
    return error;
  }
}
