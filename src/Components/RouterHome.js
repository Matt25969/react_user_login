import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Register from './Register'
import Login from './Login'
import UserList from './UserList'

import '../App.css';
import NavBar from './NavBar';

export default class RouterHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount = () => {
      this.onLoad()
    }

    onLoad = () => {

axios.get("http://localhost:5000/user/all").then(res =>
{
  this.setState({
    data:res.data
  })
}
 
)
    }

    handleClick = (e) => {
        this.setState({
            text:e.target.value
        })
    }


render() {
  return (
    <div>
      <Router>
      
            <NavBar />
            
            <Route exact path="/" render={() => <Register onLoad={this.onLoad}/>} />
            <Route path="/Login" render={() => <Login data={this.state.data}/>} />
            <Route path="/UserList" render={() => <UserList data={this.state.data}/>} />
        
        
    </Router> 


    </div>
  );
}
    }
