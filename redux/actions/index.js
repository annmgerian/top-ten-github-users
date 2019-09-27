import { ADD_DATA, ADD_SUM } from '../constants/action-types';
function addData(payload) {
    // console.log(payload);
    return { type: ADD_DATA, payload };
}

function addSum(payload) {
    return { type: ADD_SUM, payload };
}

export { addSum, addData };
