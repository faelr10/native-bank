import React from 'react'
import {
    View,
    Image
} from 'react-native'
import styles from './style';

export default function TopBar() {
    return (
        <View style={styles.BarraSuperior}>
            <Image source={require('../../image/topPage.png')} style={styles.image} />
        </View>
    );
}