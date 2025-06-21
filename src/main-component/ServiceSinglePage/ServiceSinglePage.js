import React, {Fragment, useEffect, useState} from 'react';
import Services from '../../api/service'
import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ServiceSinglePageGraphic from "./ServiceSinglePageGraphic";
import ServiceSinglePageWeb from "./ServiceSinglePageWeb";
import ServiceSinglePageMontage from "./ServiceSinglePageMontage";
import ServiceSinglePageMarketing from "./ServiceSinglePageMarketing";
import ServiceSinglePageMotion from "./ServiceSinglePageMotion";


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const [isOpen, setOpen] = useState(false)

    function checkOption() {
        switch (true) {
            case slug === 'Motion Design':
                return <ServiceSinglePageMotion/>
            case slug === 'Développement Web':
                return <ServiceSinglePageWeb/>
            case slug === 'Montage Vidéo':
                return <ServiceSinglePageMontage/>
            case slug === 'Marketing Digital':
                return <ServiceSinglePageMarketing/>
            case slug === 'Graphic Design':
                return <ServiceSinglePageGraphic/>
            default:
                return <div className='m-5 justify-content-center'>Tsisy raha hitany</div>
        }
    }

    return (
        <Fragment>
            <div className="sco_agency">
                <Header4 />
                {checkOption()}
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ServiceSinglePage;