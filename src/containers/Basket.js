import { connect } from 'react-redux';
import Basket from '../components/Basket';
import { removeBookFromBasket } from '../actions/actionCreators';

function mapStateToProps(state) {
    const {items, dataBook} = state;
    return {items, dataBook};
}

function mapDispatchToProps(dispatch) {
    return {
        remove: (id) => dispatch(removeBookFromBasket(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);