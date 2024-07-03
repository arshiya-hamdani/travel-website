import React, { useEffect } from 'react';
import './Middle.scss';
import Aos from 'aos';
import "aos/dist/aos.css";

function Middle() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // You can adjust the duration as needed
  }, []);

  return (
    <div className='middlesection'>
      <div className="seccontainer">
        <div className="grid">
          <div className="item" data-aos="fade-up">
            <div className="number">
              <h1>10</h1>
            </div>
            <div className="text">
              <p>World of experiences</p>
            </div>
          </div>

          <div className="item" data-aos="fade-up">
            <div className="number">
              <h1>2k+</h1>
            </div>
            <div className="text">
              <p>fine Destinations</p>
            </div>
          </div>
          
          <div className="item" data-aos="fade-up">
            <div className="number">
              <h1>10k+</h1>
            </div>
            <div className="text">
              <p>Customer Reviews</p>
            </div>
          </div>

          <div className="item" data-aos="fade-up">
            <div className="number">
              <h1>4.5k</h1>
            </div>
            <div className="text">
              <p>Overall Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
