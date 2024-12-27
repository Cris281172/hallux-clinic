import testImage from '../../../../images/home/offer/offer3.webp'
import testImage2 from '../../../../images/home/offer/offer1.webp'
import styles from './Gallery.module.scss'
import {useState} from "react";
import Thumbnail from "./Thumbnail";
import CurrentImage from "./CurrentImage";
const Gallery = ({gallery}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    if(gallery === null){
        return
    }
    return(
        <div className={styles.gallery}>
            <CurrentImage gallery={gallery} setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} />
            <Thumbnail gallery={gallery} setCurrentImageIndex={setCurrentImageIndex} />
        </div>
    )
}

export default Gallery;