import React from 'react';
import { Component } from 'react';
import Counter from './Counter';
import shortid from 'shortid';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Form from './TodoList/Form';
import Clock from './Clock';
// import initialTodos from './todos.json';
import Container from './Container/Container';
import Modal from './Modal/Modal';
import IconButton from './IconButton/IconButton';
import { ReactComponent as AddIcon } from './Icons/add.svg';
import Tabs from './Tabs';
import tabs from '../tabs.json';
import Filter from './TodoFilter/Filter';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' },
];

export default class List extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.togleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };
  handleTagChange = event => {
    this.setState({ tag: event.currentTarget.value });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };
  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Clock />
        <Tabs items={tabs} />

        <IconButton onClick={this.togleModal} aria-label="добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        {showModal && (
          <Modal onClose={this.togleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <Form onSubmit={this.formSubmitHandler} />

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <h1>Состояние документа</h1>
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>выполненных: {completedTodoCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Dropdown />
      </Container>
    );
  }
}
// const App = () => (
//   <>
{
  /* <h1>Состояние документа</h1> */
}
{
  /* <ColorPicker options = {colorPickerOptions} /> */
}
{
  /* <Counter /> */
}
{
  /* <Dropdown /> */
}
{
  /* <TodoList /> */
}
{
  /*  */
}
{
  /* </> */
}
// )
