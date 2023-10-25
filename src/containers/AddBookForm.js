import { connect } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import { addBook } from '../actions/actionCreators';

function mapStateToProps(state) {
    const {addBookForm} = state;
    return {...addBookForm};
}

function mapDispatchToProps(dispatch) {
    return {
        add: (book) => dispatch(addBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);