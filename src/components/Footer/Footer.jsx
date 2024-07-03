import React, { useEffect } from 'react';
import './Footer.scss';
import { BiLogoMediumOld } from 'react-icons/bi';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='footercontainer' data-aos="fade-up">
            <div className="seccontainer">
                <div className="logodiv">
                    <div className="footerlogo" data-aos="fade-up">
                        <BiLogoMediumOld className='icon'/>
                        <span>OU-Trips</span>
                    </div>
                    <div className="socialicons" data-aos="fade-up">
                        <ImFacebook className='icon'/>
                        <BsTwitter className='icon'/>
                        <AiFillInstagram className='icon'/>
                    </div>
                </div>
                <div className="links" data-aos="fade-up">
                    <span className="linktitle">Information</span>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Explore</a></li>
                        <li><a href='#'>Travel</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </div>
                <div className="links" data-aos="fade-up">
                    <span className="linktitle">Helpful Links</span>
                    <ul>
                        <li><a href='#'>Destination</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Travel & Condition</a></li>
                        <li><a href='#'>Privacy</a></li>
                    </ul>
                </div>
                <div className="contact" data-aos="fade-up">
                    <span className='linktitle'>Contact Details</span>
                    <span className='phone'>+651 125 3212</span>
                    <span className='email'>Outrips@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
