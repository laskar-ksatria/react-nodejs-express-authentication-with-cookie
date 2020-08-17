import { SET_ISLOGIN, SET_USER } from './type';

const initialState = {
    user: null,
    isLogin: false,
}

const reducer = ((state = initialState, action) => {
    let { type, data } = action;

    switch(type) {
        case SET_ISLOGIN:
            return {...state, isLogin: data};
        case SET_USER:
            return {...state, user: data}
        default:
            return state;
    }
});

export default reducer;