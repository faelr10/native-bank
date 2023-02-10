import axios from "axios";

export async function getProfile(field, value) {
  try {
    return (
      await axios
        .get(
          `https://api-bank-mobile-faelr10.vercel.app/profile?field=${field}&value=${value}`
        )
        .then()
    ).data;
  } catch (error) {
    return error;
  }
}
