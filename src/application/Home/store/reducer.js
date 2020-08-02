import * as actionTypes from './constants';

let akeywords = localStorage['hk'] !== undefined ? JSON.parse(localStorage['hk']) : [] 

const defaultState = {
    keywords:akeywords,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.addHK:
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}