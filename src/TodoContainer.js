import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TodoList odos={state.todos} />
      </header>
    </div>
  );
}

export default App;
