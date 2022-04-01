import React from 'react'
import './Playlist.css'
import { TrackList } from "../TrackList/TrackList"

export class Playlist extends React.Component {

    constructor(props){
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(e){
        const { value } = e.target
        this.props.onNameChange(value)
    }

    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue='New PlayList'/>
                <TrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks}/>
                <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}