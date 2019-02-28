import React, { Component } from 'react'
import {Link} from 'react-router-dom'



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
        const response = await fetch('/api/products/listProducts');
        console.log(response)
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <div>
                Lista de Productos
                <div>
                    Cantidad de productos: {this.state.products.length}
                    {this.state.products.map((value, index) => {
                        return (<section key={value.id} className="recuadro">
                                    <div>{value.description}</div>
                                    <img src={value.image_url} width='50' height='50'></img>
                                    <div>Price: {value.price}</div>
                                    <Link to={"/product/" + value.id }>Detalle Producto</Link>
                                </section>)
                    })}
                </div>
            </div>
        )
    }
}

export default ProductList