import React, { Component } from 'react';
import './App.css';
import KanbanBoardContainer from "./components/KanbanBoardContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <KanbanBoardContainer />
      </div>
    );
  }
}

export default App;
