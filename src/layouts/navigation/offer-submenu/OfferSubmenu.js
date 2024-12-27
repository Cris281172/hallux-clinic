import styles from './OfferSubmenu.module.scss'
import {Link} from "react-router-dom";
import {IoFootstepsOutline} from "react-icons/io5";
const OfferSubmenu = ({active, setIsMenuActive}) => {

    const offerSubmenuConfig = [
        {
            link: 'diagnostyka-podologiczna',
            name: 'Diagnostyka Podologiczna',
            submenu: [
                {
                    link: 'konsultacja-podologiczna',
                    name: 'Konsultacja Podologiczna'
                },
                {
                    link: 'konsultacja-online',
                    name: 'Konsultacja Online'
                }
            ]
        },
        {
            link: 'profilaktyka-podologiczna',
            name: 'Profilaktyka Podologiczna',
            submenu: [
                {
                    link: 'podstawowy-zabieg-podologiczny',
                    name: 'Podstawowy Zabieg Podologiczny'
                },
                {
                    link: 'rozszerzony-zabieg-podologiczny',
                    name: 'Rozszerzony Zabieg Podologiczny'
                }
            ]
        },
        {
            link: 'terapie-problemow-skornych',
            name: 'Terapie Problemów Skórnych',
            submenu: [
                {
                    link: 'pekajace-piety',
                    name: 'Pękające Pięty'
                },
                {
                    link: 'usuwanie-brodawek-wirusowych',
                    name: 'Usuwanie Brodawek Wirusowych'
                },
                {
                    link: 'usuwanie-modzeli',
                    name: 'Usuwanie Modzeli'
                },
                {
                    link: 'usuwanie-odciskow',
                    name: 'Usuwanie Odcisków'
                }
            ]
        },
        {
            link: 'terapie-problemow-aparatu-paznokciowego',
            name: 'Terapie problemów aparatu paznokciowego',
            submenu: [
                {
                    link: 'grzybica-stop-i-paznokci',
                    name: 'Grzybica Stóp i Paznokci'
                },
                {
                    link: 'leczenie-wzrastajacych-i-wkrecajacych-paznokci',
                    name: 'Leczenie Wrastających i Wkręcających Paznokci'
                },
                {
                    link: 'onycholiza',
                    name: 'Onycholiza'
                },
                {
                    link: 'usuniecie-krwiaka',
                    name: 'Usunięcie Krwiaka'
                }
            ]
        },
        {
            link: 'ortonyksja',
            name: 'Ortonyksja'
        },
        {
            link: 'zabiegi-uzupelniajace',
            name: 'Zabiegi uzupełniające'
        }
    ]

    return(
        <div className={`${styles.offerSubmenu} ${active ? styles.active : styles.hidden}`} onMouseEnter={() => setIsMenuActive(true)} onMouseLeave={() => setIsMenuActive(false)}>
            {offerSubmenuConfig.map((offerItem, index) => (
                <div className={styles.offerSubmenuLoop}>
                    <Link to={`usluga/${offerItem.link}`} className={styles.mainOffersLink}>
                        {offerItem.name}
                    </Link>
                    {offerItem.submenu &&
                        <ul className={styles.offerSubmenuLoopList}>
                            {offerItem.submenu.map((submenuItem, index) => (
                                <li className={styles.offerSubmenuLoopItem}>
                                    <Link to={`usluga/${offerItem.link}/${submenuItem.link}`} className={styles.offerSubmenuLoopLink}>
                                        <IoFootstepsOutline /> {submenuItem.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            ))}
        </div>
    )
}

export default OfferSubmenu;