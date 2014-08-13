import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){
    const {monsters} = this.state
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <CardList monsters = {monsters}/>
      </div>
    );
  }
}

export default App;
