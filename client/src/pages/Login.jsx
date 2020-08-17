import React from 'react';
import { USERLOGIN } from '../stores';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Login() {

    let history = useHistory();
    let dispatch = useDispatch();
    
    const [state, setState] = React.useState({email: "", password: ""});

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const handleClick = () => {
        let email = state.email.trim();
        if (email) {
            USERLOGIN(dispatch,state, () => history.push("/"));
        }
    };
    
    return (
        <div>
            <h2 style={{fontStyle: "underline"}}>Login</h2>
            <input name="email" onChange={handleChange} placeholder="Email"  />
            <br />
            <input name="password" onChange={handleChange}  placeholder="Password" style={{marginTop: '10px'}} />
            <br />
            <button onClick={handleClick} type="button" style={{marginTop: '10px'}}>Login</button>
            <br />
        </div>
    )
};

export default Login
