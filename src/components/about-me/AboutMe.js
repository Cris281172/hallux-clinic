import HelmetContent from "../../helpers/HelmetContent";
import BeforeAfterGallery from "./gallery/BeforeAfterGallery";
import styles from './AboutMe.module.scss'
import katarzyna from '../../images/people/katarzyna.jpg'
import anna from '../../images/people/anna.jpg'
import jakub from '../../images/people/jakub.jpg'
import selfPhoto from '../../images/home/about-me/self-photo.webp'
const AboutMe = () => {

    return(
        <div className={styles.aboutMe}>
            <HelmetContent title="O mnie - Hallux Clinic" desc="Jestem dyplomowanym specjalistą ds. podologii. Zajmuje się kompleksowo terapią stóp. W moim gabinecie mobilnym znajdziecie w ofercie zarówno podstawową pielegnacje stóp jak i terapię specjalistyczną." />
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.aboutMeTitle}>O mnie</h2>
                </div>
                <div className={styles.topInfoWrapper}>
                    <div className={styles.topInfo}>
                        <h3 className={styles.title}>mgr Monika Juczyńska <br /> Dyplomowany Specjalista ds. Podologii</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                🎓 Absolwentka Wyższej Szkoły Kosmetyki i Nauk o Zdrowiu w Łodzi
                            </li>
                            <li className={styles.item}>
                                🎓 Absolwentka Wyższej Szkoły Edukacji Zdrowotnej i Nauk Społecznych w Łodzi
                            </li>
                            <li className={styles.item}>
                                🎓 Absolwentka Wyższej Szkoły Teologiczno-Humanistycznej w Łodzi
                            </li>
                            <li className={styles.item}>
                                🎓 Absolwentka Prywatnej Policealnej Szkoły Kosmetycznej w Łodzi
                            </li>
                        </ul>
                        <p className={styles.text}>
                            <strong>S</strong>tale poszerzam swoją wiedzę uczestnicząc w licznych szkoleniach i kongresach podologicznych. Podologia to moja pasja, pracuję z dorosłymi i dziećmi - jednak nie ukrywam, że moim priorytetem są seniorzy, którzy ze względu na choroby współistniejące nie są w stanie samodzielnie dotrzeć do gabinetu podologicznego.
                        </p>
                        <p className={styles.text}>
                            <strong>P</strong>odążam za Tobą, aby zapewnić najlepszą opiekę dla Twoich stóp, gdziekolwiek jesteś! W Hallux.Clinic wierzę, że zdrowie stóp jest kluczem do pełni życia. Dlatego mój mobilny gabinet podologiczny jest wyposażony w najnowocześniejsze technologie i procedury, aby zapewnić Ci bezpieczną i skuteczną opiekę.
                        </p>
                        <h4>
                            Zobowiązana do Najwyższych Standardów Higieny i Sterylizacji!!!
                        </h4>
                        <p className={styles.text}>
                            <strong>P</strong>ełna Sterylność Narzędzi i Frezów: Każde narzędzie i frez używany podczas moich zabiegów przechodzi przez rygorystyczny proces sterylizacji , zapewniając pełną dezynfekcję i bezpieczeństwo dla każdego klienta.
                        </p>
                        <p className={styles.text}>
                            <strong>S</strong>terylny Pakiet Medyczny dla Każdego Klienta: Dla Twojego bezpieczeństwa, każdy zabieg wykonuje przy użyciu nowego, sterylnego pakietu medycznego, gwarantującego najwyższe standardy higieniczne.
                        </p>
                        <p className={styles.text}>
                            <strong>A</strong>utoklaw – Złoty Standard Sterylizacji: Mój mobilny gabinet wykorzystuje autoklaw, urządzenie do sterylizacji, które zabezpiecza przed bakteriami, wirusami i innymi mikroorganizmami, zapewniając, że wszystkie nasze narzędzia są sterylne i bezpieczne w użyciu.
                        </p>
                        <p className={styles.text}>
                            <strong>W</strong>spółpraca to podstawa, dlatego w moim gabinecie przy współudziale wielu specjalistów jesteśmy w stanie postawić trafną diagnozę, a tym samym włączyć skuteczne leczenie. W centrum naszego zainteresowania pozostaje pacjent, jego zadowolenie i zaufanie, dlatego współpracuję z najlepszymi ekspertami, aby optymalnie wykorzystać różnorodność metod i technik. Działając zespołowo zapewniamy szeroki zakres usług i profesjonalizm naszym pacjentom.
                        </p>
                        <span>Współpracuję z:</span>
                    </div>
                    <div className={styles.selfPhotoWrapper}>
                        <img src={selfPhoto} alt="O mnie" className={styles.selfPhoto} />
                    </div>
                </div>

                <div className={styles.peopleWrapper}>
                    <div className={styles.people}>
                        <div className={styles.information}>
                            <h4 className={styles.title}>Mgr Jakub Ujejski</h4>
                            <p className={styles.paragraph}>Absolwent Uniwersytetu Medycznego w Łodzi na kierunku Fizjoterapia. Posiada wiele szkoleń z zakresu masażu i nowych technik terapii manualnej. Wykorzystuje w swojej pracy różne techniki takie jak: masaż głeboki, kinesiotaping, masaż mięśniowo-powięziowy, terapii manualnej. Zabiegi wykonuje w gabinecie oraz z dojazdem do pacjenta.</p>
                            <ul className={styles.list}>
                                <li className={styles.item}>- tel. 796 905 620</li>
                                <li className={styles.item}>- email: jakubmasuje@gmail.com</li>
                            </ul>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={jakub} alt="Jakub Ujejski" />
                        </div>
                    </div>
                    <div className={styles.people}>
                        <div className={styles.information}>
                            <h4 className={styles.title}>Dr n. med. Anna Kaczorowska</h4>
                            <p className={styles.paragraph}>Specjalista dermatolog, wenerolog, lekarz medycyny estetycznej</p>
                            <p className={styles.paragraph}>Absolwentka Akademii Medycznej w Łodzi. Tytuł doktora nauk medycznych uzyskała w 2009 roku. Specjalizację z dermatologii i wenerologii robiła pracując w Klinice Dermatologii, Dermatologii Dziecięcej i Onkologicznej w Łodzi pod kierownictwem Pana prof. dr hab n. med Andrzeja Kaszuby. Jest członkiem Polskiego Towarzystwa Dermatologicznego oraz Stowarzyszenia Lekarzy Dermatologów Estetycznych.</p>
                            <ul className={styles.list}>
                                <li className={styles.item}>- Anna Kaczorowska Łódź ul. Zbożowa 9 tel. 797-748-805</li>
                            </ul>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={anna} alt="Anna Kaczorowska" />
                        </div>
                    </div>
                    <div className={styles.people}>
                        <div className={styles.information}>
                            <h4 className={styles.title}>Dr. n.med. Katarzyna Juczyńska</h4>
                            <p className={styles.paragraph}>Dermatolog, Wenerolog</p>
                            {/*<p className={styles.paragraph}>Klinika Dermatologii i Wenerologii Uniewersytetu Medycznego w Łodzi: </p>*/}
                            <p className={styles.paragraph}>Specjalistka w dziedzinie dermatologii i wenerologii. Ukończyła Wydział Lekarski Akademii Medycznej we Wrocłąwiu. W 2018r obroniła z wyróżnieniem prace doktorską, uzysukując tytuł doktora nauk medycznych. Od 2012r pracuje w Klinice Dermatologii i Wenerologii Uniwersytetu Medycznego w Łodzi, gdzie obecnie pełni fukncję adiunkta</p>
                            <ul className={styles.list}>
                                <li className={styles.item}>- Plac Hallera 1, 90-647 Łódź, 42 639 3093</li>
                                <li className={styles.item}>- Salve Medica Szparagowa 10, 91-211, 42 254 64 84</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;

