import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions'

class App extends Component {

  componentDidMount() {
    console.log('componentDidMount')
    const { dispatch } = this.props
    //will use: bind action to props
    dispatch(fetchProducts())
  }


  render() {
    console.log('hello diep')
    const { isFetching, products } = this.props
    const totalProducts = products.length;
    console.log(JSON.stringify(this.props));
    return (
       <>
         {isFetching && totalProducts === 0 && <h2>Loading...</h2>}
         {!isFetching && totalProducts === 0 && <h2>Empty.</h2>}
        {products.map(x => (<h4 key={x}>{x.product_name}</h4>))}
       </>
    );
  }
}
 
function mapStateToProps({ isFetching, products }) {
  return {
    isFetching,
    products
  }
}
 
export default connect(mapStateToProps)(App)
