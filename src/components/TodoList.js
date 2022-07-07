import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  setUpdate = (updatedTitle, id) => {
    console.log(updatedTitle, id)
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps}  setUpdate={this.props.setUpdate} />
        ))}
      </ul>
    );
  }
}

// function TodoList(props) {
//   return (
//     <ul>
//       {props.todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} />
//       ))}
//     </ul>
//   );
// }

export default TodoList;
