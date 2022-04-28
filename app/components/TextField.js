import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function TextField({ icon ,style,...otherProps }) {
    return (
          <View style={styles.container}>
            <TextInput 
             style={[styles.input,style]}
             placeholderTextColor="#484D6D"
              {...otherProps} 
              />
          </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: 'row',
    },
    input: {
        top:20,
        flex: 1,
        fontSize: 18,
        color: '#484D6D',
        borderColor: '#484D6D80',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        height: 50,
    },
});
export default TextField;