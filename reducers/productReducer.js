import {getProduct} from '../actions'

const INITIAL_STATE = {
    product : [],
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case getProduct : 
            return {product : action.payload}
        default : 
            return state;
    }
}