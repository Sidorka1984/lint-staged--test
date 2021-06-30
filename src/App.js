// import logo from "./logo.svg";
import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import shortid from 'shortid';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor';
import Form from './components/TodoList/Form';
import initialTodos from './todos.json';
import Container from './components/Container/Container';
// import Filter from './components/Filter';

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
    todos: initialTodos,
    filter: '',
  };
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

  render() {
    // const { todos, filter } = this.state;

    // const totalTodoCount = todos.length;

    // const completedTodoCount = this.calculateCompletedTodos();
    //  const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />

        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange} /> */}
        {/* <h1>Состояние документа</h1>
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
        /> */}
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Dropdown />
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
