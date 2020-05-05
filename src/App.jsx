import React, { Component } from 'react'
import './App.css'
import { FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
// import Profile from './Profile'

class App extends Component {

  state = {
    query: '',
    artist: null
  }

  search() {
    // console.log('this.state', this.state)
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const BASE_URL = 'https://api.deezer.com/search?'
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist`
    console.log('FETCH_URL', FETCH_URL)
    fetch(proxyurl + FETCH_URL)
      .then(response => response.json())
      // .then(json => console.log('json', json))
      .then(response => {
        // manipulating the json
        const artistAlbums = response.data.map(x =>
          ({
            albumName: x.album.name,
            artistName: x.artist.name
          }));
        console.log('artistAlbums', artistAlbums)
      })
  }

  render() {
    return (
      <div className="App" >
        <div>
          <div className=".App-title">Music Player from App</div>
          <FormGroup>
            <InputGroup>
              <Input
                addon
                type="text"
                placeholder="Search for an artist..."
                value={this.state.query}
                onChange={event => { this.setState({ query: event.target.value }) }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.search()
                  }
                }}
              />
              <InputGroupAddon onClick={() => this.search()}
                addonType="append"
              >
                <FaSearch />
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          {/* <Profile
            artist={this.state.artist}
          /> */}

        </div>
      </div>
    )
  }
}

export default App