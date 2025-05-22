import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shape1 from '../../images/shape/line-shape03.png'
import shape2 from '../../images/shape/line-shape04.png'
import shape3 from '../../images/shape/pattern02.png'
import shape4 from '../../images/shape/monitor-shape.png'
import shape5 from '../../images/shape/blur-shape.png'

const RoadmapSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const roadmapData = [
        {
            quarter: "Q-1",
            year: "2018",
            title: "Le studio Waviloid a été fondé",
            content:
                "Waviloid Studio ouvre ses portes à Madagascar avec une équipe de 3 passionnés, installée dans un bureau spartiate aux murs verts douteux et sans fenêtres. Premiers clients, premières créations : des sites web et designs audacieux, malgré les lampes fluorescentes. L’aventure commence.",
        },
        {
            quarter: "Q-2",
            year: "2019",
            title: "Fenêtres sur l’avenir (et enfin de la lumière naturelle !)",
            content:
                "L’équipe passe à 7 talents, et le bureau s’offre un lifting (avec fenêtres !). Nous réalisons 100+ audits SEO, sauvant des clients des griffes de Google Penguin. Premières campagnes virales, premiers sourires de clients satisfaits.",
        },
        {
            quarter: "Q-3",
            year: "2020",
            title: "Top 3 du SEO en France : la consécration",
            content:
                "Classés parmi les 3 meilleures agences SEO, nous passons à 25 collaborateurs. Malgré le confinement, nous boostons des marques avec des stratégies digitales sur-mesure. Le motion design devient notre arme secrète.",
        },
        {
            quarter: "Q-4",
            year: "2021",
            title: "Du local à l’international : l’art sans frontières",
            content:
                "Ouverture de notre pôle marketing international avec des clients en Europe et en Afrique. Lancement de nos ateliers créatifs pour startups. Waviloid n’est plus un secret : nos designs animés font le buzz.\n" +
                "\n",
        },
        {
            quarter: "Q-5",
            year: "2022",
            title: "Prix de l’Agence Créative de l’Année",
            content:
                "Sacrés \"Meilleure Agence Créative\" au Madagascar Digital Awards, nous lançons notre département réalisation vidéo. Tournage de spots TV, podcasts branding, et premières collaborations avec des influenceurs.",
        },
        {
            quarter: "Q-6",
            year: "2023",
            title: "L’intelligence artificielle est notre alliée.",
            content:
                "Intégration de l’IA dans nos processus créatifs (generative design, chatbots sur-mesure). Nos campagnes SMM génèrent +200% d’engagement. L’équipe dépasse 50 membres, et notre bureau a désormais… un baby-foot.",
        },
        {
            quarter: "Q-7",
            year: "2025",
            title: "Waviloid Studio : L’Empire Créatif",
            content:
                "Avec 100+ employés et des clients dans 12 pays, nous inaugurent notre Labs Innovation dédié à la réalité virtuelle. Objectif : réinventer le marketing sensoriel. Votre succès reste notre meilleure récompense.",
        },
    ];

    return (
        <section className="roadmap roadmap-pb pt-130 pb-200 pos-rel" style={{ backgroundColor: "#0F55DC" }}>
            <div className="container">
                <div className="sa-tes_top roadmap-top pos-rel mb-85">
                    <div className="sec-title--two">
                        <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms"><img src="assets/img/icon/process-icon.svg" alt="" />Notre parcours</div>
                        <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Notre parcours 0 à 1300 clients</h2>
                    </div>
                    <div className="sa-tes_button roadmap-button">
                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-angle-left"></i></div>
                        <div className="sa-swiper-btn active swiper-button-next" ref={nextRef}><i className="fal fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="roadmap-slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    speed={400}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    breakpoints={{
                        1600: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    className="raodmap-slider"
                >
                    {roadmapData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="roadmap-item">
                                <div className="xb-item--top">
                                    <img src={shape1} alt="" />
                                    <span className="xb-item--ques">{item.quarter}</span>
                                    <img src={shape2} alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <span className="xb-item--year">{item.year}</span>
                                    <h3 className="xb-item--title">{item.title}</h3>
                                    <p className="xb-item--content">{item.content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>
            <div className="roadmap-shape">
                <div className="shape shape--one"><img src={shape3} alt=""/></div>
                <div className="shape shape--two"><img src={shape4} alt=""/></div>
                <div className="shape shape--three"><img src={shape5} alt=""/></div>
            </div>
        </section>
    );
};

export default RoadmapSlider;
