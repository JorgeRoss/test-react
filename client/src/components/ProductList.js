import React, { Component } from 'react'

import ItemProducto from './Product'


class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.getProductos().then(res => {
            console.log(res)
            this.setState({ products: res.items })
        })
    }

    getProductos = async () => {
        const response = await fetch('/api/products');
        console.log(response)
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <div>

                <div className="form-group">
                    Cantidad de productos: {this.state.products.length}
                    <ul className="list-group list-group-flush">
                        {this.state.products.map((value, index) => {
                            return (
                                <ItemProducto id={value.id}
                                    description={value.description}
                                    price={value.price}
                                    image_url={value.image_url}>
                                </ItemProducto>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProductList