import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Austin's ToDos!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 38,
        backgroundColor: 'teal'
    },
    title: {
        marginTop: 12,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Futura'
    }
})