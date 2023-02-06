import React from 'react'
import {
    Pressable,
    Keyboard,
    View,
} from 'react-native'
import Balance from './Balance';
import styles from './style';
import TopBar from './TopBar';
import WelcomeMessage from './WelcomeMessage';
import FooterBar from './FooterBar';
import ActionBar from './ActionBar';

export default function PageInitial() {
    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.PageInitialAll}>
            <TopBar />
            <WelcomeMessage />
            <Balance/>
            <ActionBar/>
            <FooterBar/>
        </ Pressable >

    );
}
