import React, { Component } from 'react'
import './App.css'
import { FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'

class App extends Component {

  state = {
    query: ''
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className=".App-title">Music Player from App</div>
          <FormGroup>
            <InputGroup>
              <Input
                addon
                type="text"
                placeholder="Search for an artist..."
                query={this.state.query}
                onChange={event => { this.setState({ query: event.target.value }) }}
              />
              <InputGroupAddon
                addonType="append"
              >
                <FaSearch />
              </InputGroupAddon>
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