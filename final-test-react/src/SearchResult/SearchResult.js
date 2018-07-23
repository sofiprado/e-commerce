import React, {Component} from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import queryString from 'query-string'

import './SearchResult.css';
import SearchBox from '../SearchBox/SearchBox'

class SearchResult extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      finalProducts: false,
      searchTitle: '',
      item: '',
      itemId: '',
      itemTitle: ''
    }
  }

//SEARCH PRODUCT IN API
componentDidMount() {
  const queryParse = queryString.parse(this.props.location.search)
  const id = queryParse.search
  fetch('http://localhost:3001/api/items?q='+ id).then((data) => {
    return data.json()
  }).then((result) => {
    this.setState({
      finalProducts: result,
      searchTitle: id
    })
  })
}

//NEW SEARCH
componentDidUpdate() {
  const queryParse = queryString.parse(this.props.location.search)
  const id = queryParse.search

  if (id !== this.state.searchTitle) {
    fetch('http://localhost:3001/api/items?q='+ id).then((data) => {
      return data.json()
    }).then((result) => {
      this.setState({
        finalProducts: result,
         searchTitle: id
      })
    })
  }
}


render() { 
  return(
    <div>
      <SearchBox />  
    <div>
    {this.state.finalProducts &&
      <React.Fragment>
        {this.state.finalProducts.myProducts.map((producto, i) => {
          const url = '/items/' + producto.items.id
            return(
              <div className="results-container" key={i}>
              <Link to={url}>
                <img className="product-pic" value={producto.items.id} src={producto.product.picture}  />
              </Link>
                <div className="product-info">
                <p className="title-txt">{producto.items.title}</p>
                <p className="price-txt">$ {producto.price.amount}</p>
                <p className="bottom-txt">{producto.product.sold_quantity} vendidos - {producto.product.address} </p>
                </div>
              </div>
            )
            })}
        </React.Fragment>
      }
      </div>
    </div>
  );
}
}

export default SearchResult;

        