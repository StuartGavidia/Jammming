import React from 'react';
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResults } from "../SearchResults/SearchResults"
import { Playlist } from "../Playlist/Playlist"
import Spotify from '../../util/Spotify'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    let songs = this.state.playlistTracks;

    if(songs.find(savedTrack => {
      return savedTrack.id === track.id
    })){
      return
    }
  
    songs.push(track)
    this.setState({
      playlistTracks: songs
    }
    )
  }

  removeTrack(track){
    let songs = this.state.playlistTracks;
    let updatedSongs = songs.filter((song) => {
      return song.id !== track.id
    })
    this.setState({
      playlistTracks: updatedSongs
    })
  }

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(song => song.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: []
      })
    })
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({ searchResults: searchResults })
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
              <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
