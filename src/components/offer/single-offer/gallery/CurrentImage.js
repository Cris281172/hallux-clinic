import styles from './CurrentImage.module.scss'
import { IoFootstepsOutline } from "react-icons/io5";
import Lightbox from "./lightbox/Lightbox";
import {useState} from "react";

const CurrentImage = ({gallery, setCurrentImageIndex, currentImageIndex}) => {

    const [isLightboxActive, setIsLightboxActive] = useState(false)

    const changeCurrentImage = (direction) => {
        setCurrentImageIndex(prevState => {
            const newIndex = prevState + direction;
            if(newIndex < 0) {
                return gallery.length - 1;
            }
            else if(newIndex >= gallery.length) {
                return 0;
            }
            else {
                return newIndex;
            }
        })
    }
    return (
        <>
            <div className={styles.currentImage}>
                <button onClick={() => changeCurrentImage(- 1)} className={`${styles.changeCurrentImage} ${styles.prev}`}>
                    <IoFootstepsOutline className={styles.footIcon} />
                </button>
                <img className={styles.image} src={gallery[currentImageIndex]} alt={gallery[currentImageIndex]} onClick={() => setIsLightboxActive(true)} />
                <button onClick={() => changeCurrentImage(1)} className={`${styles.changeCurrentImage} ${styles.next}`}>
                    <IoFootstepsOutline className={styles.footIcon} />
                </button>
            </div>
            <Lightbox gallery={gallery} isLightboxActive={isLightboxActive} setIsLightboxActive={setIsLightboxActive} currentImageIndex={currentImageIndex} changeCurrentImage={changeCurrentImage} />
        </>
    )
}

export default CurrentImage;