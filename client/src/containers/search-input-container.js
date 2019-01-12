import { bindActionCreators } from 'redux';
import { searchMovie } from '../actions/search-input';

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ searchMovie: searchMovie }, dispatch)
}

function mapStateToProps(state) {
    return {
        input: state.searchInput
    };
}

const searchInputContainers = {
    matchDispatchToProps: matchDispatchToProps,
    mapStateToProps: mapStateToProps,
}
export default searchInputContainers;