import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native"
import Button from "../../../components/Button";
import { styles } from "./styles";


const Splash = ({navigation}) => {
    console.log('navigation => ', navigation)

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>

        <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
        <Text style={styles.title}>Here!</Text>
        </View> 

        <Button onPress={onSignup} title="Sing up" />
        
        <Pressable onPress={onSignIn} hitSlop={20}>
            <Text style={styles.footerText}>Sing In</Text>
        </Pressable>
        </View>
    )
}

export default Splash