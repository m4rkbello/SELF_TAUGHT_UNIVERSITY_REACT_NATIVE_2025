import React from 'react'
import { StyleSheet, View, Text, ScrollView}

const ScrollView () {
  return (
    <View style={styles.container}>
        <Text>
        Scroll View Component
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    }


});

export default ScrollView;
