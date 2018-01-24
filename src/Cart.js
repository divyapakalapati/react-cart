import React, { Component } from 'react';
import Total from './Total';
class Cart extends Component {
  constructor(props){
    super(props);
    this.state={
      cartItems: [],
      totalArray: []
    };
    //this.getTotal=this.getTotal.bind(this);
  }

  // getTotal(){
  //   let tot = 0;
  //   for(var i=0; i<this.state.cartItems.length;i++){
  //     tot = tot + this.state.cartItems[i].price
  //   }
  //   return tot;
  // }

  componentDidMount(){
    fetch('http://localhost/cartApi/user/getCart.php', {
      method: 'post',
      body: JSON.stringify(localStorage.userId)
    }).then(result=>result.json())
      .then(items=>this.setState({cartItems: items}));
  }

  render() {
    console.log("cart", this.state.cartItems);
    return (
        <div className="container">
          <h1>Cart </h1>

            <div >
              <table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th className="text-center">Subtotal</th>
							<th></th>
						</tr>
					</thead>
          {this.state.cartItems.map((item,i) => {
					return  (<tbody key={i}>
						<tr>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2"><img src={item.prod_image} alt="..." width="500px" height="120px" className="img-responsive"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">{item.prod_name}</h4>
									</div>
								</div>
							</td>
							<td data-th="Price">{item.price}</td>
							<td data-th="Quantity">
								<input type="number" className="form-control text-center" defaultValue={item.quantity}/>
							</td>
							<td data-th="Subtotal" className="text-center">{item.quantity * item.price}</td>
							<td className="actions" data-th="">
								<button className="btn btn-danger btn-sm"><i className="glyphicon glyphicon-remove"></i></button>
							</td>
						</tr>
					</tbody>
        )})}
          <tfoot>
						<tr>
							<td><a href="#" className="btn btn-warning"><i className=""></i> Continue Shopping</a></td>
							<td colSpan="2" className=""></td>
							<td className="text-center"><strong>Total <Total data={this.state.cartItems}/> </strong></td>
							<td><a href="#" className="btn btn-success btn-block">Checkout <i className=""></i></a></td>
						</tr>
					</tfoot>
				</table>
             </div>

        </div>

    );
  }
}


export default Cart;
