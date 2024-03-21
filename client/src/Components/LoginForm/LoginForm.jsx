import React from 'react';
import './LoginForm.css';
import { TbUserFilled } from "react-icons/tb";
import { PiLockOpenFill } from "react-icons/pi";
const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required />
                    <TbUserFilled className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required />
                    <PiLockOpenFill className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordarme</label>
                    <a href="#">Has olvidado tu contraseña?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>No tienes una cuenta? <a href="#">Registrar</a></p>
                </div>
            </form>

        </div>
    );
};

export default LoginForm;