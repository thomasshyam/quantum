import React from 'react';
import {View,StyleSheet,Text,Dimensions,StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function ScreenLayout(props) {
    return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#F7941D','#F47620','#EB5B27','#EB5B27']}
                    start={{ x:0, y: 0.4, }}
                    end={{ x: 1.9, y: 1.3 }}
                    style={styles.linearContainer}
                >
                <View style={styles.screen}>
                    {props.children}
                </View>
                </LinearGradient>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    linearContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    screen: {
        top:70,
        backgroundColor: '#E2E2E2',
        width: '90%',
        // height: Dimensions.StatusBarHeight,
        height: '88%',
        borderRadius: 10,
        opacity: 1,
        padding: 20,
        alignSelf: 'center',
    },
});
export default ScreenLayout;