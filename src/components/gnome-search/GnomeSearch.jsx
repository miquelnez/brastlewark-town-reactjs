import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchGnomesRequest from '../../redux/actions';

const GnomeSearch = () => {
    const dispatch = useDispatch();
    const [gnome_name, set_gnome_name] = useState('');

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
                    dispatch(fetchGnomesRequest())
                }
            }>Search</Button>
        </form>
    );
};

export default GnomeSearch;