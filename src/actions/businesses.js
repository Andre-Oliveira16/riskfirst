import { GET_BUSINESSES } from './types';

export const getBusinesses = () => {
    return dispatch => {
        return fetch('https://api.myjson.com/bins/13pqgi')
        .then(response => response.json())
        .then(data => dispatch({ type: GET_BUSINESSES, data }));
    };
};