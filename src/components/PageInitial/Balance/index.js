import React from 'react'
import { Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Balance() {
    return (
        <View style={styles.boxBalance}>
            <Text style={styles.titleBalance}>Conta</Text>
            <View style={styles.boxValueBalance}>
                <Text style={styles.valueBalance}>
                    R$ 2.500,98
                </Text>
                <Icon
                    style={styles.iconBalance}
                    name="eye-slash"
                />
            </View>
        </View>
    );
}
