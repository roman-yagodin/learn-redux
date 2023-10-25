import { connect } from 'react-redux';
import App from '../App';
import { addBookToBasket } from '../actions/actionCreators';

function mapStateToProps(state) {
    const {dataBook, searchForm} = state;
    return {dataBook, searchForm};
}

function mapDispatchToProps(dispatch) {
    return {
        addBookToBasket: (id) => dispatch(addBookToBasket(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
