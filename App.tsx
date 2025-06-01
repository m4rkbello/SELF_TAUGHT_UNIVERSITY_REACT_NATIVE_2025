
import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

import TextInputComponent from './src/components/TextInput';

function App(): React.JSX.Element {

  const [count, setCount] = useState<number>(0)

  return (<View style={styles.container}>

    <TextInputComponent />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default App;
