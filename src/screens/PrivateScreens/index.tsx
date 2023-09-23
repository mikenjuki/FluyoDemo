import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ExerciseScreen from './ExerciseScreen';
import CompletedScreen from './CompletedScreen';

const RootStack = createStackNavigator();

const PrivateScreens = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: true, headerTitle: "Fluyo Demo" }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false,  }}
        name="ExerciseScreen"
        component={ExerciseScreen}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="CompletedScreen"
        component={CompletedScreen}
      />
    </RootStack.Navigator>
  );
};
export default PrivateScreens;
