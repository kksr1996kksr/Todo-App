import React, { useState } from 'react';
import Todo from './Todo';    // always remember to add ./ because of the current directory for the custom components
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';
import { useEffect } from 'react';
import firebase from 'firebase';

function App() {
  // const [todos, setTodos] = useState(['one thing', 'two thing', '3 thing']);  // using state to remember - state is short term memory of a component
  const [todos, setTodos] = useState([]);  // using state to remember - state is short term memory of a component

  const [input, setInput] = useState(''); // using state - input field is being set to memory for further use

  // When the app loads, we need to listen to the db and fetch new todos as they get added/ removed
  useEffect(() => {
    //this code fires when the app 1st loads.
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {             // this code will always listen to the db
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    });
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();      // this stops the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // adds timestamp of the server
    })

    // setTodos([...todos, input]); // ...todos -> spread operator to push elements in the todos array
    setInput(''); // clear up the input field after clicking add todo button
  }
  return (
    <div className="App">
      <h1>1st React App - Todo App</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> value is set to input state and onChange triggers event when key is pressed */}
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} /> //passing the props to the Todo component and one by one it is displayed on the screen
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
