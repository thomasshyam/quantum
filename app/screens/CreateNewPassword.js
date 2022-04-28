import React from 'react';
import {View,StyleSheet,Image} from 'react-native';

import AppText from '../components/AppText';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

function CreateNewPassword({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.layout} />
            <Image
                source={require('../assets/lock.png')}
                style={{
                    position: 'absolute',
                    top: 70,
                    left:190,
                    opacity: 1,
                    alignSelf: 'center',
                }}
                />
                <AppText style={styles.text}>
                    Your new password must be different from previously used password
                </AppText>
                <AppText style={styles.textNumber} >New Password</AppText>
                <InputField
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    returnKeyType="next"
                    icon="eye-off"
                    secureTextEntry
                />
                <AppText style={styles.textNumber} >Confirm Password</AppText>
                <InputField
                    autoCapitalize="none"
                    autoCorrect={false} 
                    style={styles.input}
                    returnKeyType="done"
                    icon="eye-off"
                    secureTextEntry
                />
                <SubmitButton title="Submit" style={styles.button}  onPress={() => navigation.navigate("Login")}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FFA5000D",
        opacity: 0.9,
        flex:1,
        padding:30,
    },
    layout: {
        borderColor: '#FFA5000D',
        borderRadius: 75,
        width: 150,
        height: 150,
        borderWidth: 1, 
        left:10,
        alignSelf: 'center',
        backgroundColor: '#EB5B27',
        opacity: 0.1,
    },
    text:{
        fontSize:20,
        textAlign:'center',
        alignItems: 'center',
        color:'#484D6D',
        top:10,
    },
    textNumber:{
        fontSize:22,
        color:'#484D6D',
        fontWeight:'bold',
        top:10,
        left:20,
    },
    input:{
        bottom:10,
        height:50,
        width:300,
        position:'relative',
    },
});
export default CreateNewPassword;