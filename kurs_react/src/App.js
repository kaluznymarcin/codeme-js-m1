import React from 'react';
import logo from './logo.svg';
import './App.css';
import Currency from './Currency'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function App() {
  return <Provider store={createStore(reducers)}>
    <Router>
        {/* <MyComponent count={50} step={5}>
          <div>
            lol
          </div>
        </MyComponent>
         */}
         <Link to="/">Home Page</Link>
         <Link to="/currency">My List</Link>

         <Switch>
            <Route path='/currency' component={Currency} />
            <Route path='/' component={() => <div>Home Page</div>} />       
         </Switch>
      </Router>
    </Provider>
}

export default App;
