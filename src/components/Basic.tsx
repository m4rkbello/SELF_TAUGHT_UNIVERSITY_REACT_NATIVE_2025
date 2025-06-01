import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';

function Basic() {

    const [count, setCount] = useState(0);



    return (
        <View>
            {/**VIEW COMPONENT */}
            <View style={styles.boxContainer}>
                <View style={styles.redBox} />
                <View style={styles.blueBox} />
                <View style={styles.greenBox} />
                <View />
                {/**TEXT COMPONENT */}
            </View>

            {/**IMAGE COMPONENT WITH ONLINE LINK*/}
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/id/237/200/300' }} />

            {/**IMAGE COMPONENT WITH LOCAL */}
            <Image style={styles.imageLocal} source={require('../../assets/pogiha.jpg')} />

            {/**BUTTON COMPONENT */}
            <Button title="Click Me" onPress={() => setCount(count + 1)} />
            <Text> count is {count} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10
    },
    imageLocal: {
        width: 150,
        height: 150,
        marginBottom: 10
    }
});

export default Basic;