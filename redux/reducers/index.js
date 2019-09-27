import { ADD_SUM, ADD_DATA } from '../constants/action-types';

const initialState = {
    data: [],
    sum: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_DATA) {
        return Object.assign({}, state, {
            data: [
                ...state.data,
                {
                    avatarUrl: action.payload.data[0],
                    bio: action.payload.data[1],
                    email: action.payload.data[2],
                    location: action.payload.data[3],
                    login: action.payload.data[4],
                    name: action.payload.data[5],
                    url: action.payload.data[6]
                }
            ]
        });
    } else if (action.type === ADD_SUM) {
        return Object.assign({}, state, {
            sum: {
                ...state.sum,
                [action.payload.sum[1]]: action.payload.sum[0]
            }
        });
    }
    return state;
}

export default rootReducer;
