import React,{useState} from 'react';
import {View,StyleSheet,Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import ScreenLayout from '../components/ScreenLayout';
import AppText from '../components/AppText';
import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';



function LoginScreen({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    return (
        <ScreenLayout>
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{
                            width: 120,
                            height: 120,
                            bottom: 10,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                        }}
                    />
                        <AppText 
                            style={{
                                fontSize: 22,
                                color: '#484D6D',
                                textAlign: 'center',
                            }}
                        >
                        Enter email or phone number & 
                        password to login
                        </AppText>
                        <AppText style={styles.text}>Email or Phone Number</AppText>
                        <InputField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            returnKeyType="next"
                            />
                        <AppText style={styles.text}>Password</AppText>
                        <InputField
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            returnKeyType="done"
                            icon="eye-off"
                            secureTextEntry

                            />
                        <SubmitButton title="Login" style={styles.button} onPress={() => navigation.navigate("Welcome")} />
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                style={styles.checkbox} color="#099CFF" value={isChecked} onValueChange={setChecked}
                            />
                            <AppText style={styles.checkboxText}>Stay Logged in</AppText>
                        </View>
                        <View style={styles.detailContainer}>
                            <AppText style={styles.detailText} onPress={() => navigation.navigate("ForgotPassword")} >Forgotten Email?</AppText>
                            <AppText style={styles.textbutton} onPress={() => navigation.navigate("ForgotPassword")} >Forgotten Password?</AppText>
                        </View>
                        <View style={styles.signupContainer}>
                            <AppText style={styles.signupText}>Don’t have an account? Sign up</AppText>
                        </View>
                    </View>
            </View>
        </ScreenLayout>
    );
}


const styles = StyleSheet.create({
    text: {   
        fontSize: 22,
        color: '#484D6D',
        fontWeight: 'bold',
        left: '5%',
        top: 5,
    },
    input:{
        bottom:20,
    },
    checkboxContainer:{
        flexDirection: 'row',
        left: '5%',
    },
    checkbox:{
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#099CFF',
        backgroundColor: '#fff',
        bottom: 10,
    },
    checkboxText:{
        fontSize: 20,
        color: '#484D6D',
        marginLeft: 10,
        bottom: 15,
    },
    button:{
        bottom:20,
    },
    detailContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        bottom: 10,
        justifyContent: 'space-between',
    },
    detailText:{
        fontSize: 20,
        color: '#EB5B27',
    },
    textbutton:{
        top:10,
        fontSize: 20,
        color: '#EB5B27',
    },
    signupContainer:{
        alignItems: 'center',
    },
    signupText:{
        fontSize: 20,
        color: '#484D6D',
        top: 10,
    },
});
export default LoginScreen;