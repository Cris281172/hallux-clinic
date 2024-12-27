import styles from './Navigation.module.scss'
import {Link, NavLink} from 'react-router-dom'
import Circle from "../circle/Circle";
import {useEffect, useState} from 'react';
import followUsImage from '../../images/home/header/follow-us.webp'
import logo from '../../images/home/header/logo.webp'
import OfferSubmenu from "./offer-submenu/OfferSubmenu";
const Navigation = () => {
    const[isMenuActive, setIsMenuActive] = useState(false)
    const toggleMenu = () => {
        setIsMenuActive(prev => prev ? false : true)
    }

    const [isSubmenuActive, setIsSubmenuActive] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 1100){
                setIsMobile(true);
            }
            else{
                setIsMobile(false)
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return(
        <div className={styles.navigationWrapper}>
            <nav className={styles.navigation}>
                <Link to="" className={styles.logoLink}>
                    <img className={styles.logoLinkImage} src={logo} alt="Mobilny Podolog Łódź - Hallux.Clinic" />
                </Link>
                <div className={isMenuActive ? `${styles.hamburgerMenu} ${styles.activeMenu}` : `${styles.hamburgerMenu}`} onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </div>
                <ul className={isMenuActive ? `${styles.listOfLinks} ${styles.activeListOfLink}` : `${styles.listOfLinks}`}>
                    <li className={styles.item}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Hallux.Clinic</NavLink>
                    </li>
                    <li onMouseLeave={() => setIsSubmenuActive(false)} onMouseEnter={() => setIsSubmenuActive(true)} className={styles.item}>
                        <NavLink to="/usluga" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Usługa</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="o-mnie" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>O Mnie</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/cennik" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Cennik</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/galeria" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Galeria</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/kontakt" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Kontakt</NavLink>
                    </li>
                    {!isMobile &&  <OfferSubmenu active={isSubmenuActive} setIsMenuActive={setIsSubmenuActive} />}
                </ul>
            </nav>
            <Circle size="big" left="150px" top="-90px" mobileActive={false}/>
            <Circle size="small" right="15px" top="50px" mobileActive={false}/>
            <Circle size="verySmall" left="30%" top="25px" mobileActive={false}/>
        </div>
    )
}

export default Navigation;