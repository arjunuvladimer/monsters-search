import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <div className='card-list'>
        <div className='card-container'>
          <img alt='monster' src='https://robohash.org/1?set=set2&size=180x180'/>
          <h2>Monster Name</h2>
          <p>Monster Email</p>
        </div>
      </div>
    </div>
  );
}

export default App;
