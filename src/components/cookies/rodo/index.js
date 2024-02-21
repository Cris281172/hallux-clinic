import {NavLink, useParams} from "react-router-dom";
import InformationalInformationWebsite from "./InformationalInformationWebsite";
import styles from './Rodo.module.scss'
import {useEffect, useState} from "react";
import InformationalInformationCart from "./InformationalInformationCart";
import RightAccess from "./RightAccess";
const RodoWrapper = () => {
    const {id} = useParams()
    const rodoConfiguration = [
        {
            key: 'obowiazek-informacyjny',
            component: <InformationalInformationWebsite />,
            title: 'Obowiązek informacyjny na stronie'
        },
        {
            key: 'obowiazek-informacyjny-karta',
            component: <InformationalInformationCart />,
            title: 'Obowiązek informacyjny do karty pacjenta'
        },
        {
            key: 'prawo-dostepu',
            component: <RightAccess />,
            title: 'Prawo dostępu na strone'
        }
    ]
    const [currentRodoPage, setCurrentRodoPage] = useState(rodoConfiguration.filter(el => el.key === id)[0])
    useEffect(() => {
        setCurrentRodoPage(rodoConfiguration.filter(el => el.key === id)[0])
    }, [id]);

    return(
        <div className={`${styles.rodo} container`}>
            <div className={styles.contactTitleWrapper}>
                <h2 className={styles.contactTitle}>Obowiązek informacyjny Obowiązek informacyjny - karta rejestrowa Prawo dostępu do danych</h2>
            </div>
            <nav className={styles.rodoMenu}>
                <NavLink   className={({ isActive, isPending }) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/rodo/obowiazek-informacyjny">Obowiązek informacyjny na strone</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/rodo/obowiazek-informacyjny-karta">Obowiązek informacyjny na strone</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/rodo/prawo-dostepu">Prawo dostępu na strone</NavLink>
            </nav>
            <div className={styles.contentWrapper}>
                {currentRodoPage.component}
            </div>
        </div>
    )
}

export default RodoWrapper;