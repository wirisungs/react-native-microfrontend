import React from 'react';
import {View, Text} from 'react-native';
import MicroApp1 from 'MicroApp1';
import MicroApp2 from 'MicroApp2';

const App = () => {
  return (
    <View>
      <Text>Container App</Text>
      <MicroApp1 />
      <MicroApp2 />
    </View>
  );
};

export default App;
