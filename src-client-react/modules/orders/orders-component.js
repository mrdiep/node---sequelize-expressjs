import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActionCreators from './orders-action'

import { createWrapActions } from './simpler'

class ProductsComponent extends Component {

  componentDidMount() {
    console.log('componentDidMount')
    const { isFetching } = this.props
    //will use: bind action to props
    console.log(isFetching)
    if (!isFetching) {
      this.props.actions.fetchOrderItems(productId);
    }
  }

  render() {
    const { isFetching, orderDetail, newActions } = this.props
    return (
      <div>

<button onClick={() => newActions.requestAddToCard({prop1: 1})}>SIMPLE DISPATC ACTION - ACTION_REDUCER BASED CLASS</button>
        <b>WANT BEAUTIY: ADD CSS AND STYLE LIBS</b>
        order_id: {orderDetail.order_id}
        <br/>
        customer: {orderDetail.customer?.first_name}

        <br/>
        DETAIL ORDER ITEMS:
        {orderDetail.order_items.map((x, i) => (

          <div key={i}>
             <br/>
             <br/>
            Product: {x.product.product_name}
            <br/>
            List_price: ${x.list_price}
            <br/>
            Quantity: {x.quantity}
            <br/>
            Total: ${x.list_price * x.quantity}
            </div>
        ))}



      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return orders
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(ActionCreators, dispatch),
    newActions: bindActionCreators(createWrapActions(), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent)
