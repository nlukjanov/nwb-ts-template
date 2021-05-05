import './App.css';

import React from 'react';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App-heading App-flex">
        <h2>
          Welcome to <span className="App-react">React</span>
        </h2>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={require('./react.svg')} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to hot reload your changes.
        </p>
      </div>
    </div>
  );
};

export default App;
