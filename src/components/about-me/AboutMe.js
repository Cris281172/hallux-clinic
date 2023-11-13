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
                    <div>
                        <h3 className={styles.title}>Monika Juczyńska <br /> Dyplomowany Specjalista ds. Podologii</h3>
                        <p className={styles.text}>
                            mgr. Monika Juczyńska - absolwentka Wyżeszej Szkoły Kosmetyki i Nauk o Zdrowiu w Łodzi, absolwentka Wyższej Szkoły edukacji Zdrowotnej i Nauk społecznych w Łodzi, absolwentka Wyżeszj Szkoły Teologiczno Humanistycznej w Łodzi,
                            absolwentka Prywatnej Policealnej Szkoły Kosmetycznej w Łodzi.
                        </p>
                        <p className={styles.text}>
                            Stale poszerzam swoją wiedzę uczestnicząc w licznych szkoleniach i kongresach podologicznych. Podologia to moja pasja, pracuję z dorosłymi i dziećmi - jednak
                            nie ukrywam, że moim priorytetem są seniorzy, którzy ze względu na choroby współistniejące nie są w stanie samodzielnie dotrzeć do gabinetu podologicznego.
                        </p>
                        <p className={styles.text}>
                            Współpraca to podstawa, dlatego w moim gabinecie przy współudziale wielu specjalistów jesteśmy w stanie postawić trafną diagnozę, a tym samym włączyć skuteczne leczenie. W centrum naszego zainteresowania pozostaje pacjent,
                            jego zadowoloenie i zaufanie, dlatego współpracuję z najlepszymi ekspertami, aby optymalnie wykorzystać różnorodność metod i technik. Działając zespołowo zapewniamy szeroki zakres usług i profesionalizm naszym pacjentom. <br />
                            <span>Współpracuję z:</span>
                        </p>
                    </div>

                    <img src={selfPhoto} alt="O mnie" className={styles.selfPhoto} />
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
                        <img className={styles.image} src={jakub} alt="Jakub Ujejski" />
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
                        <img className={styles.image} src={anna} alt="Anna Kaczorowska" />

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
                        <img className={styles.image} src={katarzyna} alt="Katarzyna Juczyńska" />

                    </div>
                </div>















                {/*Salon Kosmetyczny "Róza" Janusza Kusocińskiego 86B, 94-054 Łódź 42 687 6015*/}
                <BeforeAfterGallery />
            </div>
        </div>

    )
}

export default AboutMe;

