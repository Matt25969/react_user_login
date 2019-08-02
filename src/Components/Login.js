import React, { Component } from 'react';
import _ from 'lodash'
import axios from 'axios'

import '../App.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            log:"Not Logged In"
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();

       axios.get("http://localhost:5000/user/name/"+e.target[0].value+"/"+e.target[1].value).then(res => {
          
                this.setState({
                    log:res.data.Status
                })
        })

    }

render() {
  return (
    <div>
        <form id="LoginForm" onSubmit={this.handleSubmit}>
<input placeholder="username"></input>
<br></br>
<input placeholder="password"></input>
<br></br>
<input type="submit"></input>
</form>
<p id="result">{this.state.log}</p>
    </div>
  );
}
    }
