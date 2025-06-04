import { View, StyleSheet, Text } from 'react-native';


function StylingDemo() {
    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
                marginBottom: 15
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bold'
                }} >
                    INLINE STYLINNG EXAMPLE
                </Text>
                <View style={[style.combinedStyle, { borderWidth: 2, borderColor: 'purple' }]}>
                    <Text style={[style.combinedText, { textDecorationLine: 'underline' }]}>Combine Text Style</Text>
                    <Text style={[style.combinedText, { textDecorationLine: 'underline' }]}>Combine Text Style with different color</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    combinedStyle: {
        backgroundColor: 'lightyellow',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    combinedText: {
        fontSize: 14,

    }
})

export default StylingDemo;