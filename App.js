import React from 'react';
import Navigator from './Navigator'
import Provider from './src/app/provider';

export default function App() {
  return (
    <Provider>
      <Navigator/>
    </Provider>
  );
}

