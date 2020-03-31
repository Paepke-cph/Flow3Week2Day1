import React from 'react';

const Login = ({loggedIn, setLoggedIn}) => {
    if(loggedIn) {
        return(
            <div>
                <h1>Login</h1>
                <h2>Logged In</h2>
                <button onClick={(e) => {setLoggedIn(false);}}>Logout</button>
            </div>
        );
    } else {
    return(
            <div>
                <h1>Login</h1>
                <button onClick={(e) => {setLoggedIn(true);}}>Login</button>
            </div>
        );
    }
};

export default Login;