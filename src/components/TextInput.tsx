import React from "react";
import { StyleSheet, View, Text } from "react-native";

function TextInputComponent() {
    return (
        <View style={style.container}>
            <Text>Text Input Component</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    headerText: {
        fontSize: 30,
        margin: 20,
    },
});

export default TextInputComponent;
