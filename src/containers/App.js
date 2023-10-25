import { connect } from 'react-redux';
import App from '../App';

function mapStateToProps(state) {
    const {dataBook} = state;
    return {dataBook};
}

export default connect(mapStateToProps)(App);
