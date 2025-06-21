import React, { Fragment, useState } from 'react';
import Services from '../../api/service'
import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
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
                                            <h2 className="title">Nous vous proposons <br /> un montage dynamique <br /> et un storytelling mémorable.</h2>
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
                                <h2 className="sd-title">Donnez vie à Vos Vidéos avec un Montage Professionnel</h2>
                                <p className="sd-content">
                                    Dans un monde où le contenu vidéo domine, un montage percutant fait la différence
                                    entre une vidéo oubliable et un message qui marque les esprits. Notre service de
                                    montage vidéo transforme vos rushs en histoires captivantes, optimisées pour l’engagement
                                    et la conversion. Que ce soit pour des vidéos corporate, des publicités ou des contenus réseaux sociaux,
                                    nous combinons technique et storytelling pour maximiser l’impact de chaque image.
                                </p>
                                <br />
                                <p className="sd-content">
                                    L'impact d'un bon montage se mesure en chiffres : +53% de rétention d'attention,
                                    +34% de taux de conversion*. Que ce soit pour une vidéo corporate, une campagne
                                    publicitaire ou du contenu social éphémère, nous appliquons les principes du storytelling
                                    cinématographique combinés aux meilleures pratiques digitales. Le résultat ? Des vidéos
                                    qui non seulement se regardent, mais se partagent et génèrent des résultats concrets.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Notre Processus</h2>
                                <p className="sd-content">Notre expertise en montage vidéo allie précision technique et
                                    créativité pour sublimer vos contenus, avec une approche sur-mesure alignée sur vos ambitions</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Brief & Sélection</h3>
                                    <p className="xb-item--contact">Analyse de vos objectifs et sélection des meilleures prises.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Structuration Narrative</h3>
                                    <p className="xb-item--contact">Découpage scénaristique et choix des séquences clés.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Montage & Effets</h3>
                                    <p className="xb-item--contact">Montage,Ajout de transitions, musique, effets visuels et sous-titres.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Livraison Optimisée</h3>
                                    <p className="xb-item--contact">Export aux formats adaptés à chaque plateforme (vertical, horizontal, court/long format).</p>
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
                                    <p className="sd-content">Le Top du top ! Ce n'est pas une vidéo de plus, c'est votre meilleur argument de vente en mouvement</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Engagement accru</li>
                                        <li><img src={sicon} alt="" />Message clarifié</li>
                                        <li><img src={sicon} alt="" />Identité renforcée</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Conversion boostée </li>
                                        <li><img src={sicon} alt="" />Polyvalence assurée</li>
                                        <li><img src={sicon} alt="" />Gain de temps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ServiceSinglePage;