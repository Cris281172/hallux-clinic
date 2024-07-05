import useBreadcrumbs from "use-react-router-breadcrumbs";
import {Link} from "react-router-dom";
import React from "react";
import styles from './Banner.module.scss'
import Breadcrumbs from "../../../helpers/breadcrumbs/Breadcrumbs";

const Banner = ({bannerSrc, bannerTitle}) => {
    const breadcrumbs = useBreadcrumbs();

    return(
        <div style={{backgroundImage: `url(${bannerSrc})`}} className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <h1 className={styles.bannerTitle}>{bannerTitle}</h1>
                <Breadcrumbs additionalStyles={styles.offerBreadcrumbs} />
            </div>
        </div>
    )
}

export default Banner;