import React, { Component } from 'react'
import './App.css'

class Profile extends Component {
  render() {
    console.log('this.props', this.props)
    let artist = { name: '', rank: '' }
    artist = this.props.artist !== null ? this.props.artist : artist

    return (
      <div className="profile">
        <div>{artist.name}</div>
        <div>{artist.rank}</div>
      </div>
    )
  }
}



export default Profile