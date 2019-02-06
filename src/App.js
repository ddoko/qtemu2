import React, { Component } from 'react';
import Home from '../src/view/Home'
import Register from '../src/view/Register'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from '../src/component/Navbar'
import CreateMeetup from './view/CreateMeetup';
import Detail from './view/Detail'
//Reducer
import {Provider} from 'react-redux'
import myStore from '../src/config/Store'
class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar>  </Navbar>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Register}></Route>
            <Route path="/createMeet" component={CreateMeetup}></Route>
            <Route path="/member/:idname" component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
