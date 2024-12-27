import React from "react";
import styles from './Content.module.scss'
const Content = ({service}) => {
    if(!service){
        return  <p>Usługa nie została znaleziona.</p>
    }
    return(
        <div className={styles.content}>
            {/*<div className={styles.contentTitleWrapper}>*/}
            {/*    <h2 className={styles.contentTitle}>{service.title}</h2>*/}
            {/*</div>*/}
            <div className={styles.contentText}>
                {service.text}
            </div>
            {service.image && <img src={service.image} alt={service.title} />}
        </div>
    )
}

export default Content;