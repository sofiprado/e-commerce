import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox'
import './Product.css';


class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalProducts: false,
      searchTitle: '',
      item: '',
      itemId: this.props.match.params.single,
      producto: ''
    }
  }

  //BRING PRODUCT DATA
  componentDidMount() {
    const id = this.props.match.params.id
    fetch('http://localhost:3001/api/items/' + id).then((data) => {
      return data.json()
    }).then((result) => {
  
     this.setState({
       producto: result
      })
    })
  }

  render() {
    return (
      <div id="main-container">
        <SearchBox />  
        {this.state.producto.item && 
        <div>
          <img className='image' src={this.state.producto.item.image} />
          <p className='condition'>{this.state.producto.item.condition} - {this.state.producto.quantity} vendidos</p>
          <p className='title-txt'>{this.state.producto.item.title}</p>
          <p className='price-txt'>$ {this.state.producto.item.price}</p>
          <button>Comprar</button>
          <p className='description'>{this.state.producto.description.plain_text}</p>   
        </div>   
        }
      </div>
   )    
  } 
}

export default Product;




