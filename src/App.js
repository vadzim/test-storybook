import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>process.env:</p>
        <pre>
          {JSON.stringify(process.env, null, '\t')}
        </pre>
      </div>
    );
  }
}

export default App;
