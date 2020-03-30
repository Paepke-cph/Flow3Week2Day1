import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, editTodo}) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText}
            <a href="#/" onClick= {(e)=>{e.preventDefault(); deleteTodo(todo)}}> (delete </a> 
            <a href="#/" onClick= {()=> editTodo(todo)}>, edit) </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
}
