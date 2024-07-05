import styles from './SingleOffer.module.scss'
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";
const SingleOffer = ({name, link, image}) => {
    const[visibleOfSection, setVisibleOfSection] = useState(false)

    return(
        <Link to={link} className={styles.singleOffer} style={{backgroundImage: `url(${image})`}}>
            <h3 className={styles.singleOfferTitle}>{name}</h3>
        </Link>
    )
}

export default SingleOffer;