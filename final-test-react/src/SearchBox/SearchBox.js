import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({
      item: value
    })
  }

  //SEARCH BUTTON
  handleClick() {
    const inputValue = this.state.item
    this.setState({
      item: inputValue
    })
  }

  render() {
    const url = '/items?search=' + this.state.item
    return (
      <div id="searchBox">
        <p id="online-shop">Tienda On-line</p>
        <input type="text"
          value={this.state.item}
          onChange={this.handleChange.bind(this)}
        />
        <Link to={url}><button onClick={this.handleClick.bind(this)} >Search</button></Link>
      </div>
    );
  }
}

export default SearchBox;