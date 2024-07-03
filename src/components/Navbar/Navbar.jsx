import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showNavbar = () => {
        setNavBar(true);
    };

    const removeNavbar = () => {
        setNavBar(false);
    };

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logodiv">
                <BiLogoMediumOld className="icon" />
                <span>OU-Trips</span>
            </div>
            <div className={`menu ${navBar ? 'shownavbar' : ''}`}>
                <AiFillCloseCircle className='icon closeicon' onClick={removeNavbar} />
                <ul>
                    <li className='nav-list'>Destination</li>
                    <li className='nav-list'>About Us</li>
                    <li className='nav-list'>Testimonial</li>
                    <li className='nav-list'>Gallery</li>
                </ul>
            </div>
            <button className='signupbtn'>Sign Up</button>
            <PiDotsNineBold className='icon menuicon' onClick={showNavbar} />
        </div>
    );
};

export default Navbar;
