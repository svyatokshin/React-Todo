import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todos  
    };
  }

  toggleItem = clickedId => {
    //find the item we clicked on
    // toggle field
    //update state with the data
    const newTodoList = this.state.todoList.map(item => {
      if(item.id === clickedId) {
        return{
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // update state with the new array
    // arrow function implicitly binds the "this" keyword to the function
    this.setState({
      todoList: newTodoList
    });
  };

  addNewItem = (itemText) => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem],
    });
  };

  clearItem = e => {
    e.preventDefault();
    this.setState({ 
      todoList: this.state.todoList.filter(
        item => !item.completed
      )
     });
  };

  // render is like a function 'return' statement
  // renders JSX
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addNewItem={this.addNewItem}
          /> 
        </div>
          <TodoList
          todos={this.state.todoList}
          toggleItem={this.toggleItem}
          clearItem={this.clearItem}
          />
      </div>
    );
  }
}

export default App;
