import styles from './Circle.module.scss'
import {useState, useEffect} from 'react';

const Circle = ({size, top, left, right, bottom}) => {

    const[hideCircle, setHideCircle] = useState(false);
    const visibilityCircle = () => {
        setHideCircle(true)
        setTimeout(() => {
            setHideCircle(false);
        }, 3000)
    }
    return(
        <div onClick={visibilityCircle} className={hideCircle ? `${styles.hidden}` : `${styles.visible}`}>
            {size === 'verySmall' && <span className={`${styles.circle} ${styles.verySmall}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'small' && <span className={`${styles.circle} ${styles.small}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'medium' && <span className={`${styles.circle} ${styles.medium}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'big' && <span className={`${styles.circle} ${styles.big}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'veryBig' && <span className={`${styles.circle} ${styles.veryBig}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
        </div>
    )
}

export default Circle;