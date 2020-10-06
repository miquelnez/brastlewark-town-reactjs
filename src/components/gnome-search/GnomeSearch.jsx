import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGnomes, fetchGnomesError, fetchGnomesSuccess } from '../../redux/actions/brastlewarkActions';
import { initPagination } from '../../redux/actions/paginationActions';

const GnomeSearch = () => {
    const dispatch = useDispatch();
    const [gnome_name, set_gnome_name] = useState('');

    //Is this placed correctly?
    const fetchGnomesRequest = () => {
        dispatch(fetchGnomes());
        getData().then(response => {
            dispatch(fetchGnomesSuccess(response.Brastlewark));
            dispatch(initPagination(response.Brastlewark));
        }).catch(error => {
            dispatch(fetchGnomesError(error));
        });
    }

    const getData = async () => {
        const res = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
        return await res.json();
    }

    return (
        <form noValidate autoComplete="off">
            <Input id="standard-basic" label="Standard"
                value={gnome_name}
                onChange={
                    (event) => {
                        set_gnome_name(event.target.value);
                    }
                }/>
            <Button onClick={
                () => {
                    fetchGnomesRequest()
                }
            }>Search</Button>
        </form>
    );
};

export default GnomeSearch;