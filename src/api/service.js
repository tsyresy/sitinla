import icon1 from '../images/icon/research.gif'
import icon2 from '../images/icon/durability.gif'
import icon3 from '../images/icon/digital-tra.gif'
import icon4 from '../images/icon/business-develop.gif'
import icon5 from '../images/icon/search.gif'
import icon6 from '../images/icon/warning.gif'

import sicon1 from '../images/icon/ser-icon01.svg'
import sicon2 from '../images/icon/ser-icon02.svg'
import sicon3 from '../images/icon/ser-icon03.svg'
import sicon4 from '../images/icon/ser-icon04.svg'

import sdicon1 from '../images/icon/da-fea_icon01.svg'
import sdicon2 from '../images/icon/da-fea_icon02.svg'
import sdicon3 from '../images/icon/da-fea_icon03.svg'
import sdicon4 from '../images/icon/da-fea_icon04.svg'

import simg1 from '../images/service/service-img02.jpg'
import simg2 from '../images/service/service-img01.jpg'
import simg3 from '../images/service/service-img03.jpg'
import simg4 from '../images/service/service-img04.jpg'


import scicon1 from '../images/icon/airdrop-white.svg'
import scicon2 from '../images/icon/cloud-add.svg'
import scicon3 from '../images/icon/check02.svg'
import scicon4 from '../images/icon/finger-scan.svg'
import scicon5 from '../images/icon/ranking.svg'


import cdicon1 from '../images/icon/cd-ser_icon01.svg'
import cdicon2 from '../images/icon/cd-ser_icon02.svg'
import cdicon3 from '../images/icon/cd-ser_icon03.svg'
import cdicon4 from '../images/icon/cd-ser_icon04.svg'
import cdicon5 from '../images/icon/cd-ser_icon05.svg'
import cdicon6 from '../images/icon/cd-ser_icon06.svg'
import cdicon7 from '../images/icon/cd-ser_icon08.svg'
import cdicon8 from '../images/icon/cd-ser_icon09.svg'



const Services = [
    {
        Id: '1',
        sImg: icon1,
        title: 'Niche research',
        slug: 'Niche-research',
        thumb1: 'Strategy',
        thumb2: 'Consultation',
        description: 'Niche research identifies a market segment to help tailor growth strategies.',
    },
    {
        Id: '2',
        sImg: icon2,
        title: 'Link building',
        slug: 'Link-building',
        thumb1: 'Management',
        thumb2: 'Transfer',
        description: 'Link building hyperlinks from other sites to boost and improve search rankings.',
    },
    {
        Id: '3',
        sImg: icon3,
        title: 'International SEO',
        slug: 'International-SEO',
        thumb1: 'Landing Page',
        thumb2: 'Plugins',
        description: 'Enterprise SEO optimizes large websites to improve visibility and drive traffic.',
    },
    {
        Id: '4',
        sImg: icon4,
        title: 'Enterprise SEO',
        slug: 'Enterprise-SEO',
        thumb1: 'Consultation',
        thumb2: 'solution',
        description: 'Embarking on a journey of higher education in a foreign country opens doors to...',
    },
    {
        Id: '5',
        sImg: icon5,
        title: 'SEO audit',
        slug: 'SEO-audit',
        thumb1: 'Website',
        thumb2: 'Mobile App',
        description: 'An SEO audit evaluates a website identify improvements for better search rankings.',
    },
    {
        Id: '6',
        sImg: icon6,
        title: 'Penalty recovery',
        slug: 'Penalty-recovery',
        description: 'Penalty recovery fixes issues that caused search engine penalty to restore rankings.',
    },
    {
        Id: '7',
        sImg: simg1,
        sIcon: sicon1,
        title: 'IT management',
        slug: 'IT-management',
    },
    {
        Id: '8',
        sImg: simg2,
        sIcon: sicon2,
        title: 'Data tracking & security',
        slug: 'Data-tracking-&-security',
    },
    {
        Id: '9',
        sImg: simg3,
        sIcon: sicon3,
        title: 'Custom CRM services',
        slug: 'Custom-CRM-services',
    },
    {
        Id: '10',
        sImg: simg4,
        sIcon: sicon4,
        title: 'Website development ',
        slug: 'Website-development ',
    },
    {
        Id: '11',
        sIcon: sdicon1,
        title: 'Data source identification',
        slug: 'Data-source',
        description: 'We identify the new and existing data sources that can help drive your business forward.',
    },
    {
        Id: '12',
        sIcon: sdicon2,
        title: 'Data ecosystem set up',
        slug: 'Data-ecosystem',
        description: 'We ingest your data into a data warehouse and set up your analytics to start making sense of it.',
    },
    {
        Id: '13',
        sIcon: sdicon3,
        title: 'AI solution Design',
        slug: 'AI-solution',
        description: 'We design AI solutions that use your newly found insights to identify new opportunities for improvement.',
    },
    {
        Id: '14',
        sIcon: sdicon4,
        title: 'Business-wide adoption',
        slug: 'Business-wide',
        description: 'We support you in helping your business understand, embrace, and adopt the change.',
    },
    {
        Id: '15',
        sIcon: scicon1,
        title: 'Motion Design',
        slug: 'Motion Design',
        features: [' Animations qui hypnotisent, messages qui restent.',
            'Motion design viral pour réseaux sociaux.',
            'Explainer videos claires et captivantes.',
            'Transitions dynamiques, effets visuels punchy.',
            'Storytelling animé, 100% sur-mesure.']
    },
    {
        Id: '16',
        sIcon: scicon2,
        title: 'Développement Web',
        slug: 'Développement Web',
        features: ['Sites web sur mesure, UX optimisée.',
            'Développement rapide, sécurisé, évolutif.',
            'Plateformes performantes, responsive design.',
            'Solutions tech clé en main.',
            'Intégration CMS, SEO-friendly by design.']
    },
    {
        id: '17',
        sIcon: scicon3,
        title: 'Montage Vidéo',
        slug: 'Montage Vidéo',
        features: [
            'Émotions amplifiées par le rythme.',
            'Narrations visuelles percutantes, sans déchets.',
            'Color grading professionnel, effets immersifs.',
            'Montage dynamique, storytelling mémorable.',
            'Vidéo 100% alignée avec votre brand.',
        ],
    },
    {
        id: '18',
        sIcon: scicon4,
        title: 'Graphic Design',
        slug: 'Graphic Design',
        features: [
            "Identité visuelle qui électrise les marques.",
            "Logos impactants, chartes graphiques cohérentes.",
            "Designs print & digital mémorables.",
            "Packaging créatif qui raconte une histoire.",
            "Direction artistique audacieuse et alignée.",
        ],
    },
    {
        id: '19',
        sIcon: scicon5,
        title: 'Marketing Digital',
        slug: 'Marketing Digital',
        features: [
            'Stratégies data-driven pour un ROI explosif.',
            'Campagnes virales, engagement maximal garanti.',
            'Ads ciblés, conversions mesurables en temps réel.',
            'Social Media Management sur-mesure.',
            'Content marketing qui convertit et fidélise.',
        ],
    },

    {
        Id: '20',
        sIcon: cdicon1,
        title: 'INFRASTRUCT URE DESIGN',
        slug: 'INFRASTRUCT-URE-DESIGN',
    },
    {
        Id: '21',
        sIcon: cdicon2,
        title: 'COSTS OPTIMIZATION',
        slug: 'COSTS-OPTIMIZATION',
        bgClass:'cd-dot_bg2',
    },
    {
        Id: '22',
        sIcon: cdicon3,
        title: 'INFRASTRUCTURE AS A CODE',
        slug: 'INFRASTRUCTURE-AS-A-CODE',
        bgClass:'cd-dot_bg3',
    },
    {
        Id: '23',
        sIcon: cdicon4,
        title: 'Continuous Integration',
        slug: 'Continuous-Integration',
        bgClass:'cd-dot_bg4',
    },
    {
        Id: '24',
        sIcon: cdicon5,
        title: 'Continuous Deployment',
        slug: 'Continuous-Deployment',
    },
    {
        Id: '25',
        sIcon: cdicon6,
        title: 'Blue Green Deployment',
        slug: 'Blue-Green-Deployment',
        bgClass:'cd-dot_bg2',
    },
    {
        Id: '26',
        sIcon: '',
        title: 'Data Consistency',
        slug: 'Data-Consistency',
        bgClass:'cd-dot_bg3'
    },
    {
        Id: '27',
        sIcon: cdicon7,
        title: 'Data Integrity',
        slug: 'Data-Integrity',
        bgClass:'cd-dot_bg4'
    },
    {
        Id: '28',
        sIcon: cdicon8,
        title: 'Redundancy',
        slug: 'Redundancy',
    },
]

export default Services;