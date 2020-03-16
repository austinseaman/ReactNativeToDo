import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.title}</Text>
                <AntDesign name='delete' size={18} color='grey' />
            </View>
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
        fontFamily: 'Futura',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        fontFamily: 'Futura'
    }
})