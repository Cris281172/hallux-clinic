import styles from './MobilePodologist.module.scss'
import image1 from '../../images/home/mobile-podologist/gallery/image-1.webp'
import image2 from '../../images/home/mobile-podologist/gallery/image-2.webp'
import image3 from '../../images/home/mobile-podologist/gallery/image-3.webp'
import image4 from '../../images/home/mobile-podologist/gallery/image-4.webp'
const MobilePodologist = () => {
    return(
        <div className={styles.mobilePodologistWrapper}>
            <div className={styles.mobilePodologistTitleWrapper}>
                <h2 className={styles.mobilePodologistTitle}>
                    Mobilny Podolog
                </h2>
            </div>
            <div className="container">
                <h3 className={styles.mobilePodologistSubtitle}>
                    Czym Zajmuje Się Mobilny Gabinet Podologiczny?
                </h3>
                <p className={styles.mobilePodologistText}>
                    <strong>M</strong>obilny Gabinet Podologiczny to pielęgnacja stóp z dojazdem do pacjenta. Jest to krok w stronę Seniorów mających problem z chodzeniem lub idealne rozwiązanie dla osób niechodzących, ale równierz dla osób nie mających czasu. Wstydliwe sprawy Twoich stóp możesz rozwikłać z moją pomocą w zaciszu Twojego własnego domu. Przyjadę prosto do Twojego domu oferując Tobie wygodę i oszczędność czasu.
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
                <h4 className={styles.mobilePodologistSectionTitle}>
                    W ramach usługi mobilnego podologa oferuję:
                </h4>
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
                <h4 className={styles.mobilePodologistSectionTitle}>
                    Wybór mobilnego podologa jest idealny, jeśli:
                </h4>
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
            <div>
                <img src={image1} alt={image1} />
            </div>
        </div>
    )
}

export default MobilePodologist;
