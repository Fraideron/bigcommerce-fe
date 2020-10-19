import fetch from 'cross-fetch'
import headers from '../helpers/headers';
import {
    ACTION_SELECT_ORDER,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_REQUEST,
    SEND_ORDERS_ERROR,
    SEND_ORDERS_SUCCESS
} from './actionTitles';

const DOMAIN = 'https://ea340be67fae.ngrok.io';
export const sendOrders = (orders) => {
    return dispatch => {
        dispatch(sendOrdersError(orders));
        const selectedOrders = orders.filter(o => o.isChecked);
        sendPostOrdersRequest(selectedOrders, dispatch);
    }
};

async function sendPostOrdersRequest(orders, dispatch) {
    try {
        const response = await fetch(`${DOMAIN}/api/orders`, {
            method: 'POST',
            body: JSON.stringify({ orders }),
            headers: headers(true)
        });
        const json = await response.json();
        return {
            type: SEND_ORDERS_SUCCESS,
            payload: json.data
        };
    } catch (error) {
        dispatch(sendOrdersError());
    };
}

function sendOrdersError() {
    return {
        type: SEND_ORDERS_ERROR,
        payload: []
    };
}


export const getOrders = (orders) => {
    console.log('before get orders', orders);

    return (dispatch) => {
        console.log('get orders', orders);
        dispatch(fetchOrdersRequest(orders));
        return fetch(`${DOMAIN}/api/orders`, {
                method: 'GET',
                headers: headers(true)
            })
            .then(response => response.json())
            .then(data => dispatch(fetchOrdersSuccess(data)))
            .catch(err => dispatch(fetchOrdersError(err)))
    }
};

function fetchOrdersSuccess(items) {
    console.log(items);
    let orders = JSON.parse(JSON.stringify(items));
    orders = orders.map(item => {
        item['isChecked'] = false;
        return item;
    });
    console.log('orders', orders);

    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

function fetchOrdersError(err) {
    console.log('Error -> ', err);
    return {
        type: FETCH_ORDERS_ERROR,
        payload: []
    };
}

function fetchOrdersRequest(orders) {
    return {
        type: FETCH_ORDERS_REQUEST,
        payload: orders
    };
}

export const selectOrder = (orders, name) => {
    console.log(orders);
    orders = orders.map((order) => {
        const tempName = order.productName.toLowerCase();
        if (tempName === name.toLowerCase()) {
            order.isChecked = !order.isChecked;
        }
        return order;
    });
    return {
        type: ACTION_SELECT_ORDER,
        payload: orders
    };
};