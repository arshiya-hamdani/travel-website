import React, { useState, useEffect } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import './Questions.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Questions() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [visibleIndex, setVisibleIndex] = useState(null); 
    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const questions = [
        {
            title: "What are the top tourist attractions in our destination?",
            content: "Some of the top tourist attractions include the historic landmarks like [Landmark 1], the beautiful beaches such as [Beach Name], and the vibrant nightlife scene in [Nightlife District]. Each offers unique experiences and sights to explore."
        },
        {
            title: "What transportation options are available?",
            content: "There are various transportation options available, including public buses, taxis, rental cars, and rideshare services. Additionally, many attractions are within walking distance."
        },
        {
            title: "How can I book accommodations?",
            content: "You can book accommodations through our website or other online booking platforms. We offer a variety of options, including hotels, hostels, and vacation rentals, to suit your preferences and budget."
        }
    ];

    return (
        <div className='questions-container' data-aos="fade-up">
            <div className="heading">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="container">
                {questions.map((question, index) => (
                    <div key={index} className={`question ${visibleIndex === index ? 'active' : ''}`} >
                        <div
                            className={`title ${visibleIndex === index ? 'active-title' : ''}`}
                            onClick={() => toggleVisibility(index)}>
                            {question.title}
                            <span>
                                {visibleIndex === index ? <BsArrowUpCircle className='icon' /> : <BsArrowDownCircle className='icon' />}
                            </span>
                        </div>
                        {visibleIndex === index && (
                            <p className='answer'>{question.content}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="form" data-aos="fade-up">
                <div className="heading">
                    <h3>Do you have any specific questions?</h3>
                    <p>Please fill the form below and our dedicated team will get in touch with you as soon as possible.</p>
                </div>
                <div className="form-content">
                    <input type='email' placeholder='Enter email address' />
                    <textarea placeholder='Enter your question here' />
                    <button className='btn'>Submit Inquiry</button>
                </div>
            </div>
        </div>
    );
}

export default Questions;
