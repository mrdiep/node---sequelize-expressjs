import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import { createWrapActions } from '../actions'

class OrderListComponent extends Component {

  render() {
    const { orderDetail, showLoadingIndicator, userOrders, searchMoreProductViewModel } = this.props

    return <Container>

      <Row><Col sm={12}>Hello</Col></Row>

      <Row><Col sm={12}>You have {userOrders.length} order(s)</Col></Row>

      {userOrders.map((x, index) => (<Row key={index}><Col>OrderId: {x.order_id}</Col></Row>))}
    </Container>
  }
}

function mapStateToProps({ orders }) {
  return orders
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    newActions: bindActionCreators(createWrapActions(), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderListComponent)
