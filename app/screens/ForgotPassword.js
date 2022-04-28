import React from 'react';
import {View,StyleSheet,Image} from 'react-native';


import AppText from '../components/AppText';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

function ForgotPassword({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.layout} />
            <Image
                source={require('../assets/password.png')}
                style={{
                    position: 'absolute',
                    top: 60,
                    left:170,
                    opacity: 1,
                    alignSelf: 'center',
                }}
                />
                <AppText style={styles.text}>
                Please enter  your  phone number to
                 create new password
                </AppText>
                <AppText style={styles.textNumber} >Phone Number</AppText> 
                <InputField
                style={styles.input}
                    keyboardType="number-pad"
                    maxLength={10}
                />
                <SubmitButton title="Send" style={styles.button}  onPress={() => navigation.navigate("VerifyNumber")}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FFA5000D",
        opacity: 0.9,
        flex:1,
        alignItems: 'center',
        padding:30,
    },
    layout: {
        borderColor: '#FFA5000D',
        borderRadius: 75,
        width: 150,
        height: 150,
        borderWidth: 1, 
        left:10,
        backgroundColor: '#EB5B27',
        opacity: 0.1,
    },
    text:{
        fontSize:22,
        textAlign:'center',
        color:'#484D6D',
        top:30,
    },
    textNumber:{
        fontSize:22,
        color:'#484D6D',
        fontWeight:'bold',
        top:50,
        right:100,
    },
    input:{
        height:50,
        top:50,
        width:300,
        position:'relative',
    },
    button:{
        top:50,
    }

});
export default ForgotPassword;