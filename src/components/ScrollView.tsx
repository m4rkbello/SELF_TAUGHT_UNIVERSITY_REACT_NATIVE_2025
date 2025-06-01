import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Scroll View Component
      </Text>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        bounces={true}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 30,
    margin: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    padding: 20,
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center', // use alignItems instead of alignContent
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
});

export default ScrollViewComponent;
