import React, { Component } from 'react';
import { connect } from 'react-redux';
import userListContainers from '../containers/user-list-container';

const { mapStateToProps, matchDispatchToProps } = userListContainers

class UserList extends Component {
    createListItems() {
        return this.props.users.map(user => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.name}
                </li>
            )
        });
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);