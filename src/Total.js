import React, { Component } from 'react';


class Total extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      total: 0
    };
  }
  componentDidMount(){
    this.setState({data: this.props.data});
    console.log("this.props.data",this.props);
    let tot = 0;
    for(var i=0; i<this.state.data.length;i++){
      tot = tot + (this.state.data[i].price * this.state.data[i].quantity);
    }
    console.log("tot",tot);
    this.setState({total: tot});
  }

  render() {
    return (
      <div> {this.state.total} </div>
    );
  }
}

export default Total;
