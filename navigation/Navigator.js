import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../app/screens/LoginScreen';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import ForgotPassword from '../app/screens/ForgotPassword';
import VerifyNumber from '../app/screens/VerifyNumber';
import SplashScreen from '../app/screens/SplashScreen';
import CreateNewPassword from '../app/screens/CreateNewPassword';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Splashscreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerTitleAlign:'center',headerTintColor:'#484D6D',}} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitleAlign: 'center',headerTintColor:'#484D6D',headerStyle:{ backgroundColor: '#FFA5000D'  }}} />
            <Stack.Screen name="VerifyNumber" component={VerifyNumber} options={{headerTitleAlign:'center',headerTintColor:'#484D6D',headerStyle:{ backgroundColor: '#FFA5000D'  }  }}  />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{headerTitleAlign:'center',headerTintColor:'#484D6D' ,headerStyle:{ backgroundColor: '#FFA5000D'  }}}  />
        </Stack.Navigator>
    );
};

export default Navigator;