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
                                            <h2 className="title">Marketing Digital<br /> Services SEO & marketing <br /> pour booster votre présence</h2>
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
                                <h2 className="sd-title">Boostez Votre Visibilité avec Notre Stratégie Marketing</h2>
                                <p className="sd-content">
                                    Dans un environnement digital où 73% des acheteurs B2B commencent leur parcours par
                                    une recherche en ligne*, une présence marketing optimisée n'est plus optionnelle –
                                    c'est un impératif stratégique. Notre service complet de Marketing Digital &
                                    Ads combine data, créativité et technologie pour générer des leads qualifiés et maximiser votre ROI.
                                </p>
                                <br />
                                <p className="sd-content">
                                    Pourquoi ça marche ?

                                    Jusqu'à 300% de ROI sur les campagnes bien optimisées**

                                    Coût par acquisition réduit de 40% grâce à notre approche data-driven***

                                    Audiences hyper-ciblées via nos modèles prédictifs maison
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Notre Processus</h2>
                                <p className="sd-content">Prêt à transformer votre acquisition client ? Allons-y</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Audit Stratégique</h3>
                                    <p className="xb-item--contact">Analyse de votre marché, concurrence et performance actuelle</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Plan Personnalisé</h3>
                                    <p className="xb-item--contact">Définition des canaux prioritaires (SEA, social ads, display) et KPI</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Exécution</h3>
                                    <p className="xb-item--contact">Campagnes multi-canaux avec A/B testing intensif</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Optimisation Continue</h3>
                                    <p className="xb-item--contact">Suivi quotidien et ajustements algorithmiques</p>
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
                                    <h2 className="sd-title">Résultats Concrets</h2>
                                    <p className="sd-content">Le bon message, à la bonne personne, au bon moment - répété à l'échelle.:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Trafic Hautement Qualifié : Lead-to-customer ratio optimisé</li>
                                        <li><img src={sicon} alt="" />Branding Puissant : Augmentation de la notoriété mesurable</li>
                                        <li><img src={sicon} alt="" />Coûts Maîtrisés : CPA inférieur de 30% à la moyenne sectorielle</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Approche 360° : Intégration SEO/SEA/social</li>
                                        <li><img src={sicon} alt="" />Reporting Transparent : Tableaux de bord temps réel</li>
                                        <li><img src={sicon} alt="" />Flexibilité Totale : Budgets adaptés à vos objectifs</li>
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