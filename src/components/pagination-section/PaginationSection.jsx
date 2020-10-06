import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { goToPage } from '../../redux/actions/paginationActions';
import { useDispatch } from 'react-redux';

const PaginationSection = () => {
    const pagination = useSelector((state) => state.pagination_reducer);
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();


    const handleChange = (event, value) => {
        setPage(value);
        dispatch(goToPage(value));
    };

    return(
        <>
            <Typography>{page} of {pagination.pageCount}</Typography>
            <Pagination 
                count={ Math.round(pagination.itemCount / pagination.itemsPerPage) }
                page={page}
                onChange={handleChange}
            />
        </>
    );
}

export default PaginationSection;