import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListView from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Error404 from './components/Error404';


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
