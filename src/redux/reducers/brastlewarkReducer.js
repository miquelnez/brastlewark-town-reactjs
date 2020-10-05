const { FETCH_GNOMES, FETCH_GNOMES_SUCCESS, FETCH_GNOMES_ERROR } = require("../actions");

const initialState = {
    isLoading: false,
    gnomes: [],
    error: '',
    currentPage: 0,
    itemsPerPage: 30
};

const brastlewark_reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GNOMES:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_GNOMES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                gnomes: action.payload,
                error: ''
            }
        case FETCH_GNOMES_ERROR:
            return {
                ...state,
                isLoading: false,
                gnomes: [],
                error: action.payload
            }
        default:
            return state;
    }
};

export default brastlewark_reducer;