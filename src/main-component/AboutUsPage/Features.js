import React from 'react';
import sIcon1 from '../../images/icon/ab-page-icon01.svg'
import sIcon2 from '../../images/icon/ab-page-icon02.svg'
import sIcon3 from '../../images/icon/ab-page-icon03.svg'
import sIcon4 from '../../images/icon/ab-page-icon04.svg'


const FeaturesSection = (props) => {

    return (
        <section className="fanfact pt-125 pb-125">
            <div className="container">
                <div className="ap-feature_wrap">
                    <div className="row mt-none-30">
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon1} alt=""/></div>
                                <h4 className="xb-item--title">Obtenez des résultats</h4>
                                <p className="xb-item--content">Chez Waviloid Studio, fournir des résultats signifie réussir.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon2} alt=""/></div>
                                <h4 className="xb-item--title">Être proactif</h4>
                                <p className="xb-item--content">Chez Waviloid Studio, être proactif signifie anticiper les défis. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon3} alt=""/></div>
                                <h4 className="xb-item--title">Une croissance durable</h4>
                                <p className="xb-item--content">SLa croissance durable est synonyme de réussite à long terme.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon4} alt=""/></div>
                                <h4 className="xb-item--title">Maximiser la vitesse</h4>
                                <p className="xb-item--content">Nous nous attachons à fournir des solutions rapides et efficaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;