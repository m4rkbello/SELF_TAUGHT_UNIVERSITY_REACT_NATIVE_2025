import React from 'react'
import { StyleSheet, View, Text, ScrollView}

const ScrollViewComponent () {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
        Scroll View Component
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
headerText: {
        fontSize: 30,
        margin: 20,
        fontWeight: Bold,
    },


});

export default ScrollViewComponent;
