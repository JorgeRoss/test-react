import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProductDetail extends Component {
    state = {
        product: {}
    }

    componentDidMount() {

        this.getProductos().then(res => {
            console.log(res)
            this.setState({ product: res })
        })
    }

    getProductos = async () => {
        const { params } = this.props.match;
        const response = await fetch('/api/products/productDetail/' + params.id);
        console.log(response)
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <div>
                {this.state.product.description}
            </div>
        )


    }
}

export default ProductDetail