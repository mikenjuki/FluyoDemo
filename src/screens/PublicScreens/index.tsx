import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './LoginScreen';

const RootStack = createStackNavigator();

const PublicScreens = () => {
  const a = 1;
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={{ headerShown: false }}
                name="SignInScreen"
                component={SignInScreen}
            />
        </RootStack.Navigator>
    );
};
export default PublicScreens;
