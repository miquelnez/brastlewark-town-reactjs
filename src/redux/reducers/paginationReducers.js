import { GO_TO_PAGE, INIT_PAGINATION } from '../actions/paginationActions';

const initialItemsPerPage = 5;
const initialPage = 0;

const initialState = {
    currentPage: initialPage,
    pageCount: null,
    itemsPerPage: initialItemsPerPage,
    itemsToShow: [],
    items: [],
    itemCount: null
};

const pagination_reducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT_PAGINATION:
            return {
                ...state,
                pageCount: Math.ceil(action.payload.items.length / initialItemsPerPage),
                itemsToShow: action.payload.items.slice(state.currentPage, initialItemsPerPage),
                items: action.payload.items,
                itemCount: action.payload.items.length
            };
        case GO_TO_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                itemsToShow: state.items.slice(
                    action.payload * state.itemsPerPage,
                    action.payload * state.itemsPerPage + initialItemsPerPage
                )
            };
        default:
            return state;
    }
};

export default pagination_reducer;