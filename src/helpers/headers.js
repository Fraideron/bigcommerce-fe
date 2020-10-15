import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function headers(set_cookie = false) {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (set_cookie) {
        headers['Authorization'] = cookies.get('__session');
    }
    return headers;
}