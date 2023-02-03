import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './style';

export default function Logo(){
    return(
        <View>
            <Image source={require('../../image/logo.png')} style = {styles.image}/>
        </View>
    );
}