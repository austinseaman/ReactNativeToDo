import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'rebeccapurple',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontFamily: 'Futura'
    }
})