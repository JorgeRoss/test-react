import React, { Component } from 'react'

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
        if (response.status >= 300) {
            return document.location.href = "/404"
        }
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <div className="form-group">
                <h4>{this.state.product.description}</h4>

                <div className="row">
                    <div className="col-md-2">
                        Precio : ${this.state.product.list_price}
                    </div>
                    <div className="col-md-3">
                        Modelo :{this.state.product.model}
                    </div>
                    <div className="col-md-4 form-group">
                        Marca : {this.state.product.original_brand}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <img src={this.state.product.main_image} width='400' height='400'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        Especificaciones : {this.state.product.summary}
                    </div>
                </div>



            </div>
        )
    }
}

export default ProductDetail