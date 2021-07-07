// import logo from "./logo.svg";
import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import shortid from 'shortid';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Form from './components/TodoList/Form';
import Clock from './components/Clock';
// import initialTodos from './todos.json';
import Container from './components/Container/Container';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import { ReactComponent as AddIcon } from './components/Icons/add.svg';
import Tabs from './components/Tabs';
import tabs from './tabs.json';
import Filter from './components/TodoFilter/Filter';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' },
];

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('APP componentDidMounte');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('APP componentDidMounte');
    if (this.state.todos !== prevState.todos) {
      // console.log('обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
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
    // console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
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

  // handleNameChange = event => {
  //   // console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };
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
        {/* <Clock /> */}
        {/* <Tabs items={tabs} /> */}

        <IconButton onClick={this.togleModal}>
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        {showModal && (
          <Modal onClose={this.togleModal}>
            <h1>hello, this content modal each children</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button type="button" onClick={this.togleModal}>
              Close
            </button>
          </Modal>
        )}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <input */}
        {/* // type="text" */}
        {/* // value={this.state.inputValue} */}
        {/* // onChange={this.handleInputChange} /> */}
        <h1>Состояние документа</h1>
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>выполненных: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
      </Container>
    );
  }
}
// const App = () => (
//   <>
//     <h1>Состояние документа</h1>
//     <ColorPicker options = {colorPickerOptions} />
//     <Counter />
//     <Dropdown />
//     <TodoList />

//   </>
// )

export default App;
