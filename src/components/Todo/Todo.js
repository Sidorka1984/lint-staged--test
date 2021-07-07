import React from 'react';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../Icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <div>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    {/* <button */}
    {/* type="button" */}
    {/* className="TodoList__btn" */}
    {/* onClick={onDelete} */}
    {/* > */}
    {/* Удалить */}
    {/* </button> */}
    <IconButton>
      <DeleteIcon width="40" height="40" fill="#fff" />
    </IconButton>
  </div>
);
export default Todo;
