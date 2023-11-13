import { useEffect, useState } from "react";
import { useParams, useNavigate, redirect } from "react-router-dom";
import OfferConfig from "../../config/OfferConfig";
import styles from './Offer.module.scss';
import { IoFootstepsOutline } from "react-icons/io5";
import footIcon from '../../images/home/offer/foot-icon.webp'
import HelmetContent from "../../helpers/HelmetContent";
const Offer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const offerConfig = OfferConfig;
    const id = useParams().id;

    const OfferWrapper = ({ element, index }) => {
        const [visibleStates, setVisibleStates] = useState(
            element.value.map(() => false)
        );

        const handleTitleClick = (clickedIndex, text) => {
            if(text.length === 0){
                return
            }
            setVisibleStates((prevStates) =>
                prevStates.map((prevState, idx) =>
                    idx === clickedIndex ? !prevState : prevState
                )
            );
        };

        return (
            <div className={`${styles.offerWrapper} container`}>
                <div className={styles.mainTitleWrapper}>
                    <button className={styles.back} onClick={() => navigate(-1)}>
                        <IoFootstepsOutline className={styles.icon}/> wróć
                    </button>
                    <h3 className={styles.mainTitle}>{element.mainTitle}</h3>
                </div>
                {element.value.map((value, index) => (
                    <div className={styles.information} key={index} onClick={() => handleTitleClick(index, value.text)}>
                        <h4
                            className={styles.title}
                        >
                            {value.title}
                            <IoFootstepsOutline className={
                                visibleStates[index]
                                    ? `${styles.icon} ${styles.active}`
                                    : styles.icon
                            } />
                        </h4>
                        <p
                            className={
                                visibleStates[index]
                                    ? `${styles.text} ${styles.active}`
                                    : styles.text
                            }
                        >
                            {value.text}
                        </p>
                    </div>
                ))}
            </div>
        );
    };
    console.log(offerConfig)
    return (
        <>
            <HelmetContent title={`${offerConfig.find(el => el.id === id).mainTitle} - Hallux Clinic`} desc="W mojej ofercie mam do zaoferowania szereg usług z zakresu profilaktyki i diagnostyki podologicznej, ortonyksji czy terapii problemów skórnych." />
            <div className={styles.offer}>
                <div className={styles.container}>
                    {offerConfig
                        .filter((el) => el.id === id)
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

export default Offer;