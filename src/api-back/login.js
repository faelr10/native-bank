import axios from "axios";

export async function login(email, password) {
    try {
        const body = {
            "email": email,
            "password": password,
        };
        return (await axios.post('https://native.loca.lt/v1/auth/login', body)
            .then()).data
    } catch (error) {
        return error;
    }
}
