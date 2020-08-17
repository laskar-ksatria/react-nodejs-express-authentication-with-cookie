import axios from 'axios';
import { SET_ISLOGIN, SET_USER } from './type'


const baseUrl = 'http://localhost:3033';

export const USERLOGIN = (dispatch,data, cb) => {
    axios({
        url: `${baseUrl}/users/login`,
        method: 'POST',
        withCredentials: true,
        data,
    })
    .then(({data}) => {
        dispatch({type: SET_USER, data: data.user.email});
        dispatch({type: SET_ISLOGIN, data: true});
        alert(data.message);
        cb();
    })
    .catch(err => {
        console.log(err);
    })
};

export const USERLOGOUT = (dispatch) => {
    axios({
        url: `${baseUrl}/users/logout`,
        method: 'GET',
        withCredentials: true,
    })
    .then(({data}) => {
        alert(data.message);
        dispatch({type: SET_ISLOGIN, data: false});
    })
    .catch(err => {
        console.log(err);
    })
};

export const CHECKAUTH = (dispatch, cb) => {
    axios({
        url: `${baseUrl}/users/checkauth`,
        method: 'GET',
        withCredentials: true,
    })
    .then(({data}) => {
        dispatch({type: SET_ISLOGIN, data: true});
        dispatch({type: SET_USER, data: data.user});
        cb();
    })
    .catch(err => {
        dispatch({type: SET_ISLOGIN, data: false});
        cb();
    })
}