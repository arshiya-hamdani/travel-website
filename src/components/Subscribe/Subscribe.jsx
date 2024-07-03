import React, { useEffect } from 'react';
import './Subscribe.css';
import image from '../../Assets/images.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Subscribe() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='subscribecontainer' data-aos="fade-up">
            <div className="subcontainer">
                <img src={image} alt='' data-aos="fade-up" />
            </div>
            <div className="divcontent" data-aos="fade-up">
                <h3>Best way to start your journey</h3>
                <p>
                    We offer personalised itineraries tailored to 
                    individual preferences and interests.
                </p>
                <button className='button'>Start Here</button>
            </div>
        </div>
    );
}

export default Subscribe;
