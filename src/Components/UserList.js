import React, { Component } from 'react';

import '../App.css';

export default class UserList extends Component {

    constructor(props) {
        super(props);
     
    }

render() {
  return (
    <div>
  {this.props.data.map(item => (<li>{item.username}</li>))}
    </div>
  );
}
    }
