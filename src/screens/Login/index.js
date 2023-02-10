import { useState, useRef } from 'react';
import { Pressable, StyleSheet, Keyboard, Text, View, Animated } from 'react-native';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import PageInitial from '../PageInitial';

export default function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [colorDisplayMessage, setColorDisplayMessage] = useState(null)
  const [messageRespost, setMessageRespost] = useState(null)
  const [displayMessageRespost, setDisplayMessageRespost] = useState('none')

  const isLogged = async (loggedData) => {
    setIsLoggedIn(loggedData);
  }

  const isMessage = async (messageData) => {
    if (!messageData) {
      setColorDisplayMessage('#ff6961')
      setMessageRespost('Email ou senha inválidos!')
      setDisplayMessageRespost('flex')
      fadeIn()
      setTimeout(() => {
        fadeOut()
      }, 3000);
      return
    }
    setMessageRespost('Login realizado com sucesso!')
    setColorDisplayMessage('#77dd67')
    setDisplayMessageRespost('flex')
    fadeIn()
    setTimeout(() => {
      fadeOut()
    }, 3000);
    return
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  
  return (

    <Pressable onPress={Keyboard.dismiss} onPressIn={() => fadeOut()} style={styles.container}>
      {isLoggedIn ? (
        <View onPress={Keyboard.dismiss} style={styles.containerIslogged}>
          <PageInitial/>
        </View>
      ) : (
        <View onPress={Keyboard.dismiss} style={styles.containerNotLogged}>
          <Animated.View opacity={fadeAnim} style={styles.animationsMessage}>
            <View display={displayMessageRespost} backgroundColor={colorDisplayMessage} style={styles.messageError} >
              <Text>{messageRespost}</Text>
            </View>
          </Animated.View>
          <Logo />
          <Form isLogged={isLogged} isMessage={isMessage} />
        </View>
      )}

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    paddingTop: 35,
    alignItems: "center",
  },
  containerNotLogged: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    paddingTop: 120,
    alignItems: "center",
  },
  containerIslogged: {
    flex: 1,
    alignItems: "center",
    width:"100%"
  },
  animationsMessage: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: 10
  },
  messageError: {
    flex: 0,
    backgroundColor: "#ff6961",
    width: "70%",
    borderRadius: 12,
    height: 40,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
});
