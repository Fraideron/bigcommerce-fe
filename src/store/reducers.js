import {ACTION_SELECT_ORDER, ACTION_GET_ORDERS, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS} from './actionTitles';

export const initialState = {
    orders : [
        {
            isChecked: false,
            id: 123,
            productName: 'Tooo long product name',
            sku: 'skuuuuu123',
            basePrice: 34.5,
            quantity: 4
        }
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_GET_ORDERS: {
            return { 
                ...state,
                orders: action.payload
            };
        }
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
        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    }

    return state
}
