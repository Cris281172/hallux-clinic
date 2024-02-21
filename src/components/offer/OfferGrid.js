import { useEffect, useState } from "react";
import {useParams, useNavigate, redirect, Link} from "react-router-dom";
import OfferConfig from "../../config/OfferConfig";
import styles from './OfferGrid.module.scss';
import { IoFootstepsOutline } from "react-icons/io5";
import footIcon from '../../images/home/offer/foot-icon.webp'
import HelmetContent from "../../helpers/HelmetContent";
const OfferGrid = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const offerConfig = OfferConfig;
    const categoryId = useParams().categoryId;

    const OfferWrapper = ({ element, index }) => {
        return (
            <div className={`${styles.offerWrapper} container`}>
                <div className={styles.mainTitleWrapper}>
                    <button className={styles.back} onClick={() => navigate(-1)}>
                        <IoFootstepsOutline className={styles.icon}/> wróć
                    </button>
                    <h3 className={styles.mainTitle}>{element.mainTitle}</h3>
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
            </div>
        );
    };
    return (
        <>
            <HelmetContent title={`${offerConfig.find(el => el.id === categoryId).mainTitle} - Hallux Clinic`} desc="W mojej ofercie mam do zaoferowania szereg usług z zakresu profilaktyki i diagnostyki podologicznej, ortonyksji czy terapii problemów skórnych." />
            <div className={styles.offer}>
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