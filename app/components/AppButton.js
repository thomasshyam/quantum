import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  

function AppButton({style,onPress,title}) {
    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress} >
                <LinearGradient 
                    colors={['#F7941D','#F7940D','#EB5B27']}
                    start={{ x:0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{borderRadius:10}}
                    >
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
    },
    text:{
        color:"#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 10,
    }
});
export default AppButton;