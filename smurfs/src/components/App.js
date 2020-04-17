import React, { Component } from "react";
import "./App.css";

//import List component
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! </h1>
        <List />
      </div>
    );
  }
}

export default App;
