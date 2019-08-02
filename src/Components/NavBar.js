import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import '../App.css';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

render() {
  return (
    <div>
     
        <Link to="/">   Register   </Link>
        <Link to="/Login">Login   </Link>
        <Link to="/UserList">UserList   </Link>

    </div>
  );
}
    }
