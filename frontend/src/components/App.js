import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from "./common/PrivateRoute";



import Header from './layout/Header'
import Dashboard from './sedes/Dashboard'

import Login from "./accounts/Login";
import Register from "./accounts/Register";


import { Provider } from "react-redux"
import store from "../store"
import { loadUser } from '../actions/auth'



class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
     }

    render(){
        return(
        <Provider store={store}>    
           <Router>
                    <Fragment>
                    <Header/>
                    
                           <div  className="container">
                             <Switch> 
                              
                              <PrivateRoute exact path="/" component={Dashboard} />
                              <Route exact path="/register" component={Register} />
                              <Route exact path="/login" component={Login} /> 
                             
                             </Switch>                         
                          </div>
                    
                    </Fragment>
                    </Router>
                
        </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))