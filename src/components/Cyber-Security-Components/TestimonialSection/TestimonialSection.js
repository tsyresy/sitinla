import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade } from "react-awesome-reveal";
import brand1 from '../../../images/brand/brd-logo01.png'
import brand2 from '../../../images/brand/brd-logo02.png'
import brand3 from '../../../images/brand/brd-logo03.png'
import brand4 from '../../../images/brand/brd-logo04.png'
import brand5 from '../../../images/brand/brd-logo05.png'
import icon from '../../../images/icon/like-tag.svg'

import tsImg1 from '../../../images/testimonial/cs-tes01.png'
import tsImg2 from '../../../images/testimonial/cs-tes02.png'
import tsImg3 from '../../../images/testimonial/cs-tes03.png'
import tsImg4 from '../../../images/testimonial/cs-tes04.png'
import tsImg5 from '../../../images/testimonial/cs-tes05.png'

import shape1 from '../../../images/shape/linea-bg-shape.png'
import shape2 from '../../../images/shape/world.png'
import shape3 from '../../../images/shape/linear-shape.png'

const customerStories = [
    {
        left: {
            img: tsImg1,
            subTitle: "Avis Clients",
            logo: "assets/img/brand/brd-logo01.png",
            title: "Luminous Website.",
        },
        right: {
            content: "“Waviloid Studio a conçu notre site web avec un soin incroyable, en un temps record ! On est ravis, son design intuitif nous propulse. Merci mille fois !”",
            author: {
                name: "Mike Davis",
                designation: "CTO at Luminous",
            },
            stats: [
                {
                    number: "18 jours",
                    text: "Délai de livraison plus court que prévu",
                },
                {
                    number: "99.8%",
                    text: "Efficace.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg2,
            subTitle: "Avis Clients",
            logo: "assets/img/brand/brd-logo02.png",
            title: "Bitstamp'Motion design.",
        },
        right: {
            content: "“Waviloid a donné vie à notre marque avec un motion design époustouflant ! Leurs animations nous émerveillent, on est tellement reconnaissants. Merci !”",
            author: {
                name: "John Lee",
                designation: "CEO at Bitstamp",
            },
            stats: [
                {
                    number: "7 jours",
                    text: "Temps de livraison moyenne",
                },
                {
                    number: "100%",
                    text: "Elle est complètement parfaite.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg3,
            subTitle: "Avis Clients",
            logo: "assets/img/brand/brd-logo03.png",
            title: "Santander boosts cybersecurity.",
        },
        right: {
            content: "“Le montage vidéo de Waviloid nous a touchés en plein cœur ! Leur talent transforme nos idées en vidéos vibrantes. Un grand merci !”",
            author: {
                name: "Sophia Turner",
                designation: "Founder at Santander",
            },
            stats: [
                {
                    number: "Short Reels",
                    text: "Contenu dynamique et moderne.",
                },
                {
                    number: "100%",
                    text: "Rentable",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg4,
            subTitle: "Avis Clients",
            logo: "assets/img/brand/brd-logo04.png",
            title: "Santander teasing vidéo.",
        },
        right: {
            content: "“Le montage vidéo de Waviloid nous a touchés en plein cœur ! Leur talent transforme nos idées en vidéos vibrantes. Un grand merci !”",
            author: {
                name: "Laura Chen",
                designation: "Founder at Santander",
            },
            stats: [
                {
                    number: "15 min",
                    text: "La durée d'une belle vidéo corporate",
                },
                {
                    number: "99.9%",
                    text: "Nos auditeurs deviennent le plus souvent des clients.",
                },
            ],
        },
    },
    {
        left: {
            img: tsImg5,
            subTitle: "Avis Clients",
            logo: "assets/img/brand/brd-logo05.png",
            title: "Madrid Safeguards Against Cyber.",
        },
        right: {
            content: "“Waviloid a boosté notre visibilité avec des campagnes SEO et ADS incroyables ! On est aux anges, merci pour ce succès !”",
            author: {
                name: "Sophia Turner",
                designation: "Founder at Madrid",
            },
            stats: [
                {
                    number: "12 Heures",
                    text: "leur suffit pour trouver les failles dans notre site.",
                },
                {
                    number: "97.7%",
                    text: "Référencer sûrement et correctement.",
                },
            ],
        },
    },
];


const TestimonialSection = (props) => {


    const sliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 640,
                settings: {
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 420,
                settings: {
                    centerPadding: "20px",
                },
            },
        ],
        afterChange: (currentSlide) => {
            navSliderRef.current.slickGoTo(currentSlide);
        },
    };

    const navSliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        beforeChange: (_, next) => {
            const slides = document.querySelectorAll(".cs-testimonial-slider-nav .slick-slide");
            slides.forEach((slide) => slide.classList.remove("is-active"));
            slides[next]?.classList.add("is-active");
        },
    };

    const handleNavClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <section className="testimonial pt-160 pos-rel z-1">
            <div className="container">
                <div className="cs-tes_wrap">
                    <div className="sec-title--two sec-title--three text-center mb-175">
                        <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <span className="sub-title wow fadeInDown" data-wow-duration="600ms"><img src={icon} alt="" /><span>Témoignages clients</span></span>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                            <div>
                                <h2 className="title wow fadeInDown" data-wow-duration="600ms">Nos incroyables clients..</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="cs-tes-content">
                        <Slider ref={sliderRef} {...mainSliderSettings} className="cs-testimonial-slider">
                            {customerStories.map((story, index) => (
                                <div className="cs-tes-item" key={index}>
                                    <div className="xb-left-item">
                                        <div className="xb-item--img">
                                            <img src={story.left.img} alt="" />
                                        </div>
                                        <div className="xb-item--header">
                                            <span className="xb-item--sub-title">{story.left.subTitle}</span>
                                            <div className="xb-item--logo">
                                                <img src={story.left.logo} alt="" />
                                            </div>
                                            <h2 className="xb-item--title">{story.left.title}</h2>
                                        </div>
                                    </div>
                                    <div className="xb-right-item">
                                        <p className="xb-item--content">{story.right.content}</p>
                                        <div className="xb-item--author">
                                            <span className="xb-item--name">{story.right.author.name}</span>
                                            <span className="xb-item--desig">{story.right.author.designation}</span>
                                        </div>
                                        <div className="xb-item--holder ul_li">
                                            {story.right.stats.map((stat, statIndex) => (
                                                <div className="xb-item--time" key={statIndex}>
                                                    <span className="xb-item--number">{stat.number}</span>
                                                    <span className="xb-item--text">{stat.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                    <div className="cs-bran-nav">
                        <div className="barnd-logo cs-brand-logo">
                            <Slider
                                ref={navSliderRef}
                                {...navSliderSettings}
                                className="cs-testimonial-slider-nav"
                                beforeChange={(current, next) => {
                                    const slides = document.querySelectorAll(".cs-testimonial-slider-nav .slick-slide");
                                    slides.forEach((slide) => slide.classList.remove("is-active"));
                                    slides[next]?.classList.add("is-active");
                                }}
                            >
                                <div className="brand-items" onClick={() => handleNavClick(0)}>
                                    <div className="xb-img">
                                        <img src={brand1} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(1)}>
                                    <div className="xb-img">
                                        <img src={brand2} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(2)}>
                                    <div className="xb-img">
                                        <img src={brand5} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(3)}>
                                    <div className="xb-img">
                                        <img src={brand3} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(4)}>
                                    <div className="xb-img">
                                        <img src={brand4} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                                <div className="brand-items" onClick={() => handleNavClick(5)}>
                                    <div className="xb-img">
                                        <img src={brand1} alt="" />
                                    </div>
                                    <div className="xb-line"></div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs-tes-shape">
                <div className="shape shape--one"><img src={shape1} alt="" /></div>
                <div className="shape shape--two"><img className="world" src={shape2} alt="" /></div>
                <div className="shape shape--three"><img src={shape3} alt="" /></div>
            </div>
        </section>
    );
}

export default TestimonialSection;