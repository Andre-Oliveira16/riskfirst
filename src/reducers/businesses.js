import { GET_BUSINESSES } from '../actions/types';

const initialState = {
    clients: [],
};

const businessesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BUSINESSES:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}

export default businessesReducer;