import React, {Component} from "react";
//import { BrowserRouter as Route, Link } from "react-router-dom";

class Api extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: 'Bienvenido'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/items/:query').then((data) => {
      return data.json()
    }).then((result) => {
      console.log(result, 'fetch result')
      this.setState({
        text: 'funcionó'
      })
    })
  }
    
  render() {
    return(
    <div>
      <p>{this.state.text}</p>
    </div>
  );
}
}

export default Api;