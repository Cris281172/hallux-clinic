import styles from './Circle.module.scss'

const Circle = ({size, top, left, right, bottom}) => {
    return(
        <>
            {size === 'verySmall' && <span className={`${styles.circle} ${styles.verySmall}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'small' && <span className={`${styles.circle} ${styles.small}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'medium' && <span className={`${styles.circle} ${styles.medium}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'big' && <span className={`${styles.circle} ${styles.big}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
            {size === 'veryBig' && <span className={`${styles.circle} ${styles.veryBig}`} style={{top: top, left: left, right: right, bottom: bottom}} />}
        </>
    )
}

export default Circle;