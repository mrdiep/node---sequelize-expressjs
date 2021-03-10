import React, { Component } from 'react'

export default (product,actions) => {
return (<div><h4>{product.product_name}</h4><button onClick={() => actions.deleteProducts(product.product_id)}>DELETE</button></div>)
}