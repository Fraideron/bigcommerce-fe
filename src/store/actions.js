import axios from 'axios';
import fetch from 'cross-fetch'
import {ACTION_SELECT_ORDER, FETCH_ORDERS_SUCCESS} from './actionTitles';

export const getOrders = () => {
    return dispatch => {
        return fetch('http://localhost:3003/api/orders')
          .then(response => response.json())
          .then(response => response)
          .then(data => dispatch(receivePosts(data)))
      }
};

function receivePosts(items) {
    let orders = JSON.parse(JSON.stringify(items));
    orders = orders.map(item => {
        item['isChecked'] = false;
        return item;    
    })
    console.log(orders);
    return {
      type: FETCH_ORDERS_SUCCESS,
      payload: orders
    }
}


export const selectOrder = (orders, id) => {
    orders = orders.map((order) => {
        if (order.id === id) {
            order.isChecked = !order.isChecked;
        }
        return order;
    });
    return {
        type: ACTION_SELECT_ORDER,
        payload: orders
    };
};

// function requestOrders(subreddit) {
//   return {
//     type: FETCH_ORDERS_REQUEST,
//     subreddit
//   }
// }

// function receiveOrders(subreddit, json) {
//   return {
//     type: FETCH_ORDERS_SUCCESS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

// export function fetchOrders(subreddit) {
//   return function (dispatch) {
//     dispatch(requestOrders(subreddit))
//     return fetch(`localhost:3003/api/orders`)
//       .then(
//         response => response.json()
//       )
//       .then(json =>
//         dispatch(receiveOrders(subreddit, json))
//       )
//   }
// }