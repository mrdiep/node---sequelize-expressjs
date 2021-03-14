import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import SearchAndOrderMoreProduct from './search-and-order-component'
import { createWrapActions } from '../actions'

class OrderDetailComponent extends Component {

  componentDidMount() {
    console.log('componentDidMount')
    const { isFetching, router } = this.props
    //will use: bind action to props
    console.log(isFetching)
    if (!isFetching) {
      console.log(router)
      console.log(order_id)
      // use client param here to load
      // this.props.actions.fetchOrderItem(order_id);
    }
  }

  render() {

    if (!this.props.isFetching) {
      return <div>Data not fetching.</div>
    }

    const { orders: { orderDetail, showLoadingIndicator, searchMoreProductViewModel }, newActions } = this.props
    if (showLoadingIndicator) {
      return (
        <Container>
          <Row>
            <Col sm={12}>
              Sample loading async ... (wait 3 sec)
            </Col>
          </Row>
        </Container>
      );
    }

    const renderRow = (key, value) => (<Row>
      <Col sm={4}><b>{key}</b></Col>
      <Col sm={8}>{value}</Col>
    </Row>);

    return (
      <div>
        <Container>
          <Row>
            <Col sm={12}>
              <h4>ORDER DETAIL</h4>
            </Col>
          </Row>

          {renderRow('Customer Name', orderDetail.customer?.first_name)}
          {renderRow('Customer Email', orderDetail.customer?.email)}
          {renderRow('Store', orderDetail.store.store_name)}
          {renderRow('Store Address', `${orderDetail.store.street}, ${orderDetail.store.city}`)}

          {renderRow('Seller:', `${orderDetail.staff.first_name}, ${orderDetail.staff.email}`)}

          {renderRow('Order Id', orderDetail.order_id)}
          {renderRow('Order Date', orderDetail.order_date)}
          {renderRow('Required Date', orderDetail.required_date)}
          {renderRow('Shipped Date', orderDetail.shipped_date)}

          <Row>
            <Col sm={12}>
              <h5>Order Items:</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetail.order_items.map((x, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{x.product.product_name}</td>
                      <td>{x.quantity}</td>
                      <td>${x.list_price}</td>
                      <td>${x.list_price * x.quantity}</td>
                      <td><Button size="sm" onClick={() => newActions.requestBuyMore({
                        product_id: x.product.product_id,
                        order_id: orderDetail.order_id
                      })}>Add +1</Button></td>
                      <td><Button size="sm" onClick={() => newActions.removeProductFromCart({
                        product_id: x.product.product_id,
                        order_id: orderDetail.order_id
                      })}>Remove from cart</Button></td>
                    </tr>))
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <SearchAndOrderMoreProduct
                order_id={orderDetail.order_id}
                searchText={searchMoreProductViewModel.searchText}
                products={searchMoreProductViewModel.productsResult}
                actions={newActions} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button onClick={() => newActions.requestAddToCard({ prop1: 1 })}>
                Sample Async - debug in action: requestAddToCard
              </Button>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

function mapStateToProps({ orders, router }) {
  return { orders, router }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    newActions: bindActionCreators(createWrapActions(), dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailComponent)
