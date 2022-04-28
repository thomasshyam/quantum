import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import { MaterialCommunityIcons  }  from '@expo/vector-icons';

function InputField({icon,style,children, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name="eye-off" size={22} color="#484D6D80" style={styles.icon}  />}
            <TextInput
                style={[styles.input,style]}
                placeholderTextColor="#484D6D"
                {...otherProps}
            />  
        </View>
    );
}

const styles = StyleSheet.create({

    input:{
        position: 'relative',
        margin:10,
        height: 50,
        borderRadius: 10,
        borderColor: '#484D6D80',
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        color: '#484D6D',
    },
    icon:{
        position: 'relative',
        top:35,
        alignSelf: 'center',
        left:110,
    },
});
export default InputField;