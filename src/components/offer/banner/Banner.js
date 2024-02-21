import useBreadcrumbs from "use-react-router-breadcrumbs";
import {Link} from "react-router-dom";
import React from "react";
import styles from './Banner.module.scss'

const Banner = ({bannerSrc, bannerTitle}) => {
    const breadcrumbs = useBreadcrumbs();

    return(
        <div style={{backgroundImage: `url(${bannerSrc})`}} className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <h1 className={styles.bannerTitle}>{bannerTitle}</h1>
                <div className={styles.bannerBreadcrumbs}>
                    {breadcrumbs.map(({ match, breadcrumb }, index) => <Link to={match.pathname} className={styles.bannerBreadcrumb}>{breadcrumb} {breadcrumbs.length - 1 !== index && <span>/</span>}</Link>)}
                </div>
            </div>
        </div>
    )
}

export default Banner;