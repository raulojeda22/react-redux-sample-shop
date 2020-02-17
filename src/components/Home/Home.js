import React, { Component } from 'react';
import { duckActions } from '../../actions';
import { connect } from 'react-redux';
import DuckList from '../DuckList/DuckList';

class Home extends Component {
    constructor(params) {
        super(params);
        this.props.list();
    }
    render() {
        return (
            <div id="content">
                <DuckList duckList={this.props.duckList} />
            </div>
        )
    }
}

function mapState(state) {
    const { alert, duck } = state;
    const { list } = duck;
    const { duckList } = state.duck;
    return { alert, list, duckList };
}

const actionCreators = {
    list: duckActions.list
};


const connectedHome = connect(mapState, actionCreators)(Home)
export default connectedHome;
