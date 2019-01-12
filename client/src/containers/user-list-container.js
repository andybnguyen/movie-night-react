import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/select-user';

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}

function mapStateToProps(state) {
    return {
        users: state.users,
        activeUser: state.activeUser,
    };
}

const userListContainers = {
    matchDispatchToProps: matchDispatchToProps,
    mapStateToProps: mapStateToProps,
}
export default userListContainers;