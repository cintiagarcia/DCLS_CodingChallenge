import React, {Component, component} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { phone as Phone } from './components/Phone';
import PhoneDetails from './components/PhoneDetails';
import AddPhone from './components/AddPhone';
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  state = {
    phones: [],
    phone: null
  }

componentDidMount(){
  axios.get('/api/phones')
  .then(response => {
    this.setState({ 
      phones: response.data
    })
  })
  .catch(err => console.log(err))
}


  render () {
    return (
      <div className="App">
        
        <Navbar />

        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/phone' render={(props) =><Phone phones={this.state.phones} {...props}/> }/>
        <Route exact path='/phone/:id' render={(props) =><PhoneDetails  {...props} /> }/>
        <div className='container'>

        <AddPhone />

        </div>  
        </Switch> 
      </div>
    );
  }
}

export default App;
