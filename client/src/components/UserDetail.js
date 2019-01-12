import React, { Component } from 'react';
import { connect } from 'react-redux';
import userListContainers from '../containers/user-list-container';

const { mapStateToProps, matchDispatchToProps } = userListContainers;

class UserDetail extends Component {

    render() {
        if (!this.props.activeUser) {
            return (
                <div>Select User...</div>
            )
        }
        return (
            <div>
                <img src={this.props.activeUser.img} />
                <h2>{this.props.activeUser.name}</h2>
                <h3>{this.props.activeUser.age}</h3>
                <h3>{this.props.activeUser.description}</h3>
            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);