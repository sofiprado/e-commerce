import React, {Component} from "react";
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
      showProduct: []
    }
  }

//BRING PRODUCT DATA
componentDidMount() {
  const id = this.props.match.params.id
  fetch('http://localhost:3001/api/items/'+ id).then((data) => {
  return data.json()
  }).then((result) => {
    const item = result.item
    console.log(item)

  const array = [
    result.description.plain_text,
    item.currency,
    item.title,
    item.price,
    item.sold,
    item.image,
    item.quantity,
    item.condition
    ]
  this.setState({
    showProduct: array
  })
 })
}

render() {
  const showProduct = this.state.showProduct
  return(
    <div id="main-container">
      <div>
        <SearchBox />  
      </div>
      <img className='image' src={showProduct[5]} />
      <div id="item-data">
      <p className='condition'>{showProduct[7]} - {showProduct[4]} vendidos</p>
      <p className='title-txt'>{showProduct[2]}</p>
      <p className='price-txt'>$ {showProduct[3]}</p>
      <button>Comprar</button>
      </div>
      <p className='description'>{showProduct[0]}</p>  
    </div>
  );
}
}

export default Product;