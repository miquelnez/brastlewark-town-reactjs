export const FETCH_GNOMES = 'FETCH_GNOMES';
export const FETCH_GNOMES_SUCCESS = 'FETCH_GNOMES_SUCCESS';
export const FETCH_GNOMES_ERROR = 'FETCH_GNOMES_ERROR';

export const fetchGnomes = () => {
    return {
        type: FETCH_GNOMES
    }
};

export const fetchGnomesSuccess = (gnomes) => {
    return {
        type: FETCH_GNOMES_SUCCESS,
        payload: gnomes
    }
};

export const fetchGnomesError = (error) => {
    return {
        type: FETCH_GNOMES_ERROR,
        payload: error
    }
};

const fetchGnomesRequest = (response) => {
    return (dispatch) => {
        dispatch(fetchGnomes());
        getData().then(response => {
            dispatch(fetchGnomesSuccess(response.Brastlewark));
        }).catch(error => {
            dispatch(fetchGnomesError(error));
        });
    }
}

const getData = async () => {
    const res = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    return await res.json();
}

export default fetchGnomesRequest;