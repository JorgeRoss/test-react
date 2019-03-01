import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends Component {
    render() {
        return (
            <section className="recuadro">
                <div>Error 404</div>
                <Link to={"/"}>Volver a listado de producto</Link>
            </section>

        )
    }
}

export default Error404