import styles from './SingleOffer.module.scss'
import {Link} from 'react-router-dom'
const SingleOffer = ({name, link}) => {
    return(
        <Link to={link} className={styles.singleOffer}>
            <h5 className={styles.singleOfferTitle}>{name}</h5>
        </Link>
    )
}

export default SingleOffer;