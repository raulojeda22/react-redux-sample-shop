import React, { Component } from 'react';
import Duck from '../Duck/Duck.js';
import './DuckList.css';

class DuckList extends Component {
    render() {
        return (
            <div id="duckList">
                { this.props.duckList && this.props.duckList.map((duck, index) => // Only goes through each duck on the list if the list isn't undefined
                    <Duck key={index} duck={duck} /> //Use of props
                )}
            </div>
        )
    }
}

export default DuckList;