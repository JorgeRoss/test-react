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
        const response = await fetch('/api/products/' + params.id);
        if(response.status >= 300)
        {
            return document.location.href = "/404"
        }
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