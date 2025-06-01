import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// Correct imports based on your structure
import Basic from './src/components/Basic';
import TextInput from './src/components/TextInput';

function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>OHAHAY</Text>

      {/* Use your custom components here */}
      <Basic />
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default App;
