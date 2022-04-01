import React from 'react'
import { Track } from '../Track/Track'
import './TrackList.css'

export class TrackList extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <Track isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} onAdd={this.props.onAdd} key={track.id} track={track} />
                })}
            </div>
        )
    }
}