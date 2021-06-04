import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

     const [show, handleShow] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () => {
                if(window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
              className='nav__logo'
              src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
              alt='Netflix Logo'
            />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Logo"
            
            />
            
        </div>
    )
}

export default Nav;
