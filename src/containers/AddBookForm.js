import { connect } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import { addBook, changeTitle, changeAuthor, changePrice } from '../actions/actionCreators';

function mapStateToProps(state) {
    const {addBookForm} = state;
    return {...addBookForm};
}

function mapDispatchToProps(dispatch) {
    return {
        add: (book) => dispatch(addBook(book)),
        changeTitle: (title) => dispatch(changeTitle(title)),
        changeAuthor: (author) => dispatch(changeAuthor(author)),
        changePrice: (price) => dispatch(changePrice(price)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);