import React from 'react';
import Navigator from './Navigator'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  if (AsyncStorage.getItem('Likes') == null){
    AsyncStorage.setItem('Likes', JSON.stringify([]));
  }
  return (
    <Navigator/>
  );
}

