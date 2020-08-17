import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USERLOGOUT } from '../stores'

function Main() {

    let { user } = useSelector(state => state.userReducer);
    let dispatch = useDispatch();

    const handleClick = () => {
        USERLOGOUT(dispatch);
    }

    return (
        <div>
            <h1>This is main page after login</h1>
            <h5>{user}</h5>
            <button onClick={handleClick} type="button">Logout</button>
        </div>
    )
}

export default Main
