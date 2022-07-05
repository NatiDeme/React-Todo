import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {state.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
