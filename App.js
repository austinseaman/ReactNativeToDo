import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/toDoItem';
import AddToDo from './components/addToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { title: 'Have morning coffee', key: '1' },
    { title: 'Walk the dog', key: '2' },
    { title: 'Finish Native App', key: '3' },
    { title: 'Crush interview with Sean at ZooWho', key: '4' },
    { title: 'Brown nose a little with this list', key: '5' },
    { title: 'Be a star employee', key: '6' },

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
    Alert.alert('Nice work!', 'Gotta love checking off tasks!', [
      {text: 'Done', onPress: () => console.log('Todo was deleted')}
    ])
  }

  const submitHandler = (text) => {
    if (text.length >= 3) {
      setTodos((prevTodos) => {
        return [
          { title: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
      Alert.alert('Nice!', 'Successfully added. :)', [
        {text: 'Done', onPress: () => console.log('New todo added')}
      ])
      
    } else {
      Alert.alert('UH OH!', 'ToDos must be 3 or more characters!', [
        {text: 'Got it', onPress: () => console.log('Alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Dismissed the Keyboard')
    }}>
      <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <Text style={styles.current}>Current ToDos</Text>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler}></ToDoItem>
            )}
          />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
  },
  current: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    backgroundColor: 'teal',
    fontWeight: 'bold',
    fontFamily: 'Futura',
    marginTop: 20
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 5
  }
});
