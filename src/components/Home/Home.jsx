import React, { useEffect } from 'react';
import './Home.css';
import travelvideo from '../../Assets/video.mp4';
import { AiOutlineSwapRight } from 'react-icons/ai';
import Aos from 'aos';
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  },[]);

  return (
    <div className='home'>
      <div className="videobg">
        <video src={travelvideo} autoPlay loop muted className='video'></video>
      </div>
      <div className='sectiontext'>
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">Discover the world's most adventurous nature, life is so short for a trip</p>
        <button  data-aos="fade-up" className='btn' >
          GET STARTED
          <AiOutlineSwapRight className='icon' />
        </button>
      </div>
      <div className='popularplaces' data-aos="fade-up">
        <div className='content'>
          <h3>Popular Places</h3>
          <div className='images'>
            {/* Your images here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
