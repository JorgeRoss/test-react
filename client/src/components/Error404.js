import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Error404 extends Component {
    render() {
        return (
            <div>
                <center><h1>404</h1></center>
                <center><Link to="/">Volver a listado de producto</Link></center>
            </div>
        )
    }
}

export default Error404