import styles from './Location.module.scss'
import locationIcon from '../../../images/home/location/location-icon.webp'
import mapImage from '../../../images/home/location/map-image.webp'
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
const Location = () => {
    const[visibleOfSection, setVisibleOfSection] = useState(false)
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    useEffect(() => {
        if(visibleOfSection){
            setVisibleOfSection(true)
        }
        else{
            if(inView){
                setTimeout(() => {
                    setVisibleOfSection(true)
                }, 0)
            }
            else{
                setVisibleOfSection(false)
            }
        }
    }, [inView])
    return(
        <div className={styles.locationWrapper} >
            <div className={styles.location}>
                <div className={styles.freeTransport}>
                    <img className={styles.locationIcon} src={locationIcon} alt="locationIcon" />
                    <h3 className={styles.locationTitle}>Bezpłatny dojazd na terenie miasta Łodzi.</h3>
                </div>
            </div>
            <iframe style={{width: '100%'}} src="https://www.google.com/maps/d/u/3/embed?mid=1ZPOucsDzLoXqgALulN-Nt8OGOfG8t-k&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
    )
}

export default Location;