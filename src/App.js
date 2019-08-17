import React, { Component } from "react";
import "./App.css";
import List from "./componant/List";

class App extends Component {
  state = {
    list: ["Hello", "Parth", "Madhav"]
  };

  addItem = e => {
    e.preventDefault();
    let { list } = this.state;
    const item = document.getElementById("inputItem").value;
    list.push(item);
    this.setState({ list });
    document.getElementById("inputItem").value = "";
  };

  removeItem = el => {
    let list = this.state.list;
    console.log(el);
    list.forEach((item, index) => {
      if (el === item) {
        list.splice(index, 1);
      }
    });
    this.setState({ list });
  };

  render() {
    // console.log(this.state.list);
    return (
      <div className="App">
        <h1>Search TO-DO App</h1>
        <hr />
        <List items={this.state.list} removeItem={this.removeItem} />
        <hr />
        <form>
          <input
            type="text"
            name="list"
            placeholder="add something"
            id="inputItem"
          />
          <button onClick={this.addItem}>add item</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default App;
