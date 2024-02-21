import styles from './Lightbox.module.scss'
import {IoFootstepsOutline} from "react-icons/io5";
const Lightbox = ({gallery, isLightboxActive, setIsLightboxActive, currentImageIndex, changeCurrentImage}) => {


    if(!isLightboxActive){
        return
    }

    const handleClickOutside = (e) => {
        setIsLightboxActive(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return(
        <div className={styles.lightboxWrapper} onClick={handleClickOutside}>
            <button onClick={(e) => {stopPropagation(e);changeCurrentImage(-1)}} className={`${styles.changeCurrentImage} ${styles.prev}`}>
                <IoFootstepsOutline className={styles.footIcon} />
            </button>
            <div className={styles.lightbox}>
                <img className={styles.lightboxImage} src={gallery[currentImageIndex]} alt={gallery[currentImageIndex]} />
            </div>
            <button onClick={(e) => {stopPropagation(e);changeCurrentImage(1)}} className={`${styles.changeCurrentImage} ${styles.next}`}>
                <IoFootstepsOutline className={styles.footIcon} />
            </button>
        </div>
    )
}

export default Lightbox;