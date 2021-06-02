import React from 'react';
import './Logout.css';
import logoutPic from '../../assets/powerbutton.jpeg';

const Logout = (props) => {
    return(
        <div>
            <img id="logout" src={logoutPic} alt="power button"
            onClick={props.clearSession}/>

        </div>
    )
}

export default Logout;