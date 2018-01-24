import React, { Component } from 'react';
import App from './App';

class Items extends Component {
  constructor(props){
    super(props);
    this.state={
      //items: '',
      numrows: []
      //numrows : [{name: "item1", id: 1}, {name: "item2", id: 2}, {name: "item3", id: 3}, {name: "item4", id: 4}]
    };
  }

  componentDidMount(){
  	fetch(`http://localhost/cartApi/user/getProducts.php`)
 		.then(result=>result.json())
    .then(items=>this.setState({numrows: items}));
    console.log("numrows", this.state.numrows);
  }

  render() {
    console.log("state",this.state);
    return (
      <div className="container">
      {this.state.numrows.map((item,i) => {
          return  <App key={i} product={item} />
        })}
      </div>
    );
  }
}

export default Items;
