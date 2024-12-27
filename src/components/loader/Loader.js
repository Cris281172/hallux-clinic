import styles from './Loader.module.scss'
import { IoFootstepsOutline } from "react-icons/io5";

const Loader = () => {
    return(
        <div className={styles.loader}>
            <IoFootstepsOutline className={styles.loaderIcon}/>
        </div>
    )
}

export default Loader;