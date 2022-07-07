import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import InputTodo from "./components/InputTodo";
import { v4 as uuidv4 } from "uuid";
class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        }),
      }
    })
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} etUpdate={this.setUpdate}/>
      </header>
    </div>
  );
  }
}

export default App;
