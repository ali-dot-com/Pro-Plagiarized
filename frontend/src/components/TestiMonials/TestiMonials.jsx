import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../assets/Logo.png';
import './TestiMonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            title: 'Analyse the potential benefits that can be achieved as well as the limiations',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            academicLevel: 'Nursery Prep'
        },
        {
            title: 'Analyse the potential benefits that can be achieved as well as the limiations',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            academicLevel: 'Nursery Prep'
        },
        {
            title: 'Analyse the potential benefits that can be achieved as well as the limiations',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            academicLevel: 'Nursery Prep'
        },
        {
            title: 'Analyse the potential benefits that can be achieved as well as the limiations',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            academicLevel: 'Nursery Prep'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 m-0">
                        <h1 className='text-center fw-bold' style={{fontSize: "3rem"}}>Writing Services Samples</h1>
                        <div className='px-5'>
                            <h6 className='text-center px-5 mt-3'>Our work samples written by our qualified writers, will reflect our work
                            quality and explain why students highly recommend essay company for quality writing services.</h6>
                        </div>
                        
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;