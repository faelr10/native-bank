import axios from "axios";

export async function getProfile(id) {
    try {
        return (await axios.get(`https://4409-177-128-29-66.ngrok.io/profile/${id}`)
            .then()).data
    } catch (error) {
        return error;
    }
}
