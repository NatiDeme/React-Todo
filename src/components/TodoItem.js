import React, { useState } from 'react';
import '../style/TodoItem.css';

// class TodoItem extends React.Component {
//   render() {
//     // eslint-disable-next-line react/prop-types
//     const me = this.props;
//     // eslint-disable-next-line react/prop-types
//     const { title } = me.todo;
//     // eslint-disable-next-line react/prop-types
//     const { completed } = me.todo;
//     return (
//       <li className="task-list">
//         <input type="checkbox" checked={completed} onChange={() => console.log('clicked')} />
//         {title}
//       </li>
//     );
//   }
// }

const TodoItem = (props) => {
  const [ state, setState] = useState({
    editing: false,
  })
  let viewMode = {}
  let editMode = {}
  
  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }
  
  const handleEditing = () => {
    setState({
      editing: true,
    })
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setState({ editing: false })
    }
  }


  return (
    <li className="task-list">
      <div onDoubleClick={handleEditing} style={viewMode}>
      <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} />
      {props.todo.title}
      <button onClick={()=> props.deleteTodoProps(props.todo.id)}>Delete</button>
      </div>
      <input type="text" className='textInput' style={editMode} value={props.todo.title} onChange={e => {
    props.setUpdate(e.target.value, id) 
  }} onKeyDown={handleUpdatedDone}/>
    </li>
  );
};

export default TodoItem;
