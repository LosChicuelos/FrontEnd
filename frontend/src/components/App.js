import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
            
        <header className="App-header">
          <img src="https://www.rawsonservices.com/wp-content/uploads/2014/05/Save-The-Nature.png" className="App-logo" alt="logos" />
          <h1 className="App-title">Welcomae to React</h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
      
    );
  }
}

export default App;
