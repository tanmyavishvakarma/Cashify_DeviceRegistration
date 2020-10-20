import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import M from  'materialize-css/dist/js/materialize.min.js'
import Dashboard from './dashboard/Dashboard';
import Signin from './auth/Signin'
import Signup from './auth/Signup'
import CreateProject from './projects/CreateProject'


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
          <Route exact path="/" component={Dashboard}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/addproject" component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
