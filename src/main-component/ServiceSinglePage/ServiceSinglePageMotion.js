import React, { Fragment, useState } from 'react';
import Services from '../../api/service'
import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Bg from '../../images/bg/page_bg01.jpg'
import icon from '../../images/icon/ser-01.svg'
import srImg from '../../images/shape/brd_shape.png'
import srImg2 from '../../images/hero/sd-img.png'
import vImg from '../../images/video/img03.jpg'
import vImg2 from '../../images/video/polygon02.png'
import sImg1 from '../../images/icon/sd-icon01.svg'
import sImg2 from '../../images/icon/sd-icon02.svg'
import sImg3 from '../../images/icon/sd-icon03.svg'
import sImg4 from '../../images/icon/sd-icon04.svg'
import shape from '../../images/shape/sd-shape.png'
import sicon from '../../images/icon/check-icon.svg'


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="sco_agency">
                <Header4 />
                <main className="page_content service-single-page">
                    <section className="page-title  pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                        <div className="container">
                            <div className="page-title-wrap sd-title-wrap">
                                <div className="row mt-none-30 align-items-end">
                                    <div className="col-lg-9 mt-30">
                                        <div className="page-title-box">
                                            <span className="sub-title"><img src={icon} alt="" /> {ServiceDetails.title} Services</span>
                                            <h2 className="title">Et oui ! sans plus tarder.<br /> Des animations hypnotisantes, <br /> des messages qui restent.</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-30">
                                        <div className="sd-right-img pos-rel">
                                            <img src={srImg2} alt="" />
                                            <div className="sd-arrow-shape">
                                                <img className="xbzoominzoomup" src={srImg} alt="" />
                                            </div>
                                        </div>Résultats Clés de Notre Motion Design
                                    </div>
                                </div>
                            </div>
                        </div>
             Waviloid Studio       </section>
                    <div className="video pt-70 pb-65">
                        <div className="container">
                            <div className="xb-video sd-video pos-rel">
                                <img src={vImg} alt="" />
                                <button className="popup-video btn-video" onClick={() => setOpen(true)}><img src={vImg2} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="sd-ser-content_wrap pb-110">
                        <div className="container">
                            <div className="sd-ser-content">
                                <h2 className="sd-title">Dynamisez Votre Marque avec un Motion Design Perfectionné</h2>
                                <p className="sd-content">
                                    Dans un paysage numérique saturé, le Motion Design est l’arme ultime pour capter l’attention,
                                    renforcer l’identité de votre marque et transmettre des messages complexes avec fluidité.
                                    Exploité dans les vidéos explicatives, les réseaux sociaux ou les publicités, il transforme
                                    vos idées en expériences visuelles mémorables, boostant l’engagement et la conversion.
                                </p>
                                <br />
                                <p className="sd-content">
                                    En misant sur des animations sur-mesure et stratégiques, vous vous démarquez de la concurrence,
                                    cultivez l’émotion auprès de votre audience et gagnez en crédibilité.
                                    Une approche qui allie créativité et performance, pour des résultats tangibles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Notre Processus</h2>
                                <p className="sd-content">Nous commençons par analyser vos besoins pour créer une stratégie
                                    sur-mesure, puis concevons un storyboard qui capture votre identité. Nos experts animent
                                    ensuite votre projet avec des techniques professionnelles, avant de vous livrer des fichiers
                                    optimisés pour tous vos canaux.</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Conseils & Stratégies </h3>
                                    <p className="xb-item--contact">On définit ensemble vos objectifs et votre identité visuelle.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Conception & Storyboard</h3>
                                    <p className="xb-item--contact">Création du storyboard et validation du style.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Animation & Production</h3>
                                    <p className="xb-item--contact">Réalisation technique avec des outils professionnels.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Livraison</h3>
                                    <p className="xb-item--contact">Remise des fichiers optimisés pour tous vos supports.</p>
                                    <span className="xb-item--number">04</span>
                                </div>
                                <div className="sd-shape"><img src={shape} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-service_wrap pt-115 pb-130">
                        <div className="container">
                            <div className="sd-ser-outcome">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Résultats Clés de Notre Motion Design</h2>
                                    <p className="sd-content">Découvrez les 6 avantages stratégiques de notre expertise en Motion Design pour les entreprises ambitieuses :</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Booster l'Engagement</li>
                                        <li><img src={sicon} alt="" />Simplifier les Messages Complexes</li>
                                        <li><img src={sicon} alt="" />Renforcer l'Identité de Marque </li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Augmenter les Taux de Conversion</li>
                                        <li><img src={sicon} alt="" />Adapter à Tous les Supports</li>
                                        <li><img src={sicon} alt="" />Développer un Avantage Concurrentiel</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ServiceSinglePage;