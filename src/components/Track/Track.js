import React from 'react'

export class Track extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isRemoval: this.props.isRemoval
        }

        this.renderAction = this.renderAction.bind(this)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }

    renderAction() {
        //true will be replaces with isRemoval
        if(this.state.isRemoval){
            return <button onClick={this.removeTrack} className="Track-action">-</button>
        } else {
            return <button onClick={this.addTrack} className="Track-action">+</button>
        }
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist}, {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}