import React from 'react';
import UserCard from './components/UserCard';
import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      userFollowers: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/daniel-hermansen")
      .then(res => res.json())
      .then(data => this.setState({ userData: data }))
      .catch(err => console.log(err));
  };

  componentDidUpdate() {
    fetch("https://api.github.com/users/daniel-hermansen/followers")
      .then(res => res.json())
      .then(data => this.setState({ userFollowers: data }))
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <UserCard userData = {this.state.userData}/>
        <CardList userFollowers = {this.state.userFollowers}/>
      </div>
    );
  }
}

export default App;
