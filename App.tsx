import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

// Correct imports based on your structure
import Basic from './src/components/Basic';
import TextInput from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollView';
import StylingDemo from './src/components/Styling';

function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>OHAHAY</Text>
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.scrollViewContent}>
        <Basic />
        <TextInput />
        <ScrollViewComponent />
        <StylingDemo />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollViewContent: {
    padding: 20,
  }
});

export default App;
