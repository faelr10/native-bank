import React, { useState } from 'react'
import {
    TextInput,
    TouchableOpacity,
    Pressable,
    Keyboard,
    Vibration,
    Text,
    View,
} from 'react-native'
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../../api-back/login';

export default function Form({ isLogged, isMessage }) {

    const [hidePass, setHidePass] = useState(true)
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    async function logar() {
        try {
            const verify = await login(userName, password)
            if (verify instanceof Error) {
                setPassword(null)
                isMessage(false)
                isLogged(false)
                Vibration.vibrate()
                return
            }
            isLogged(true)
            isMessage(true)
            return
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.boxGeral} >

            <View style={styles.boxInput} >
                <Icon name="user" size={18} color="#999" />
                <TextInput
                    style={styles.inputText}
                    placeholder='Username'
                    keyboardType='text'
                    onChangeText={setUserName}
                    value={userName}
                />
            </View>
            <View style={styles.boxInput}>
                <Icon name="lock" size={18} color="#999" />
                <TextInput
                    left={7}
                    style={styles.inputText}
                    placeholder='Password'
                    keyboardType='text'
                    secureTextEntry={hidePass}
                    onChangeText={setPassword}
                    value={password}
                />
                <Icon
                    name="eye-slash"
                    size={20}
                    color="#999"
                    onPress={() => setHidePass(!hidePass)}
                />
            </View>
            <TouchableOpacity
                style={styles.ButtonCalculator}
                title="Entrar"
                onPress={() => logar()}
            >
                <Text style={styles.textButtonCalculator}>Entrar</Text>
            </TouchableOpacity>

        </ Pressable >

    );
}
