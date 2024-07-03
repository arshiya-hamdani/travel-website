import React, { useEffect } from 'react';
import './Portfolio.css';
import icon1 from '../../Assets/protection.png';
import icon2 from '../../Assets/destinations.png';
import icon3 from '../../Assets/customer.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const portfolioItems = [
    {
      icon: icon1,
      title: 'Safety and Support',
      description:
        'We take proactive steps to prioritize your safety at every stage of your journey. From rigorous sanitation protocols to carefully vetted accommodations and transportation providers',
    },
    {
      icon: icon2,
      title: 'Diverse Range of Destinations',
      description:
        'We offer a diverse range of destinations to suit every traveler\'s preferences. From exotic beach getaways to adventurous mountain expeditions, we have it all.',
    },
    {
      icon: icon3,
      title: '24x7 Customer Support',
      description:
        'Our dedicated customer support team is available round the clock to assist you with any queries or concerns you may have during your journey. Your satisfaction is our top priority.',
    },
  ];

  return (
    <div className="portfoliosec" data-aos="fade-up">
      <div className="seccontainer">
        <div className="leftcontent">
          <div className="heading">
            <h3>Why should you choose us</h3>
            <p>We have extensive knowledge and experience in the travel industry</p>
          </div>
          <div className="grid">
            {portfolioItems.map((item, index) => (
              <div key={index} className="singleportfolio" data-aos="fade-up">
                <div className="icondiv">
                  <img src={item.icon} alt="Icon image" />
                </div>
                <div className="infor">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
