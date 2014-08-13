import React from 'react';
import './App.css';

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
        <div className='card-list'>
         {monsters.map(monster => (
          <div className='card-container'>
              <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
          </div>
         ))}
         </div>
      </div>
    );
  }
}

export default App;
