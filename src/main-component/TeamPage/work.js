import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../images/icon/tp-work-icon01.svg'
import icon2 from '../../images/icon/tp-work-icon02.svg'
import icon3 from '../../images/icon/tp-work-icon03.svg'
import icon4 from '../../images/icon/tp-work-icon04.svg'
import icon5 from '../../images/icon/tp-work-icon05.svg'
import icon6 from '../../images/icon/tp-work-icon06.svg'
import iIcon from '../../images/icon/eye-icon.svg'
import iIcon2 from '../../images/icon/sms-white-icon01.svg'


const workItems = [
    {
        id: 1,
        icon: icon1,
        title: 'Carrière évolutive & portefeuille valorisé',
        content: 'Freelances ou salariés, nous boostons votre employabilité : certifications reconnues (Google, AWS, Scrum Alliance), et accès à des projets internationaux pour enrichir votre portfolio.',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Flexibilité pro, stabilité financière',
        content: 'Freelances : touchez des missions premium avec paiements garantis. Salariés : bénéficiez d’un CDI avec revenus compétitifs (en devises ou en ariary). Tous gagnent.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Formations certifiantes 100% remotables',
        content: 'Accès à des parcours diplômants (en français/anglais) financés par l’entreprise, valables sur le marché mondial. Maîtrisez le marketing digital,l’IA, le DevOps, ou le Growth Hacking depuis chez vous.',
    },
    {
        id: 4,
        icon: icon4,
        title: 'Réseau international & visibilité\n',
        content: 'Collaborez avec des clients et partenaires en Europe, Afrique et Asie. Nos freelances les plus performants sont promus sur notre plateforme globale.',
    },
    {
        id: 5,
        icon: icon5,
        title: 'Infrastructures hybrides',
        content: 'Freelances : utilisez nos espaces R&D à Antananarivo (VR, labs tech) pour vos projets. Salariés : télétravail flexible depuis nos hubs à Paris,Maurice ou Lyon.',
    },
    {
        id: 6,
        icon: icon6,
        title: 'Écosystème solidaire & sans frontières',
        content: 'Mentorat croisé (freelances/salariés), partage de leads, et communauté Slack dédiée pour s’entraider sur des marchés exigeants comme la FinTech ou l’EdTech.\n' +
            '\n',
    },
];

const WorkSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`work  pb-130 ${props.bg}`}>
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <div className="sub-title">
                        <img src={iIcon} alt="" />
                        Pourquoi travailler avec nous ?
                    </div>
                    <h2 className="title">Pourquoi les gens travaillent-ils avec nous ?</h2>
                </div>
                <div className="tp-work-wrapp">
                    <div className="row mt-none-30">
                        {workItems.map((item) => (
                            <div className="col-lg-6 mt-30" key={item.id}>
                                <div className="tp-work-item">
                                    <div className="xb-item--inner ul_li">
                                        <div className="xb-item--icon">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">{item.title}</h3>
                                            <p className="xb-item--content">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="header-contact text-center mt-60">
                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso thm-btn--header-black">
                            Nous pouvons aussi en discuter.
                            <img src={iIcon2} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
