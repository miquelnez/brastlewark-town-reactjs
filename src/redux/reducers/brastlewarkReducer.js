const { FETCH_GNOMES, FETCH_GNOMES_SUCCESS, FETCH_GNOMES_ERROR } = require("../actions");

const initialState = {
    isLoading: false,
    gnomes: [],
    error: ''
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
                isLoading: false,
                gnomes: action.payload,
                error: ''
            }
        case FETCH_GNOMES_ERROR:
            return {
                isLoading: false,
                gnomes: [],
                error: action.payload
            }
        default:
            return state;
    }
};

export default brastlewark_reducer;