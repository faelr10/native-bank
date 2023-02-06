import React from 'react'
import { Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ActionBar() {
    return (
        <View style={styles.boxActions}>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="money"
                />
                <Text>Pix</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="barcode"
                />
                <Text>Pay</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="exchange"
                />
                <Text>Transactions</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="handshake-o"
                />
                <Text>Receive</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="mobile"
                />
                <Text>Cell phone</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="cc-visa"
                />
                <Text>Card</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="bank"
                />
                <Text>Investment</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="bitcoin"
                />
                <Text>Bitcoin</Text>
            </View>
            <View style={styles.fieldIconAction}>
                <Icon
                    style={styles.iconAction}
                    name="dollar"
                />
                <Text>Dolar</Text>
            </View>
        </View>
    );
}
