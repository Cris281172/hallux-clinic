import React from 'react';
import OfferConfig from "../../../config/OfferConfig";
import {Link, useParams} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Banner from "../banner/Banner";
import Gallery from "./gallery/Gallery";
import styles from './SingleOffer.module.scss'
import Content from "./content/Content";
import HelmetContent from "../../../helpers/HelmetContent";

const SingleOffer = () => {
    const { categoryId, serviceId } = useParams();
    const offerConfig = OfferConfig;

    const category = offerConfig.find(el => el.id === categoryId);

    const service = category ? category.value.find(item => item.id === serviceId) : null;

    return (
        <div className={styles.singleOffer}>
            <HelmetContent title={`${service.title} - ${category.mainTitle} - Hallux Clinic`} desc={service.desc} />
            <Banner bannerSrc={category.banner} bannerTitle={service.title} />
            <div className="container">
                <div className={styles.singleOfferContent}>
                    {service.gallery !== null &&
                        <div className={styles.galleryWrapper}>
                            <Gallery gallery={service.gallery} />
                        </div>
                    }
                    <div className={`${styles.contentWrapper} ${service.gallery === null ? `${styles.max}` : ''}`}>
                        <Content service={service} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SingleOffer;