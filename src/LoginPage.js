import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    let navigate = useNavigate(); // Corrected spelling
    let location = useLocation();

    let state = location.state;
    let from = state?.from?.pathname ? state.from.pathname : '/';
    let text = '';
    if (from !== '/') text = <h3>You must login to visit "{from}"</h3>;

    const handleLogin = () => {
        console.log('handleLogin from ', from);
        console.log('handleLogin navigate ', navigate);
        props.onClick(from, navigate);
    };

    return (
        <div>
            {text}
            <button onClick={() => handleLogin()}>Login</button> {/* Added button text */}
        </div>
    );
};

export default LoginPage;
