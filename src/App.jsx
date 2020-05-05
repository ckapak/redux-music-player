import React, { Component } from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className=".App-title">Music Player from App</div>
          <div className="Profile">
            <div>Artist Picture</div>
            <div>Artist Name</div>
          </div>
          <div className="Gallery">Gallery</div>
        </div>
      </div>
    )
  }
}

export default App