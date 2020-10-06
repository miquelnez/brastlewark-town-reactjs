import { combineReducers } from 'redux';
import brastlewark_reducer from './brastlewarkReducers';
import pagination_reducer from './paginationReducers';

const rootReducers = combineReducers({
    brastlewark_reducer,
    pagination_reducer
});

export default rootReducers;