
import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

function App(): React.JSX.Element {


  return (<View style={styles.container}>
    <View style={styles.boxContainer}>
      <View style={styles.redBox} />
      <View style={styles.blueBox} />
      <View style={styles.greenBox} />
      <View />
      {/**TEXT COMPONENT */}


    </View>
    <Text style={styles.myFirstText}>THIS IS MY FIRST APP
      <Text style={styles.nestedText}>MY NAME IS <Text style={styles.nestedTextBold}>MARK BELLO</Text>
      </Text>
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  myFirstText: {
    fontSize: 30,
    margin: 20,
  },
  nestedText: {
    fontSize: 18,
  },
  nestedTextBold: {
    fontWeight: 'bold',
  }

});

export default App;
