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
                                            <h2 className="title">L'identité visuelle est un élément essentiel pour les marques, <br />  car elle leur permet de se démarquer  <br /> et d'attirer l'attention des consommateurs.</h2>
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
                                <h2 className="sd-title">Renforcez Votre Identité Visuelle avec un Design Graphique Stratégique</h2>
                                <p className="sd-content">
                                    Votre identité graphique est bien plus qu’une simple esthétique – c’est un levier
                                    stratégique pour capter l’attention, inspirer confiance et différencier votre marque.
                                    Notre service de design graphique transforme vos valeurs et messages en visuels percutants,
                                    mémorables et alignés avec vos objectifs business. Que ce soit pour un rebranding complet,
                                    des supports marketing ou une présence digitale cohérente, nous combinons créativité et
                                    méthodologie pour des résultats tangibles.
                                </p>
                                <br />
                                <p className="sd-content">
                                    Une identité visuelle forte génère des impacts concrets : jusqu’à 80% de mémorisation
                                    accrue (Source : NNGroup) et 3 fois plus d’engagement sur les contenus brandés (HubSpot).
                                    Nos designs ne se contentent pas d’être beaux – ils racontent votre histoire, guident vos
                                    audiences et renforcent votre crédibilité à chaque point de contact. De la palette de
                                    couleurs à la typographie, chaque élément est pensé pour communiquer votre singularité et convertir vos cibles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Notre Processus </h2>
                                <p className="sd-content">Prêt à donner vie à votre identité visuelle ? </p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Audit & Stratégie</h3>
                                    <p className="xb-item--contact">Analyse de votre identité existante et benchmark concurrentiel..</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Direction Artistique</h3>
                                    <p className="xb-item--contact">Création de moodboards et validation de la charte graphique.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Production Créative</h3>
                                    <p className="xb-item--contact">Design des supports print et digitaux (logo, templates, packaging…).</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Livraison</h3>
                                    <p className="xb-item--contact">Remise des fichiers sources et accompagnement pour une utilisation optimale.</p>
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
                                    <p className="sd-content">Un design réussi est invisible : on ne retient que votre message</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Identité Visuelle Cohérente.</li>
                                        <li><img src={sicon} alt="" />Reconnaissance de Marque.</li>
                                        <li><img src={sicon} alt="" />Support Marketing Impactants.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Gain de Temps.</li>
                                        <li><img src={sicon} alt="" />Modernisation de l’Image.</li>
                                        <li><img src={sicon} alt="" />Polyvalence.</li>
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