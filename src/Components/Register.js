import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import '../App.css';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            error:{
                username:"",
                email:""
            }
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();

        let newUser = {
            username:e.target[0].value,
            email:e.target[1].value,
            password:e.target[2].value,
            password2:e.target[3].value
        }

        axios.post("http://localhost:5000/user/createuser",newUser).then(res => {


        this.setState({
            error:res.data
        })

        console.log(res)

            this.props.onLoad()
        
        }).catch(err => {
        console.log(err)
            
           
        })

    }

render() {
  return (
    <div>
        
        <form id="RegisterForm" onSubmit={this.handleSubmit}>
<input placeholder="username"></input>
<br></br>
<input placeholder="email"></input>
<br></br>
<input placeholder="password"></input>
<br></br>
<input placeholder="password2"></input>
<br></br>
<input type="submit"></input>
</form>
<p id="usernameError">{this.state.error.username}</p>
<p id="emailError">{this.state.error.email}</p>
<p>{this.state.error.password}</p>
<p>{this.state.error.password2}</p>
    </div>
  );
}
    }
