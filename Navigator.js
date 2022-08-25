import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme, DefaultTheme, useNavigationContainerRef } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

//Components
import Main  from './src/components/Main' 
import LikeScreen from './src/components/LikeScreen'
import SettingsScreen from './src/components/SettingsScreen'

export default function App() {
    const navigationRef = useNavigationContainerRef();
    const Tab = createBottomTabNavigator();
    const scheme = useColorScheme();

    return (
    <NavigationContainer theme={scheme === 'light' ? DefaultTheme : DarkTheme}>
    <Tab.Navigator
    initialRouteName="Home" 
    screenOptions={{
        tabBarActiveTintColor: '#000',
    }}
    >
        <Tab.Screen 
        options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => ( <Ionicons name="home-sharp" color={color}  size={32} />),
        }}
        name="Home" component={Main} />
        <Tab.Screen 
        options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => ( <Ionicons name="heart-sharp" color={color}  size={32} />)
        }}
        name="Likes" component={LikeScreen} />
        <Tab.Screen 
        options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => ( <Ionicons name="settings-sharp" color={color}  size={32} />)
        }}
        name="Settings" component={SettingsScreen}
        /> 
    </Tab.Navigator>    
    </NavigationContainer>
  );
}

