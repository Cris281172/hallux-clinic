import {IoFootstepsOutline} from "react-icons/io5";
import styles from './BackButton.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
const BackButton = ({navigateTo = - 1}) => {
    const location = useLocation()
    const navigate = useNavigate()
    if(location.pathname === '/'){
        return
    }
    return(
        <button className={styles.back} onClick={() => navigate(navigateTo)}>
            <IoFootstepsOutline className={styles.icon}/> wróć
        </button>
    )
}

export default BackButton;