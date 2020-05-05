import React, { Component } from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className=".App-title">Music Player from App</div>
          <FormGroup>
            <InputGroup>
              <FormControl
                className="seachbar"
                type="text"
                placeholder="Search for an artist"
              />
            </InputGroup>
          </FormGroup>
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