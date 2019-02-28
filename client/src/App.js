import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListView from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Error404 from './pages/Error404';


class App extends Component {
    render(){
     return(
        <div>
          <BrowserRouter> 
                      <Switch>
                          <Route exact path='/' component={ProductListView} />
                          <Route path='/product/:id' component={ProductDetail} />
                          <Route path='/404' component={Error404} />

                      </Switch>
          </BrowserRouter>
        </div>
     )
    }
}


export default App;
