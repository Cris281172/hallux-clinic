import styles from './Rodo.module.scss'

const RightAccess = () => {
    return(
        <div className={styles.rightAccess}>
            <p>Prawo dostępu przysługujące osobie, której dane dotyczą</p>
            <h6>
                1. Osoba, której dane dotyczą, jest uprawniona do uzyskania od administratora potwierdzenia, czy
                przetwarzane są dane osobowe jej dotyczące, a jeżeli ma to miejsce, jest uprawniona do uzyskania
                dostępu do nich oraz następujących informacji:
            </h6>
            <ul>
                <li>
                    a) cele przetwarzania;
                </li>
                <li>
                    b) kategorie odnośnych danych osobowych;
                </li>
                <li>
                    c) informacje o odbiorcach lub kategoriach odbiorców, którym dane osobowe zostały lub zostaną
                    ujawnione, w szczególności o odbiorcach w państwach trzecich lub organizacjach
                    międzynarodowych;
                </li>
                <li>
                    d) w miarę możliwości planowany okres przechowywania danych osobowych, a gdy nie jest to
                    możliwe, kryteria ustalania tego okresu;
                </li>
                <li>
                    e) informacje o prawie do żądania od administratora sprostowania, usunięcia lub ograniczenia
                    przetwarzania danych osobowych dotyczącego osoby, której dane dotyczą, oraz do wniesienia
                    sprzeciwu wobec takiego przetwarzania;
                </li>
                <li>
                    f) informacje o prawie wniesienia skargi do organu nadzorczego;
                </li>
                <li>
                    g) jeżeli dane osobowe nie zostały zebrane od osoby, której dane dotyczą - wszelkie dostępne
                    informacje o ich źródle;
                </li>
                <li>
                    h) informacje o zautomatyzowanym podejmowaniu decyzji, w tym o profilowaniu, o którym mowa w
                    art. 22 ust. 1 i 4, oraz - przynajmniej w tych przypadkach - istotne informacje o zasadach ich
                    podejmowania, a także o znaczeniu i przewidywanych konsekwencjach takiego przetwarzania dla
                    osoby, której dane dotyczą.
                </li>
            </ul>
            <h6>
                2. Jeżeli dane osobowe są przekazywane do państwa trzeciego lub organizacji międzynarodowej,
                osoba, której dane dotyczą, ma prawo zostać poinformowana o odpowiednich zabezpieczeniach, o
                których mowa w art. 46, związanych z przekazaniem.
            </h6>
            <h6>
                3. Administrator dostarcza osobie, której dane dotyczą, kopię danych osobowych podlegających
                przetwarzaniu. Za wszelkie kolejne kopie, o które zwróci się osoba, której dane dotyczą,
                administrator może pobrać opłatę w rozsądnej wysokości wynikającej z kosztów administracyjnych.
                Jeżeli osoba, której dane dotyczą, zwraca się o kopię drogą elektroniczną i jeżeli nie zaznaczy inaczej,
                informacji udziela się powszechnie stosowaną drogą elektroniczną.
            </h6>
            <h6>
                4. Prawo do uzyskania kopii, o której mowa w ust. 3, nie może niekorzystnie wpływać na prawa i
                wolności innych.
            </h6>
        </div>
    )
}

export default RightAccess;