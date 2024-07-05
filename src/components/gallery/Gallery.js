import styles from './Gallery.module.scss'
import BeforeAfterGallery from "../about-me/gallery/BeforeAfterGallery";
import HelmetContent from "../../helpers/HelmetContent";
import BackButton from "../../helpers/back-button/BackButton";
import Breadcrumbs from "../../helpers/breadcrumbs/Breadcrumbs";
const Gallery = () => {
    return(
        <div className={styles.gallery}>
            <Breadcrumbs />
            <div className="container" style={{position: 'relative'}}>
                <BackButton />
                <HelmetContent title="Galeria - Podolog Łódź Hallux Clinic" desc="Odkryj galerię naszych profesjonalnych usług podologicznych i zobacz, jak pomagamy w pielęgnacji i leczeniu stóp. Mobilny podolog - zdrowie Twoich stóp w zasięgu ręki" />
                <div className={styles.galleryTitleWrapper}>
                    <h1 className={styles.galleryTitle}>Galeria</h1>
                </div>
                <BeforeAfterGallery />
            </div>
        </div>

    )
}

export default Gallery;