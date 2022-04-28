import React, { useEffect } from 'react';
import { View,Image,StyleSheet } from 'react-native';

import Screen from '../components/Screen';

const Splashscreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    }, []);

    return (
        <Screen>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo.png')}    
                    style={{
                        width: 170,
                        height: 170,
                        resizeMode: 'contain',
                        bottom: 280,
                    }}
                />
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Splashscreen;