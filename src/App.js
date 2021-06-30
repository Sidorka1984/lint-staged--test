// import logo from "./logo.svg";
import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
import Form from './components/TodoList/Form';
import initialTodos from './todos.json';
import Container from './components/Container/Container';

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
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
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

  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;

    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );

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
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        <ColorPicker options={colorPickerOptions} />
        {/* <Counter />
        <Dropdown /> */}
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
