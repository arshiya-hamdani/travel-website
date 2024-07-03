import React, { useEffect } from 'react';
import './Destination.css';
import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarDateFill, BsFillCreditCardFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import { FcRating } from 'react-icons/fc';
import Aos from 'aos';
import 'aos/dist/aos.css';

import image1 from '../../Assets/jaipur.jpg';
import image2 from '../../Assets/bluelagoon_iceland.jpg';
import image3 from '../../Assets/borabora_polynesia.jpg';
import image4 from '../../Assets/cappadocia_turkey.jpg';
import image5 from '../../Assets/isleofsky_scotland.jpg';
import image6 from '../../Assets/keukenhofgardens_netherlands.jpg';
import image7 from '../../Assets/lakecomo_italy.jpg';
import image8 from '../../Assets/Northisland_newzealand.jpg';

const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Jaipur',
    location: 'India',
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: 'Blue Lagoon',
    location: 'Iceland',
    rating: 4.1,
  },
  {
    id: 3,
    img: image3,
    name: 'Bora Bora Island',
    location: 'Polynesia',
    rating: 5.2,
  },
  {
    id: 4,
    img: image4,
    name: 'Cappadocia',
    location: 'Turkey',
    rating: 4.8,
  },
  {
    id: 5,
    img: image5,
    name: 'Isle of Skye',
    location: 'Scotland',
    rating: 4.3,
  },
  {
    id: 6,
    img: image6,
    name: 'Keukenhof Gardens',
    location: 'Netherlands',
    rating: 3.9,
  },
  {
    id: 7,
    img: image7,
    name: 'Lake Como',
    location: 'Italy',
    rating: 4.1,
  },
  {
    id: 8,
    img: image8,
    name: 'North Island',
    location: 'New Zealand',
    rating: 4.6,
  },
];

function Destination() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='destination-container' data-aos="fade-up">
      <div className='title'>
        <span className='text'>EXPLORE NOW</span>
        <h3>Find your Dream Destination</h3>
        <p>Fill the fields to find the best spot for your next tour.</p>
      </div>
      <div className='search-field'>
        <div className='input-field'>
          <MdLocationPin className='icon' />
          <input type='text' placeholder='Location' />
        </div>
        <div className='input-field'>
          <BsFillCreditCardFill className='icon' />
          <input type='text' placeholder='Budget' />
        </div>
        <div className='input-field'>
          <BsFillCalendarDateFill className='icon' />
          <input type='text' placeholder='Date' />
        </div>
        <div className='search-btn'>
          <button className='btn-search'>
            <BiSearchAlt className='icon' />
            Search
          </button>
        </div>
      </div>
      <div className='menu'>
        <ul className='flex'>
          <li className='active'>All</li>
          <li>Recommended</li>
          <li>Beach</li>
          <li>Park</li>
          <li>Nature</li>
          <li>Mountains</li>
        </ul>
      </div>
      <div className='destination-grid'>
        {destinations.map((destination) => (
          <div className='single-destination' key={destination.id} data-aos="fade-up">
            <div className='img-div'>
              <img src={destination.img} alt='Destination' data-aos="fade-up" />
              <div className='desc'>
                <span className='name' >{destination.name}</span>
                <p className='flex'>
                  <TiLocation className='icon' />
                  {destination.location}
                </p>
              </div>
              <span className='rating'>
                <FcRating /> {destination.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
