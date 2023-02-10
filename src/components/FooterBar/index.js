import React from 'react'
import {
    Text,
    View,

} from 'react-native'
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FooterBar() {
    return (
        <View style={styles.boxFooterBar}>
            <View style={styles.fieldIconFooter}>
                <Icon
                    style={styles.iconFooter}
                    name="reply"
                />
            </View>
            <View style={styles.fieldIconFooter}>
            <Icon
                    style={styles.iconFooter}
                    name="user"
                />
            </View>
            <View style={styles.fieldIconFooter}>
                <Icon
                    style={styles.iconFooter}
                    name="gear"
                />
            </View>
        </View>
    );
}
