import React from 'react';
import {StyleSheet } from 'react-native';   

import AppButton from './AppButton';

function SubmitButton ({title,style,onPress}) {
    return (
        <AppButton title={title} style={[styles.input,style]} onPress={onPress} />
    );
}

const styles = StyleSheet.create({
    
})

export default SubmitButton;