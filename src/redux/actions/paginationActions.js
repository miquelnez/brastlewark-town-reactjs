export const INIT_PAGINATION = 'INIT_PAGINATION';
export const GO_TO_PAGE = 'GO_TO_PAGE';

export const goToPage = (page) => {
    return {
        type: GO_TO_PAGE,
        payload: page
    }
};

export const initPagination = (items) => {
    return {
        type: INIT_PAGINATION,
        payload: {
            items: items
        }
    };
};