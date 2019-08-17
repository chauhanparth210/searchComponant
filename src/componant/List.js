import React, { Component } from "react";
import "../App.css";
import uuid from "uuid/v4";

export default class List extends Component {
  state = {
    filteredList: []
  };
  componentDidMount() {
    this.setState({
      filteredList: this.props.items
    });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.items === state.filteredList) {
      return {
        filteredList: props.items
      };
    }
    return null;
  }
  changeHandler = e => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
        const itemLC = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return itemLC.includes(filter);
      });
    } else {
      newList = this.props.items;
    }
    this.setState({ filteredList: newList });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search.."
          onChange={this.changeHandler}
        />
        <ul>
          {this.state.filteredList.map(item => (
            <li key={uuid()} onClick={() => this.props.removeItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
