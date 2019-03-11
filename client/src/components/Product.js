import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {

    render() {
        return (
            <li key={this.props.id} className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {this.props.description}
                        </div>
                        <div className="col-md-2">
                            Precio: ${this.props.price}
                        </div>
                        <div className="col-md-3">
                            <img src={this.props.image_url} width='200' height='200'></img>
                        </div>
                        <div className="col-md-4 form-group">
                            <Link to={"/product/" + this.props.id}>Detalle Producto</Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Product