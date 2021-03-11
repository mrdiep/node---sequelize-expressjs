import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActionCreators from './orders-action'
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
    const { isFetching, orderDetail } = this.props
    return (
      <div>

        order_id: {orderDetail.order_id}
        customer: {orderDetail.customer?.first_name}

        

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
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent)
