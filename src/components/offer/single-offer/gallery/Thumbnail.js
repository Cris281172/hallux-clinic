import styles from './Thumbnail.module.scss'
const Thumbnail = ({gallery, setCurrentImageIndex}) => {
    return(
        <div className={styles.thumbnail}>
            {gallery.map((image, index) => <img src={image} onClick={() => setCurrentImageIndex(index)} />)}
        </div>
    )
}

export default Thumbnail;