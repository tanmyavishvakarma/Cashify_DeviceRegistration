import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import M from  'materialize-css/dist/js/materialize.min.js'
import Dashboard from './dashboard/Dashboard';
class App extends Component{
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
