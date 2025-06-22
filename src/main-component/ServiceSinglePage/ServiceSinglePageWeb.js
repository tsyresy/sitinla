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


const ServiceSinglePageWeb = (props) => {

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
                                            <h2 className="title">Site Web sur mésure<br /> UI/UX Optimisé. <br /> Solutions clé en main</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-30">
                                        <div className="sd-right-img pos-rel">
                                            <img src={srImg2} alt="" />
                                            <div className="sd-arrow-shape">
                                                <img className="xbzoominzoomup" src={srImg} alt="" />
                                            </div>
                                        </div>
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
                                <h2 className="sd-title">Développement Web sur Mesure avec UI/UX Optimisé</h2>
                                <p className="sd-content">
                                    Dans un monde où 75% des jugements de crédibilité d'une entreprise se basent sur son site web,
                                    une présence digitale performante n'est plus une option, mais une nécessité.
                                    Notre service de développement web sur mesure combine technologie robuste et
                                    design intuitif pour créer des expériences utilisateur qui convertissent.
                                    Chaque ligne de code et chaque interface sont pensées pour maximiser l'engagement,
                                    tout en respectant les meilleures pratiques SEO et techniques.
                                </p>
                                <br />
                                <p className="sd-content">
                                    Les chiffres parlent d'eux-mêmes :

                                    Jusqu'à 200% d'augmentation des conversions avec une UX optimisée

                                    40% de rebond en moins sur les sites mobiles performants

                                    50% de temps de développement réduit grâce à nos frameworks maison
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Notre Processus </h2>
                                <p className="sd-content">Prêt à transformer votre présence digitale ? </p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Audit & Stratégie</h3>
                                    <p className="xb-item--contact">Analyse de vos besoins, benchmark concurrentiel et définition des KPIs</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Conception UI/UX</h3>
                                    <p className="xb-item--contact">Wireframes, prototypes interactifs et tests utilisateurs</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Développement</h3>
                                    <p className="xb-item--contact">Front-end performant, back-end sécurisé et intégrations API.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Optimisation & Livraison</h3>
                                    <p className="xb-item--contact">Tests cross-devices, formation et documentation technique</p>
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
                                    <h2 className="sd-title">Résultats Clés</h2>
                                    <p className="sd-content">Un site web devrait être votre meilleur commercial - disponible 24/7.:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Site Ultra-Performant : 90+ score Lighthouse</li>
                                        <li><img src={sicon} alt="" />UI/UX Convertisseuse : Parcours utilisateur optimisé</li>
                                        <li><img src={sicon} alt="" />100% Responsive : Adapté à tous les appareils</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />SEO Intégré : Architecture technique optimisée</li>
                                        <li><img src={sicon} alt="" />Sécurité Renforcée : Protocoles avancés</li>
                                        <li><img src={sicon} alt="" />Évolutivité : Architecture modulaire</li>
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
export default ServiceSinglePageWeb;