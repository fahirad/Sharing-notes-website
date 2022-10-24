import React from "react"
import List from "./List";
import Header from "./Header";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";


class Container extends React.Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: "Setup development environment",
      //   completed: true
      // },
      // {
      //   id: uuidv4(),
      //   title: "Develop website and add content",
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: "Deploy to live server",
      //   completed: false
      // }
    ]
  };
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(response => response.json())
  //     .then(data => this.setState({ todos: data }));
  // }

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }
  //for checking/unchecking the boxes 
  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  //for deleting an item
  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  //for adding an item, which will be passed from Input.js, here it is
  //used as title to create a new object and add it to the state of container
  addItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }


  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }
  //RENDERING
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <Input addProps={this.addItem} />
          <List
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    )
  }
}

export default Container