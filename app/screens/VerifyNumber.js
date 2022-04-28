import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';


import AppText from '../components/AppText';
import SubmitButton from '../components/SubmitButton';

function VerifyNumber({onPress, navigation ,...otherProps}) {

    return (
        <View style={styles.container}>
            <View style={styles.layout} />
            <Image
                source={require('../assets/password.png')}
                style={{
                    position: 'absolute',
                    top: 60,
                    left:160,
                    opacity: 1,
                    alignSelf: 'center',
                }}
                />
                <AppText style={styles.text}>
                Please enter the 4 digit code sent to
                 +44 ********56
                </AppText>
                <View style={styles.otpContainer} >
                    <TextInput style = {styles.inputbox} keyboardType="number-pad" maxLength={1}  />
                    <TextInput style = {styles.inputbox} keyboardType="number-pad" maxLength={1}  />
                    <TextInput style = {styles.inputbox} keyboardType="number-pad" maxLength={1} />
                    <TextInput style = {styles.inputbox} keyboardType="number-pad" maxLength={1} />
                </View>
                <SubmitButton title="Verify" style={styles.button} onPress={() => navigation.navigate("CreateNewPassword")} />
                <TouchableOpacity onPress={onPress}>
                <AppText style={{top:100,position: 'relative' }} >
                    Resend
                </AppText>
                </TouchableOpacity>
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
        fontSize:23,
        textAlign:'center',
        color:'#484D6D',
        top:30,
    },
    button:{
        top:70,
    },
    otpContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        top:50,
        position:'relative',
        
    },
    inputbox:{
        height:50,
        width:50,
        borderColor: '#484D6D80',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 5,
        fontSize: 20,
        color: '#484D6D',
    }
});
export default VerifyNumber;