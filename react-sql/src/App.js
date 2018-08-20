import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    products:[]
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = _ =>{
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data }))
    .catch(err => console.error(err))
  }

  renderProduct = ({product_id,name}) => <div key={product_id}>{name}</div>

  render() {
    const {products}= this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {products.map(this.renderProduct)}
        </p>
      </div>
    );
  }
}

export default App;
