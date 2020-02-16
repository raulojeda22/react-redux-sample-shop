import React, { Component } from 'react';
import Duck from '../Duck/Duck.js';
import './DuckList.css';

class DuckList extends Component {
    render() {
        return (
            <div id="duckList">
                { this.props.duckList && this.props.duckList.map((duck, index) =>
                    <Duck key={index} duck={duck} />
                )}
            </div>
        )
    }
}

export default DuckList;