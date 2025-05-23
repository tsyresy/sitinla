
import React, { useState } from 'react';
import hicon from '../../images/icon/magic.svg'
import rImg from '../../images/process/cp-img.png'
import { Fade } from "react-awesome-reveal";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Process = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process process-bg pt-115 pb-130">
            <div className="container">
                <div className="row align-items-center mt-none-30">
                    <div className="col-lg-6 mt-30">
                        <div className="faq">
                            <div className="container">
                                <div className="sec-title--two mb-50">
                                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                        <div>
                                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                                src={hicon} alt="" />Démarrez maintenant</div>
                                        </div>
                                    </Fade>
                                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                        <div>
                                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Ce que
                                                vous pouvez faire</h2>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="xb-faq cp-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                            <Accordion open={open} toggle={toggle} className='accordion_box clearfix list-unstyled'>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="1" className='acc-btn'><span className="number">01</span> _S’inscrire
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="1" className='acc_body'>
                                                        <div className="content">
                                                            <p>Créez votre compte gratuit et accédez à nos ressources exclusives, outils pro et communauté d’experts. Votre avenir freelance commence ici.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="2" className='acc-btn'><span className="number">02</span> _Se connecter aux freelancers 2.0
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="2" className='acc_body'>
                                                        <div className="content">
                                                            <p>Accédez à votre espace personnalisé : suivi de projets, formations en direct et opportunités réservées aux membres.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="3" className='acc-btn'><span className="number">03</span> _Se former,Maîtrisez des compétences
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="3" className='acc_body'>
                                                        <div className="content">
                                                            <p>Formations certifiantes (SEO, IA, design,etc..), mentorats sur-mesure et défis pratiques pour booster votre employabilité.
                                                                Webinar et partage gratuits etc...</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="4" className='acc-btn'><span className="number">04</span> _Trouver un job
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="4" className='acc_body'>
                                                        <div className="content">
                                                            <p>Notre algorithme vous match avec des clients sérieux. Facturez en euros, dollars ou ariary, avec paiements sécurisés.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="5" className='acc-btn'><span className="number">05</span> _Recrutez des freelancers !
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="5" className='acc_body'>
                                                        <div className="content">
                                                            <p>Accédez à notre réseau de talents vérifiés (design, dev, marketing). Livraison garantie ou remboursé.

                                                            </p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="cp-process-right">
                            <div className="xb-img">
                                <img src={rImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Process;
