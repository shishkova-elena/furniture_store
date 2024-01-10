import React, { Component } from 'react'
import Product from './Product'

export class Products extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Product onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Products