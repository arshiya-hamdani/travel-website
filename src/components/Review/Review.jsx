import React, { useEffect } from 'react';
import './Review.css';
import img from '../../Assets/img.jpg';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import { AiFillStar } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Review() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='reviewcontainer' data-aos="fade-up">
      <div className="seccontainer">
        <div className="textdiv">
          <span className="text">
            FROM OUR CLIENTS
          </span>
          <p>By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.</p>
          <span className="stars" data-aos="fade-up">
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </span>
          <div className="clients" data-aos="fade-up">
            <img src={img1} alt='client images'/>
            <img src={img2} alt='client images'/>
            <img src={img3} alt='client images'/>
            <img src={img4} alt='client images'/>
          </div>
          <div className="imgdiv" data-aos="fade-up">
            <img src={img} alt='image'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
