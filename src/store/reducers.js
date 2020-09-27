import {ACTION_SELECT_ORDER, 
        FETCH_ORDERS_REQUEST, 
        FETCH_ORDERS_SUCCESS,
        FETCH_ORDERS_ERROR, 
        SEND_ORDERS_REQUEST,
        SEND_ORDERS_SUCCESS,
        SEND_ORDERS_ERROR} from './actionTitles';

export const initialState = {
    orders : []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SELECT_ORDER: {
            return { 
                ...state,
                orders: action.payload
            };
        }
        case FETCH_ORDERS_REQUEST: {
            return { 
                ...state,
                orders: action.payload
            };
        }
        case FETCH_ORDERS_SUCCESS: {
            return { 
                ...state,
                orders: action.payload
            };
        }
        case FETCH_ORDERS_ERROR: {
            return { 
                ...state,
                orders: action.payload
            };
        }
        case SEND_ORDERS_REQUEST: {
            return { 
                ...state,
                orders: action.payload
            };
        }
        case SEND_ORDERS_SUCCESS: {
            return { 
                ...state,
                orders: action.payload
            };
        }
        case SEND_ORDERS_ERROR: {
            return { 
                ...state,
                orders: action.payload
            };
        }
    
        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    }

    return state
}
