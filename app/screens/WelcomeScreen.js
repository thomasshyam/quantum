import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >WelcomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        color: '#484D6D',
    },
});
export default WelcomeScreen;