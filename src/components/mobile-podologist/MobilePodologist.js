import styles from './MobilePodologist.module.scss'
import image1 from '../../images/home/mobile-podologist/gallery/image-1.webp'
import image2 from '../../images/home/mobile-podologist/gallery/image-2.webp'
import image3 from '../../images/home/mobile-podologist/gallery/image-3.webp'
import image4 from '../../images/home/mobile-podologist/gallery/image-4.webp'
import HelmetContent from "../../helpers/HelmetContent";
const MobilePodologist = () => {
    return(
        <>
            <HelmetContent title="Mobilne pogotowie podologiczne Łódź - Hallux Clinic" desc="Profesjonalne usługi podologiczne w Łodzi i okolicach. Mobilny podolog zapewnia leczenie wrastających paznokci, usuwanie odcisków, terapię brodawek i wiele więcej. Skontaktuj się już dziś, aby umówić wizytę domową."  />
            <div className={styles.mobilePodologistWrapper}>
                <div className={styles.mobilePodologistTitleWrapper}>
                    <h1 className={styles.mobilePodologistTitle}>
                        Mobilny podolog Łódź i okolice
                    </h1>
                </div>
                <div className="container">
                    <h2 className={styles.mobilePodologistSubtitle}>
                        Czym zajmuje się nasz mobilny gabinet podologiczny w Łodzi?
                    </h2>
                    <p className={styles.mobilePodologistText}>
                        <strong>M</strong>obilny Gabinet Podologiczny w Łodzi to Twoje wygodne rozwiązanie na pielęgnację stóp
                        bez potrzeby wychodzenia z domu. Idealnie wpasowuje się w potrzeby Seniorów z
                        ograniczoną mobilnością, osób niepełnosprawnych, jak również tych, którzy cenią swój
                        czas i komfort. Nie musisz już martwić się o trudności związane z dojazdem - to ja
                        przyjadę do Ciebie, aby w Twoim domu zająć się wszystkimi problemami stóp, które
                        dotąd mogły wydawać się kłopotliwe. Zapewniam wygodę oraz oszczędność czasu,
                        przywracając zdrowie i urodę Twoim stopom.
                    </p>
                </div>
                <div className={styles.mobilePodologistSection}>
                    <div className="container" style={{display: 'flex', alignItems: 'center'}}>
                        <p className={styles.mobilePodologistText}>
                            <strong>U</strong>sługi podologiczne wykonywane są na najwyższym poziomie z zachowaniem najwyższych standardów higieny. Każde narzędzie i frez używany podczas moich zabiegów przechodzi przez rygorystyczny proces sterylizacji , zapewniając pełną dezynfekcję i bezpieczeństwo dla każdego pacjenta. Dla Twojego bezpieczeństwa, każdy zabieg wykonuje przy użyciu nowego, sterylnego pakietu medycznego, gwarantującego najwyższe standardy higieniczne.
                            <br/> Oszczędzaj czas i unikaj podróży. Moja mobilność to wygoda dla Ciebie!
                        </p>
                        {/*<img src={image1} alt={image1} className={styles.mobilePodologistImage} />*/}
                    </div>
                </div>
                <div className="container">
                    {/*<img src={image4} alt={image4} className={styles.mobilePodologistImage} />*/}
                    <h3 className={styles.mobilePodologistSectionTitle}>
                        W ramach usługi mobilnego pogotowia podologicznego oferuję:
                    </h3>
                    <ul className={styles.mobilePodologistList}>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Pedicure leczniczy
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Usuwanie nagniotków,odcisków, modzeli
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Terapia brodawek wirusowych
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Leczenie wrastających i wkręcających się paznokci
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Leczenie grzybicy stóp i paznokci
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Terapie na przesuszoną skórę, rogowacenie i pękające pięty
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Rekonstrukcje paznokci
                        </li>
                    </ul>

                </div>
                <div className={styles.mobilePodologistSection}>
                    <div className="container">
                        <p className={styles.mobilePodologistText}>
                            <strong>M</strong>oim celem jest zapewnienie kompleksowej opieki nad stopami i paznokciami, zarówno w zakresie leczenia problemów, jak i profilaktyki oraz pielęgnacji. Dokładnie ocenię stan Twoich stóp, zdiagnozuje ewentualne problemy i zaproponuje odpowiednią terapię.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <h3 className={styles.mobilePodologistSectionTitle}>
                        Wybór mobilnego podologa jest idealny, jeśli:
                    </h3>
                    <ul className={styles.mobilePodologistList}>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Masz ograniczony czas i trudności z dostosowaniem wizyt w gabinecie do swojego harmonogramu,
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Jako rodzic, potrzebujesz opieki podologicznej, nie mając możliwości pozostawienia dziecka,
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Cenisz prywatność i intymność, jaką oferuje wizyta w domowym zaciszu,
                        </li>
                        <li className={styles.mobilePodologistItem}>
                            🔶 Jesteś ograniczony ruchowo.
                        </li>
                    </ul>
                </div>
                <div className={styles.mobilePodologistSection}>
                    <div className="container">
                        <p className={styles.mobilePodologistText}>
                            <strong>W</strong>ystarczy, że zadzwonisz pod numer: <a href="tel:+48459410096">459 410 096</a> , aby umówić się na wizytę. Specjalista przyjedzie z niezbędnym sprzętem, zapewniając sterylność narzędzi i maksymalną higienę zabiegów. Podczas pierwszego spotkania przeprowadzony zostanie wywiad oraz odpowiedni zabieg podologiczny. Na zakończenie otrzymasz również wskazówki dotyczące pielęgnacji i diety, które pomogą utrzymać stopy w doskonałym stanie.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <p className={styles.mobilePodologistText}>
                        Zapewniam, że regularne korzystanie z usług podologa pozwoli uniknąć wielu problemów związanych ze stopami i paznokciami. Nie zwlekaj, zadzwoń i umów się na wizytę, aby cieszyć się zdrowymi i pięknymi stopami każdego dnia!
                    </p>
                </div>
                <div className="container">
                    <span>Przykładowe przedmioty podologa mobilnego: </span>
                    <div>
                        <img src={image1} alt={image1} />
                        <img src={image2} alt={image2} />
                        <img src={image3} alt={image3} />
                        <img src={image4} alt={image4} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default MobilePodologist;
