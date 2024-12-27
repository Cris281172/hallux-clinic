import HelmetContent from "../../helpers/HelmetContent";
import BeforeAfterGallery from "./gallery/BeforeAfterGallery";
import styles from './AboutMe.module.scss'
import katarzyna from '../../images/people/katarzyna.webp'
import anna from '../../images/people/anna.jpg'
import jakub from '../../images/people/jakub.jpg'
import selfPhoto from '../../images/home/about-me/self-photo.webp'
import BackButton from "../../helpers/back-button/BackButton";
import Breadcrumbs from "../../helpers/breadcrumbs/Breadcrumbs";
const AboutMe = () => {

    return(
        <div className={styles.aboutMe}>
            <HelmetContent title="O mnie - Podolog Łódź Hallux Clinic" desc="Jestem dyplomowanym specjalistą ds. podologii. Zajmuje się kompleksowo terapią stóp. W moim gabinecie mobilnym znajdziecie w ofercie zarówno podstawową pielegnacje stóp jak i terapię specjalistyczną." />
            <Breadcrumbs />
            <div className="container" style={{position: 'relative'}}>
                <BackButton />
                <div className={styles.titleWrapper}>
                    <h1 className={styles.aboutMeTitle}>O mnie</h1>
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
                            <strong>P</strong>odologia to moja pasja. Stale poszerzam swoją wiedzę uczestnicząc w licznych szkoleniach i
                            kongresach podologicznych. Pracuję z dorosłymi i dziećmi - jednak nie ukrywam, że moim priorytetem są
                            seniorzy, którzy ze względu na choroby współistniejące nie są w stanie samodzielnie dotrzeć do gabinetu
                            podologicznego. Dla uzyskania najwyższych standardów usług współpracuję z cenionymi specjalistami.
                            W moim Mobilnym Gabinecie Podologicznym stosuje nowoczesne technologie i procedury aby
                            zapewnić Ci bezpieczną i skuteczną usługę, a dodatkowo wygodę i oszczędność Twojego czasu.
                        </p>
                        <p className={styles.text}>
                            <strong>Z</strong>awsze jestem gotowa Tobie pomóc i przyjechać niezależnie od położenia Twojego miejsca
                            zamieszkania na terenie Łodzi, zapewniając najlepszą opiekę dla Twoich stóp. Podzielam słuszność
                            stwierdzenia , że zdrowe stopy są kluczem do pełni życia. Chore stopy przeszkadzają jak wiesz w
                            realizacji codziennych obowiązków i negatywnie wpływają na Twoje ogólne samopoczucie. Dlatego
                            pozwól Sobie pomóc w zaciszu Twojego domu i pozbądź się problemów ze stopami. W moim Mobilnym
                            Gabinecie Podologicznym stosuje nowoczesne technologie i procedury aby zapewnić Ci bezpieczną i
                            skuteczną usługę, a dodatkowo wygodę i oszczędność Twojego czasu.
                        </p>
                        <p className={styles.text}>
                            <strong>D</strong>la Pacjentów preferujących wykonanie zabiegu podologicznego w gabinecie medycznym nawiązałam
                            współpracę z Centrum Medycznym SALVE, gdzie w każdy wtorek pozostaję do Waszej dyspozycji.
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
                            <p className={styles.paragraph}>Ukończył Uniwersytet Medyczny w Łodzi, uzyskując tytuł magistra fizjoterapii. Regularnie uczestniczy w szkoleniach dotyczących masażu i nowoczesnych technik terapii manualnej. W swojej praktyce stosuje różnorodne metody, takie jak masaż głęboki, kinesiotaping, masaż mięśniowo-powięziowy oraz terapię manualną. Zabiegi przeprowadza zarówno w gabinecie, jak i z dojazdem do pacjenta.</p>                            <ul className={styles.list}>
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
                            <p className={styles.paragraph}>Ukończyła Akademię Medyczną w Łodzi, uzyskując tytuł doktora nauk medycznych w 2009 roku. Specjalizację z dermatologii i wenerologii zdobyła w Klinice Dermatologii, Dermatologii Dziecięcej i Onkologicznej w Łodzi, pracując pod kierownictwem prof. dr hab. n. med. Andrzeja Kaszuby. Jest aktywną członkinią Polskiego Towarzystwa Dermatologicznego oraz Stowarzyszenia Lekarzy Dermatologów Estetycznych.</p>                            <ul className={styles.list}>
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
                            <p className={styles.paragraph}>Dr Katarzyna Juczyńska jest wykwalifikowaną dermatolog i wenerolog. Ukończyła studia medyczne na Wydziale Lekarskim Akademii Medycznej we Wrocławiu. W 2018 roku obroniła swoją pracę doktorską z wyróżnieniem, uzyskując tytuł doktora nauk medycznych. Od 2012 roku jest związana z Kliniką Dermatologii i Wenerologii Uniwersytetu Medycznego w Łodzi, gdzie obecnie pełni funkcję adiunkta.</p>                            <ul className={styles.list}>
                                <li className={styles.item}>- Plac Hallera 1, 90-647 Łódź, 42 639 3093</li>
                                <li className={styles.item}>- Salve Medica Szparagowa 10, 91-211, 42 254 64 84</li>
                            </ul>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={katarzyna} alt="Katarzyna Juczyńska" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;

