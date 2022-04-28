import React from 'react';
import {View,StyleSheet} from 'react-native';
import TextField from './TextField';
import { MaterialCommunityIcons  }  from '@expo/vector-icons';

function AppFormField({icon,style,children, ...otherProps}) {
    return (
        <>
            <TextField 
                style={[styles.input,style]}
                {...otherProps}
            >
            <MaterialCommunityIcons name={icon} size={20} color="#484D6D80" />
            {/* {children} */}
            </TextField>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        margin:10, 
    },
});
export default AppFormField;