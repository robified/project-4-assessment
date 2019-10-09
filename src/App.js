import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: "Button 1"
    };
  }

  handleClick = (value) => {
    this.setState({
      selectedButton: value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            selectedButton={this.state.selectedButton}
            handleClick={this.handleClick}
          />
          
          <Circles 
            selectedButton={this.state.selectedButton}
          />
        </main>
      </div>
    );
  }
}

export default App;