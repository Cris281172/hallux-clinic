import styles from './Gallery.module.scss'
import BeforeAfterGallery from "../about-me/gallery/BeforeAfterGallery";
const Gallery = () => {
    return(
        <div className="container">
            <div className={styles.gallery}>
                <div className={styles.galleryTitleWrapper}>
                    <h2 className={styles.galleryTitle}>Galeria</h2>
                </div>
                <BeforeAfterGallery />
            </div>

        </div>
    )
}

export default Gallery;