import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function TextInputComponent() {

    const [inputFormValue, setInputFormValue] = useState('');

    //output sa 
    console.log(inputFormValue);

    return (
        <View style={style.container}>
            <Text>Text Input Component</Text>
            <TextInput placeholder='Type something here...' value={inputFormValue} onChangeText={setInputFormValue} style={style.inputField} />
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
    inputField:  {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default TextInputComponent;
