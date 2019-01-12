import React, { Component } from 'react';
import MovieCard from './MovieCard';
import UserList from './UserList'
import UserDetail from './UserDetail'

class App extends Component {
  render() {
    return (
      <div>
        <h2>User List:</h2>
        <UserList></UserList>
        <hr />
        <h2>User Detail:</h2>
        <UserDetail />
      </div>
    );
  }
}

export default App;
