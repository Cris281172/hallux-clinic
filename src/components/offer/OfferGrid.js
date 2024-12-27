import { useEffect, useState } from "react";
import {useParams, useNavigate, redirect, Link} from "react-router-dom";
import OfferConfig from "../../config/OfferConfig";
import styles from './OfferGrid.module.scss';
import { IoFootstepsOutline } from "react-icons/io5";
import footIcon from '../../images/home/offer/foot-icon.webp'
import HelmetContent from "../../helpers/HelmetContent";
import BackButton from "../../helpers/back-button/BackButton";
import Breadcrumbs from "../../helpers/breadcrumbs/Breadcrumbs";
const OfferGrid = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const offerConfig = OfferConfig;
    const categoryId = useParams().categoryId;

    const OfferWrapper = ({ element, index }) => {
        return (
            <div className={`${styles.offerWrapper} container`}>
                <div className={styles.mainTitleWrapper}>
                    <BackButton />
                    <h1 className={styles.mainTitle}>{element.mainTitle}</h1>
                </div>
                <div className={styles.offerGrid}>
                    {element.value.map((value, index) => (
                        <Link to={value.id} className={styles.offerItem} key={index}>
                            <h2 className={styles.offerTitle}>
                                {value.title}
                            </h2>
                            <img src={value.icon} className={styles.offerIcon} />

                        </Link>
                    ))}
                </div>
                <div className={styles.mainDesc}>
                    {element.mainDesc}
                </div>
            </div>
        );
    };
    return (
        <>
            <HelmetContent title={`${offerConfig.find(el => el.id === categoryId).mainTitle} Łódź - Podolog Łódź Hallux Clinic`} desc={offerConfig.find(el => el.id === categoryId).metaDesc} />
            <div className={styles.offer}>
                <Breadcrumbs />
                <div className={styles.container}>
                    {offerConfig
                        .filter((el) => el.id === categoryId)
                        .map((element, index) => (
                            <OfferWrapper
                                key={index}
                                element={element}
                                index={index}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default OfferGrid;