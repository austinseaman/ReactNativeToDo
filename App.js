import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState(['Finish Native App'])

  const clickHandler = () => {
    setTodos(prevState => prevState + ' poo')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldWhite}>Austin's ToDos!</Text>
      </View>

      
      <Text>Title</Text>
      <TextInput 
        style={styles.input}
        placeholder='Title of ToDo'
      />
      
      <View style={styles.buttonContainer}>
        <Button title='Add ToDo' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'black',
    padding: 20
  },
  boldWhite: {
    fontWeight: 'bold',
    color: 'white'
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200
  }
});
