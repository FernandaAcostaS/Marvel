import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';
import StoreProvider from './Components/Store/Provider';
import RoutesPrivate from './Components/Rota/Private/Private';
import Home from './Pages/Home';
import Filmes from './Pages/Filmes';
import Personagens from './Pages/Personagens';
import HQs from './Pages/HQs';
import Login from './Components/User';


function Routes() {

  return (

    ReactDOM.render(
      <BrowserRouter> 
        <StoreProvider>
          <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/" component={Home} exact />
              <Route path="/filmes" component={Filmes} exact /> s
              <Route path="/personagens" component={Personagens} exact />
              <Route path="/hqs" component={HQs} exact />
          </Switch>
          </StoreProvider>
      </BrowserRouter>
      , document.getElementById('root'))
      
  )
}

export default Routes;