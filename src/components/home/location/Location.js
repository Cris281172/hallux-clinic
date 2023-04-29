import styles from './Location.module.scss'
import locationIcon from '../../../images/home/location/location-icon.svg'
import mapImage from '../../../images/home/location/map-image.svg'
const Location = () => {

    return(
        <div className={styles.locationWrapper}>
            <div className={styles.location}>
                <div className={styles.freeTransport}>
                    <img className={styles.locationIcon} src={locationIcon} alt="locationIcon" />
                    <h3 className={styles.locationTitle}>Bezpłatny dojazd na terenie miasta Łodzi.</h3>
                </div>
            </div>
            <img src={mapImage} alt="mapImage" className={styles.mapImage}/>
        </div>
    )
}

export default Location;