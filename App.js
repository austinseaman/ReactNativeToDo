import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/toDoItem';
import AddToDo from './components/addToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { title: 'Be a star team member in a dev role', key: '5' },
    { title: 'Crush interviews', key: '4' },
    { title: 'Finish Native App', key: '3' },
    { title: 'Walk the dog', key: '2' },
    { title: 'Have morning coffee', key: '1' }
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
        <View style={styles.currentCont}>
          <Text style={styles.current}>Current ToDos</Text>
        </View>

        <Text style={styles.del}>Tap a task once it's been completed, to delete it.</Text>
        
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
  currentCont: {
    backgroundColor: 'teal',
    marginTop: 20,
    borderRadius: 10
  },
  current: {
    fontWeight: 'bold',
    fontFamily: 'Futura',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 5,
  },
  del: {
    fontWeight: 'bold',
    fontFamily: 'Futura',
    textAlign: 'center',
    color: 'black',
    marginTop: 5
  }
});
