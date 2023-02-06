import React, { useState } from 'react'
import { Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Balance() {

    const [balanceValue, setBalanceValue] = useState('2.500,99')
    const [booleanBalance, setBooleanBalance] = useState(true)

    function viewBalance(value) {
        if (value) {
            setBalanceValue('2.500,99')
            setBooleanBalance(true)
            return
        }
        setBalanceValue('********')
        setBooleanBalance(false)
        return
    }


    return (
        <View style={styles.boxBalance}>
            <Text style={styles.titleBalance}>Account</Text>
            <View style={styles.boxValueBalance}>
                <Text style={styles.valueBalance}>
                    R$ {balanceValue}
                </Text>
                <Icon
                    style={styles.iconBalance}
                    name="eye-slash"
                    onPress={() => viewBalance(!booleanBalance)}
                />
            </View>
        </View>
    );
}
