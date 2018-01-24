import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as addAction from './Actions/addAction';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.divStyle = {
      textAlign: 'center',
      width: '25%',
      display: 'inline-block',
      marginTop: '20px'
    };
    this.state={
      productDesc: {},
      disabledClass: ''
    };
    this.handleClick=this.handleClick.bind(this);

  }
  handleClick(event){
    var dataToSend = {};
    dataToSend = this.state.productDesc;
    dataToSend.userId = localStorage.userId;
    fetch('http://localhost/cartApi/user/addToCart.php', {
      method: 'post',
      body: JSON.stringify(dataToSend)
    }).then(function(response) {
      response.json().then(function(text) {
        toast.success("Added to cart !");
        //this.setState({disabledClass: "disabled"})
      });
    }).then(function(data) {
      console.log("error", data);
    });

  //  this.props.addToCart(x);
  }
  componentDidMount(){
    this.setState({productDesc: this.props.product})
  }
  render() {

    return (
      <div className="App" style={this.divStyle}>
        <img src={this.state.productDesc.prod_image} alt="This is a pic" width="60%" height="175px"/>
        <div> {this.state.productDesc.prod_name}</div>
        <div> {this.state.productDesc.price}</div>
        <button className={"btn btn-primary cartButton `this.state.disabledClass`"} type="button" onClick={this.handleClick}>Add to Cart</button>
         <ToastContainer hideProgressBar={true}/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    item: state.item
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    addToCart: item => dispatch(addAction.addToCart(item))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
