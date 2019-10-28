import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import TodoSearch from "./components/TodoComponents/TodoSearch";
import "./styles/app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Organize Room",
          id: 1528817077232,
          completed: false
        }
      ],

      newTask: "",

      search: "",

    };
  }

  changeHandler = e => {
    this.setState({ newTask: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.newTask,
      id: Date.now(),
      completed: false
    };

    this.setState({ data: [...this.state.data, newTodo] });

    this.setState({ newTask: "" });
  };

  clearHandler = e => {
    e.preventDefault();
    const result = this.state.data.filter(item => item.completed === false);

    this.setState({ data: result });
  };

  checkedHandler = (e, item, index) => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[index].completed = !dataCopy[index].completed;

    this.setState({
      data: dataCopy
    });
  };

  updateData = () => {
    window.localStorage.setItem("data", JSON.stringify(this.state.data));
  };

  searchInputChange = event => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    const retrievedData = JSON.parse(window.localStorage.getItem("data"));

    this.setState({ data: retrievedData });
    this.setState({ searchedData: retrievedData });
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateData();
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to your Todo App!</h1>

        <TodoForm
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          clearHandler={this.clearHandler}
          newTask={this.state.newTask}
        />

        <TodoSearch search={this.state.search} searchInputChange={this.searchInputChange} />
        <br />

        <TodoList propsData={this.state.data} checkedHandler={this.checkedHandler} search={this.state.search} />
      </div>
    );
  }
}

export default App;
